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
    const offsetStart = currentPage <= visiblePagesOffsetFromMiddle ? (visiblePagesOffsetFromMiddle+1)-currentPage : 0;
    const offsetEnd = currentPage > pages-(visiblePagesOffsetFromMiddle+1) ? visiblePagesOffsetFromMiddle-(pages-currentPage) : 0;
    const extraStart =  currentPage-visiblePagesOffsetFromMiddle <= 2;
    const extraEnd = currentPage+visiblePagesOffsetFromMiddle >= pages-1;

    return <ul className='Pagination'>
        {arr.map(((v,i) =>{
            const pageVisible = (currentPage-(i+1) <= visiblePagesOffsetFromMiddle+offsetEnd-reduceOffsetEnd+Number(extraEnd) && currentPage-(i+1) >= 0) ||
             (currentPage-(i+1) >= -visiblePagesOffsetFromMiddle-offsetStart+reduceOffsetStart-Number(extraStart) && currentPage-(i+1) <= 0)
            
            const firstPageExtraShouldBeVisible = !pageVisible && i+1 === 1;
            const lastPageExtraShouldBeVisible = !pageVisible && i+1 === pages;
            return pageVisible || firstPageExtraShouldBeVisible || lastPageExtraShouldBeVisible?<Fragment key={i+1}>
                {lastPageExtraShouldBeVisible && currentPage+visiblePagesOffsetFromMiddle !== pages-1 && pages !== visiblePagesOffsetFromMiddle*2+1+2 ? <li className='Pagination__ExtraPage'><p>...</p></li>:null}
         <li key={i+1} onClick={() =>{if(currentPage === i+1) return;
                    const params = new URLSearchParams();
                    params.set("page", (i+1).toString());
                    router.push(pathname + '?' +params.toString())
         }} 
         className={`Pagination__Item ${currentPage === i+1 ? 'Pagination__Item--current': ''}`}>
            
            <p>{i+1}</p>
        </li>
        {firstPageExtraShouldBeVisible && currentPage-visiblePagesOffsetFromMiddle !== 2 && pages !== visiblePagesOffsetFromMiddle*2+1+2 ? <li className='Pagination__ExtraPage'><p>...</p></li>:null}
        </Fragment>: null}))}
    </ul>
}