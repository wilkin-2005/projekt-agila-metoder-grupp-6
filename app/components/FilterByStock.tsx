"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type StatusProps = { value: string; name: string };

const StockStatus = [
    {value: `all`, name: `All Stock`},
    {value: `in`, name: `In Stock`},
    {value: `low`, name: `Low Stock`},
    {value: `none`, name: `Out of Stock`}
];

export default function FilterByStock() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleFilterByStock = (stock: string) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(`page`, `1`);
        newParams.set(`stock`, stock);

        console.log(newParams.toString());
        router.replace(`${pathname}?${newParams.toString()}`, {scroll: false});
    };

    return (
        <select id="stock" name="stock" onChange={
            (event) => handleFilterByStock(event.target.value)} defaultValue={searchParams.get(`stock`)?.toString()}>
            {StockStatus.map((status: StatusProps, index) => (
            <option key={index} value={status.value}>{status.name}</option>
            ))}
        </select>
    )
}