"use client"
import { useRouter } from 'next/navigation';
import './ListTable.css'
import { deleteProduct } from '../lib/products';
import { useEffect, useState } from 'react';

export default function ListTable({data,columns,page}: {data:Record<string, any>[], columns:string[],page:number}){
    const router = useRouter();
    const [deletedProducts, setDeletedProducts] = useState<Record<string, boolean>>({});
    const [confirmDeletion, setConfirmDeletion] = useState();

    const extraItemsNeeded = 6 - data.length + Object.keys(deletedProducts).length;
    const extra: number[] = [];
    extra.length = extraItemsNeeded;
    extra.fill(0);

    useEffect(() => {
        setDeletedProducts({});
    }, [page])

    return <table className="ListTable">
        <thead>
            <tr>
                {columns.map(column => <th key={column}>
                    {column[0].toUpperCase() + column.slice(1)}
                </th>)}
                <th key={"actions"}>
                    Actions
                </th>
            </tr>
        </thead>

        <tbody>

            {
                data.length === 0 ? <tr>
                    <td>No data found</td>
                </tr>
                    : null}

            {
                data.map(d =>
                    <tr key={d.id} className={`ListTable__ListItem ${deletedProducts[d.id] ? 'ListTable__ListItem--deleted' : ''}`} data-category-id={d.categoryId}>
                        {columns.map((column =>
                            <td key={column}>{!mapper ? d[column] : mapper(d, column)}</td>
                        ))}
                        <td key={"actions"}>
                            <div className="ListTable__Actions">
                                <img width={23} alt='edit-icon' onClick={() => router.push(`product/edit/${d.id}`)} src="edit.png"></img>
                                <img width={23} alt='delete-icon' onClick={async () => {
                                    if(window.confirm('Delete ' + d.title + "?")){
                                        try {
                                        await deleteProduct(d.id)
                                        setDeletedProducts((obj) => ({...obj, [d.id]: true}));   
                                        setConfirmDeletion(undefined);
                                        const itemDeleted = new CustomEvent("itemDeleted", {
                                            detail: {
                                                id: d.id
                                            }
                                        });
                                        window.dispatchEvent(itemDeleted)
                                    } catch (error) {
                                        if(error instanceof Error){
                                            console.error(error.message)
                                        }
                                    }
                                    }
                                }
                                } src="delete.png"></img>
                        </div>
                    </td>
                    </tr>
                )
            }
            {
                extra.map((v,i) => {
                    return <tr key={data.length + i+1}><td> <div className="ListTable__Title">{' '}</div></td></tr>
                })
            }
        </tbody>
    </table>
}

function mapper(obj: Record<string, any>, column: string) {
    const value = obj[column];
    if (column === "title") {
        return <div className="ListTable__Title"><img alt="" width={45} height={45} src={obj["thumbnail"] || obj["images"][0]}></img> <div> <strong>{value}</strong> <p className="ListTable__Sku">{obj["sku"]}</p> </div> </div>
    }
    if (column === "category") {
        return value.name
    }
    if (column === "price") {
        return <strong>€{value.toString()}</strong>
    }
    if (column === "stock") {
        let stock: { value: string; class: string };
        if (value > 10) {
            stock = { value: "In Stock", class: "ListTable__ListItem-in-stock" }
        } else if (value > 0) {
            stock = { value: "Low Stock", class: "ListTable__ListItem-low-stock" }
        } else {
            stock = { value: "Out of Stock", class: "ListTable__ListItem-out-of-stock" }
        }
        return <div className="ListTable__Stock"><p className={stock.class}>{stock.value}</p><p>({value})</p> </div>
    }
    return value;
}