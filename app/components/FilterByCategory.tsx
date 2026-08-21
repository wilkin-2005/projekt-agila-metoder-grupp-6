"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

export default function FilterByCategory() {
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

    return (
        <select id="category" name="category" onChange={
            (event) => handleFilterByCategory(event.target.value)} defaultValue={searchParams.get(`categories`)?.toString()}>
            {Categories.map((category: CategoryProps, index) => (
            <option key={index} value={category.value}>{category.name}</option>
            ))}
        </select>
    )
}