"use client"
import "./FilterSection.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SubmitEvent } from "react";

// Filter by: category
type CategoryProps = { value: string; name: string };

const Categories = [
    {value: `all`, name: `All Categories`},
    {value: `1`, name: `Beauty`},
    {value: `2`, name: `Fragrances`},
    {value: `3`, name: `Furniture`},
    {value: `4`, name: `Groceries`},
    {value: `5`, name: `Home Decorations`},
    {value: `6`, name: `Kitchen Accessories`},
    {value: `7`, name: `Laptops`},
    {value: `8`, name: `Men's Shirts`},
    {value: `9`, name: `Men's Shoes`},
    {value: `10`, name: `Men's Watches`},
    {value: `11`, name: `Mobile Accessories`},
    {value: `12`, name: `Motorcycle`},
    {value: `13`, name: `Skin Care`},
    {value: `14`, name: `Smartphones`},
    {value: `15`, name: `Sports Accessories`},
    {value: `16`, name: `Sunglasses`},
    {value: `17`, name: `Tablets`},
    {value: `18`, name: `Tops`},
    {value: `19`, name: `Vehicle`},
    {value: `20`, name: `Women's Bags`},
    {value: `21`, name: `Women's Dresses`},
    {value: `22`, name: `Women's Jewellery`},
    {value: `23`, name: `Women's Shirts`},
    {value: `24`, name: `Women's Shoes`},
    {value: `25`, name: `Women's Watches`}
];

//Filter by: stock
type StatusProps = { value: string; name: string };

const StockStatus = [
    {value: `all`, name: `All Stock`},
    {value: `in-stock`, name: `In Stock`},
    {value: `low-stock`, name: `Low Stock`},
    {value: `out-stock`, name: `Out of Stock`}
];

// Filter section component
export default function FilterSection() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const filterSearch = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const inputData = new FormData(event.currentTarget);
        const params = new URLSearchParams(searchParams);

        params.set("page", "1");

        const search = String(inputData.get("search") || "");
        const category = String(inputData.get("category") || "all");
        const stock = String(inputData.get("stock") || "all");

        search ? params.set("search", search) : params.delete("search");
        category !== "all" ? params.set("category", category) : params.delete("category");
        stock !== "all" ? params.set("stock", stock) : params.delete("stock");

        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    };

    return (
    <section className="filter-section">
        <form className="filter-form" onSubmit={filterSearch}>
            <div className="form-search">
                <input type="text" className="search-field" id="search" name="search" placeholder="Search products" 
                defaultValue={searchParams.get("search") ?? ""}/>
            </div>

            <select id="category" name="category" defaultValue={searchParams.get(`category`)?.toString()}>
                {Categories.map((category: CategoryProps, index) => (
                <option key={index} value={category.value}>{category.name}</option>
                ))}
            </select>
            <select id="stock" name="stock" defaultValue={searchParams.get(`stock`)?.toString()}>
                {StockStatus.map((status: StatusProps, index) => (
                <option key={index} value={status.value}>{status.name}</option>
                ))}
            </select>
            
            <button type="submit" className="filter-button"><img width={23} src="funnel.png" alt="" />Filter</button>
        </form>
    </section>
    )
}