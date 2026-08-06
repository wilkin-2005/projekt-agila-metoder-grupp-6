"use client";

import './Pagination.css';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Pagination({page, pages}: {page:number,pages:number}){
    const currentPage = page;
    const router = useRouter();
    const pathname = usePathname();
    let arr:number[] = [];
    arr.length = pages;
    arr.fill(0);

    const visiblePagesOffsetFromMiddle = 2;
    const offsetStart = currentPage <= visiblePagesOffsetFromMiddle+1 ? (visiblePagesOffsetFromMiddle+2)-currentPage : 0;
    const offsetEnd = currentPage > pages-(visiblePagesOffsetFromMiddle+1) ? visiblePagesOffsetFromMiddle-(pages-currentPage)+1 : 0;

    return <ul className='Pagination'>
        {arr.map(((v,i) =>{
            const pageVisible = (currentPage-(i+1) <= visiblePagesOffsetFromMiddle+offsetEnd && currentPage-(i+1) >= 0) || (currentPage-(i+1) >= -visiblePagesOffsetFromMiddle-offsetStart && currentPage-(i+1) <= 0)
            const firstPageExtraShouldBeVisible = !pageVisible && i+1 === 1;
            const lastPageExtraShouldBeVisible = !pageVisible && i+1 === pages;
            return pageVisible || firstPageExtraShouldBeVisible || lastPageExtraShouldBeVisible?
         <li key={i+1} onClick={() =>{if(currentPage === i+1) return;
                    const params = new URLSearchParams();
                    params.set("page", (i+1).toString());
                    router.push(pathname + '?' +params.toString())
         }} 
         className={`Pagination__Item ${currentPage === i+1 ? 'Pagination__Item--current': ''}`}>
            
            <p>{i+1}</p>
        </li>: null}))}
    </ul>
}