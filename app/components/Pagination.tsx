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

    const extraOffsetStart:number = currentPage < offset+1 ? (offset+1)-currentPage : 0; // add extra pages to the right during first pages to keep number of pages within offset the same
    const extraOffsetEnd:number = currentPage > pages-(offset+1) ? offset-(pages-currentPage) : 0; // add extra pages to the left during last pages to keep number of pages within offset the same

    const offsetLeft = offset+extraOffsetEnd;
    const offsetRight = offset+extraOffsetStart;

    const pageLimitStart:number = currentPage - offsetLeft;
    const pageLimitEnd:number = currentPage + offsetRight;

    return <ul className='Pagination'>
                    <li className='Pagination__Item' onClick={() => {
                        if(currentPage === 1) return;
                        const params = new URLSearchParams();
                        params.set("page", (currentPage-1).toString());
                        router.replace(pathname + '?' +params.toString(), {scroll:false});
                    }}>
                        <ChevronLeft/>
                    </li>
                    <li 
                     className={`Pagination__Item ${pageLimitStart < 2 ? "Pagination__Item--hidden" : ""}`}
                     onClick={() => {
                        if(currentPage === 1) return;
                        const params = new URLSearchParams();
                        params.set("page", (1).toString());
                        router.replace(pathname + '?' +params.toString(), {scroll:false});
                    }}>1</li>
                    <li className={`Pagination__ExtraPage ${pageLimitStart <= 2 ? "Pagination__ExtraPage--hidden" : ""}`}>
                        <p>...</p>
                    </li>
                {arr.map(((v,i) =>{ 
                    const pageVisible = (((i+1) >= pageLimitStart) && ((i+1) <= pageLimitEnd))
                    
                    const firstPageExtraShouldBeVisible = !pageVisible && i+1 === 1; // show extra pages outside
                    const lastPageExtraShouldBeVisible = !pageVisible && i+1 === pages; // show extra pages outside

                    return pageVisible && (!firstPageExtraShouldBeVisible && !lastPageExtraShouldBeVisible) ?
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
                            router.replace(pathname + '?' +params.toString(), {scroll:false});
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
                    <li className={`Pagination__ExtraPage ${pageLimitEnd >= pages-1 ? "Pagination__ExtraPage--hidden" : ""}`}>
                        <p>...</p>
                    </li>
                    <li
                        className={`Pagination__Item ${pageLimitEnd > pages-1 ? "Pagination__Item--hidden" : ""}`}
                        onClick={() => {
                            if(currentPage === pages) return;
                            const params = new URLSearchParams();
                            params.set("page", (pages).toString());
                            router.replace(pathname + '?' +params.toString(), {scroll:false});
                        }}>
                        {pages}
                    </li>



                <li className='Pagination__Item' onClick={() => {
                    if(currentPage === pages) return;
                    const params = new URLSearchParams();
                    params.set("page", (currentPage+1).toString());
                    router.replace(pathname + '?' +params.toString(), {scroll:false});
                }}>
                    <ChevronRight/> 
                </li>
        </ul>
}