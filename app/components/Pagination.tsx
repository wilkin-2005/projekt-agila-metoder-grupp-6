"use client";

import './Pagination.css';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react/jsx-runtime';

export default function Pagination({page, pages}: {page:number,pages:number}){
    const currentPage = page;
    const router = useRouter();
    const pathname = usePathname();
    let arr:number[] = [];
    arr.length = pages;
    arr.fill(0);

    const visiblePagesOffsetFromMiddle = 1;

    const reduceOffsetStart = currentPage-visiblePagesOffsetFromMiddle === 2 ? 1: 0;
    const reduceOffsetEnd = currentPage+visiblePagesOffsetFromMiddle === pages-1 ? 1 : 0;
    const extraOffsetStart = currentPage <= visiblePagesOffsetFromMiddle ? (visiblePagesOffsetFromMiddle+1)-currentPage : 0;
    const extraOffsetEnd = currentPage > pages-(visiblePagesOffsetFromMiddle+1) ? visiblePagesOffsetFromMiddle-(pages-currentPage) : 0;
    const extraStart =  currentPage-visiblePagesOffsetFromMiddle <= 2; // when first page is included to keep same number of pages all the time
    const extraEnd = currentPage+visiblePagesOffsetFromMiddle >= pages-1; // when last page is included to keep same number of pages all the time

    const offsetLeft = visiblePagesOffsetFromMiddle+extraOffsetEnd-reduceOffsetEnd+Number(extraEnd);
    const offsetRight = -(visiblePagesOffsetFromMiddle+extraOffsetStart-reduceOffsetStart+Number(extraStart));

    const pageLimitStart = currentPage-offsetLeft;
    const pageLimitEnd = currentPage-offsetRight;

    return <ul className='Pagination'>
        {arr.map(((v,i) =>{ 
            const pageVisible = (((i+1) >= pageLimitStart) && ((i+1) <= pageLimitEnd))
            
            const firstPageExtraShouldBeVisible = !pageVisible && i+1 === 1;
            const lastPageExtraShouldBeVisible = !pageVisible && i+1 === pages;
            
            return pageVisible || firstPageExtraShouldBeVisible || lastPageExtraShouldBeVisible?
            <Fragment key={i+1}>
                {lastPageExtraShouldBeVisible && pageLimitEnd < pages-1  ? <li className='Pagination__ExtraPage'><p>...</p></li>:null}
                <li onClick={() =>{if(currentPage === i+1) return;
                            const params = new URLSearchParams();
                            params.set("page", (i+1).toString());
                            router.push(pathname + '?' +params.toString())
                }} 
                className={`Pagination__Item ${currentPage === i+1 ? 'Pagination__Item--current': ''}`}>
                    
                    <p>{i+1}</p>
                </li>
                {firstPageExtraShouldBeVisible && pageLimitStart > 2 ? <li className='Pagination__ExtraPage'><p>...</p></li>:null}
            </Fragment>: null}))}
    </ul>
}