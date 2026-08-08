"use client";

import './Pagination.css';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react/jsx-runtime';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({page, pages}: {page:number,pages:number}){
    const currentPage = page;
    const router = useRouter();
    const pathname = usePathname();
    let arr:number[] = [];
    arr.length = pages;
    arr.fill(0);

    const offset:number = 2;

    const extraOffsetStart:number = currentPage < offset+1 ? (offset+1)-currentPage : 0; // add extra pages during right during first pages to keep number of pages the same (offset*2 + 1)
    const extraOffsetEnd:number = currentPage > pages-(offset+1) ? offset-(pages-currentPage) : 0; // add extra pages to the left during last pages to keep number of pages the same (offset*2 + 1)

    const pageLimitStart:number = currentPage - offset - extraOffsetEnd;
    const pageLimitEnd:number = currentPage + offset + extraOffsetStart;

    return <ul className='Pagination'>
                {currentPage > 1 ?
                    <li className='Pagination__Item' onClick={() => {
                        const params = new URLSearchParams();
                        params.set("page", (currentPage-1).toString());
                        router.push(pathname + '?' +params.toString());
                    }}>
                        <ChevronLeft/>
                    </li> : null
                }
                {arr.map(((v,i) =>{ 
                    const pageVisible = (((i+1) >= pageLimitStart) && ((i+1) <= pageLimitEnd))
                    
                    const firstPageExtraShouldBeVisible = !pageVisible && i+1 === 1;
                    const lastPageExtraShouldBeVisible = !pageVisible && i+1 === pages;

                    return pageVisible || firstPageExtraShouldBeVisible || lastPageExtraShouldBeVisible ?
                    <Fragment key={i+1}>
                        {lastPageExtraShouldBeVisible && (pageLimitEnd < pages-1)  ? 
                            <li className='Pagination__ExtraPage'>
                                <p>...</p>
                            </li>:null
                        }
                        <li className={`Pagination__Item ${currentPage === i+1 ? 'Pagination__Item--current': ''}`}
                         onClick={() =>{if(currentPage === i+1) return;
                            const params = new URLSearchParams();
                            params.set("page", (i+1).toString());
                            router.push(pathname + '?' +params.toString());
                        }} 
                        >
                            <p>{i+1}</p>
                        </li>
                        {firstPageExtraShouldBeVisible && (pageLimitStart > 2) ? 
                            <li className='Pagination__ExtraPage'>
                                <p>...</p>
                            </li>:null
                        }
                    </Fragment> : null
                    }))
                }
                {currentPage < pages ? 
                <li className='Pagination__Item' onClick={() => {
                    const params = new URLSearchParams();
                    params.set("page", (currentPage+1).toString());
                    router.push(pathname + '?' +params.toString());
                }}>
                    <ChevronRight/> 
                </li> : null}
        </ul>
}