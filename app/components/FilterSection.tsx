"use client"

import "./FilterSection.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Filter by: category
type CategoryProps = { value: string; name: string };

const Categories = [
    {value: `all`, name: `All Categories`},
    {value: `beauty`, name: `Beauty`},
    {value: `fragrances`, name: `Fragrances`},
    {value: `furniture`, name: `Furniture`},
    {value: `groceries`, name: `Groceries`},
    {value: `home-decorations`, name: `Home Decorations`},
    {value: `accessories-kitchen`, name: `Kitchen Accessories`},
    {value: `laptops`, name: `Laptops`},
    {value: `shirts-men`, name: `Men's Shirts`},
    {value: `shoes-men`, name: `Men's Shoes`},
    {value: `watches-men`, name: `Men's Watches`},
    {value: `accessories-mobile`, name: `Mobile Accessories`},
    {value: `motorcycle`, name: `Motorcycle`},
    {value: `skin-care`, name: `Skin Care`},
    {value: `smartphones`, name: `Smartphones`},
    {value: `accessories-sports`, name: `Sports Accessories`},
    {value: `sunglasses`, name: `Sunglasses`},
    {value: `tablets`, name: `Tablets`},
    {value: `tops`, name: `Tops`},
    {value: `vehicle`, name: `Vehicle`},
    {value: `bags-women`, name: `Women's Bags`},
    {value: `dresses-women`, name: `Women's Dresses`},
    {value: `jewellery-women`, name: `Women's Jewellery`},
    {value: `shirts-women`, name: `Women's Shirts`},
    {value: `shoes-women`, name: `Women's Shoes`},
    {value: `watches-women`, name: `Women's Watches`}
];

//Filter by: stock
type StatusProps = { value: string; name: string };

const StockStatus = [
    {value: `all`, name: `All Stock`},
    {value: `in`, name: `In Stock`},
    {value: `low`, name: `Low Stock`},
    {value: `none`, name: `Out of Stock`}
];

// Filter section component
export default function FilterSection() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleFilterByCategory = (category: string) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(`products`, `1`);
        newParams.set(`category`, category);

        console.log(newParams.toString());
        router.replace(`${pathname}?${newParams.toString()}`, {scroll: false});
    };

      const handleFilterByStock = (stock: string) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(`products`, `1`);
        newParams.set(`stock`, stock);

        console.log(newParams.toString());
        router.replace(`${pathname}?${newParams.toString()}`, {scroll: false});
    };

    const filterSearch = event => {
        handleFilterByCategory(event.target.value)
        handleFilterByStock(event.target.value)
    };

    return (
    <section className="filter-section">
        <form className="filter-form" action="" method="get">
            <div className="form-search">
                <input type="text" className="search-field" id="search" name="search" placeholder="Search products">
                </input>
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
            
            <button className="filter-button" onClick={filterSearch}><img width={23} src="funnel.png"></img>Filter</button>
        </form>
    </section>
    )
}