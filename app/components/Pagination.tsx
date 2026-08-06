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

    const visiblePagesOffsetFromMiddle = 2; // If you change this value you will need to change values in other places below to make it work

    const reduceOffsetStart = currentPage-visiblePagesOffsetFromMiddle === 2 ? 1: 0;
    const reduceOffsetEnd = currentPage+visiblePagesOffsetFromMiddle === pages-1 ? 1 : 0;
    const offsetStart = currentPage <= visiblePagesOffsetFromMiddle ? (visiblePagesOffsetFromMiddle+1)-currentPage : 0;
    const offsetEnd = currentPage > pages-(visiblePagesOffsetFromMiddle+1) ? visiblePagesOffsetFromMiddle-(pages-currentPage) : 0;

    return <ul className='Pagination'>
        {arr.map(((v,i) =>{
            const pageVisible = (currentPage-(i+1) <= visiblePagesOffsetFromMiddle+offsetEnd-reduceOffsetEnd && currentPage-(i+1) >= 0) || (currentPage-(i+1) >= -visiblePagesOffsetFromMiddle-offsetStart+reduceOffsetStart && currentPage-(i+1) <= 0)
            
            const firstPageExtraShouldBeVisible = !pageVisible && i+1 === 1;
            const lastPageExtraShouldBeVisible = !pageVisible && i+1 === pages;
            return pageVisible || firstPageExtraShouldBeVisible || lastPageExtraShouldBeVisible?<Fragment key={i+1}>
                {lastPageExtraShouldBeVisible && currentPage+visiblePagesOffsetFromMiddle !== pages-1 ? <li className='Pagination__ExtraPage'><p>...</p></li>:null}
         <li key={i+1} onClick={() =>{if(currentPage === i+1) return;
                    const params = new URLSearchParams();
                    params.set("page", (i+1).toString());
                    router.push(pathname + '?' +params.toString())
         }} 
         className={`Pagination__Item ${currentPage === i+1 ? 'Pagination__Item--current': ''}`}>
            
            <p>{i+1}</p>
        </li>
        {firstPageExtraShouldBeVisible && currentPage-visiblePagesOffsetFromMiddle !== 2 ? <li className='Pagination__ExtraPage'><p>...</p></li>:null}
        </Fragment>: null}))}
    </ul>
}