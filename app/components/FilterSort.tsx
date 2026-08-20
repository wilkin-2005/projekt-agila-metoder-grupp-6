"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterSort() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    const searchStock = searchParams.get(`stock`) || ``;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        const newSort = event.target.value;
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set(`stock`, newSort);
        newParams.delete(`page`);

        console.log(newParams.toString());
        router.push(`${pathName}?${newParams.toString()}`, {scroll: false});
    };

    return (
        <select id="stock" name="stock" onChange={handleChange} defaultValue={searchStock}>
            <option value="stock-all">All Stock</option>
            <option value="in-stock">In stock</option>
            <option value="low-stock">Low stock</option>
            <option value="out-stock">Out of stock</option>
        </select>
    )
}