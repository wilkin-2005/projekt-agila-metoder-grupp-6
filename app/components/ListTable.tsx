"use client"
import { useRouter } from 'next/navigation';
import './ListTable.css'
import { deleteProduct } from '../lib/products';
import { useState } from 'react';

export default function ListTable({data,columns}: {data:Record<string, any>[], columns:string[]}){
    const router = useRouter();
    const [deletedProducts, setDeletedProducts] = useState<Record<string, boolean>>({})
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
            :   null}

            {
                data.map(d => 
                    <tr key={d.id} className={`ListTable__ListItem ${deletedProducts[d.id] ? 'ListTable__ListItem--deleted' : ''}`}>
                        {columns.map((column => 
                            <td key={column}>{!mapper ?  d[column]: mapper(d, column)}</td>
                        ))}
                        <td key={"actions"}>
                            <div className="ListTable__actions">
                                <img width={23} alt='edit-icon' onClick={() => router.push(`product/edit/${d.id}`)} src="edit.png"></img>
                                <img width={23} alt='delete-icon' onClick={async () => {
                                    try {
                                        await deleteProduct(d.id)
                                        setDeletedProducts((obj) => ({...obj, [d.id]: true}));   
                                    } catch (error) {
                                        if(error instanceof Error){
                                            console.error(error.message)
                                        }
                                    }
                                }
                                } src="delete.png"></img>
                        </div>
                    </td>
                    </tr>
                )
            }
        </tbody>
    </table>
}

function mapper(obj: Record<string, any>, column:string){
        const value = obj[column];
        if(column === "title"){
          return <div className="ListTable__Title"><img alt="" width={45} height={45} src={obj["images"][0]}></img> <div> <strong>{value}</strong> <p className="ListTable__Sku">{obj["sku"]}</p> </div> </div>
        }
        if(column === "category"){
          return value.name
        }
        if(column === "price"){
          return <strong>€{value.toString()}</strong>
        }
        if(column === "stock"){
          let stock: {value:string; class: string};
          if(value > 10){
            stock = {value:"In Stock",class:"ListTable__ListItem-in-stock"}
          }else if(value > 0){
            stock = {value:"Low Stock",class:"ListTable__ListItem-low-stock"}
          }else{
            stock = {value:"Out of Stock",class:"ListTable__ListItem-out-of-stock"}
          }
          return <div className="ListTable__Stock"><p className={stock.class}>{stock.value}</p><p>({value})</p> </div>
        }
        return value;
      }