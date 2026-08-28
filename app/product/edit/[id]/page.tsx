
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit - Inventory Management",
  description: "Edit existing product on the website.",
};

import { notFound } from "next/navigation";

import "./edit-product-page.css";
import { getProductById } from "@/app/lib/products";
import EditProductForm from "@/app/components/product-form/edit-product-form";


//
export default async function EditProductPage( {params}: { params: Promise<{ id: string }> } )
{
    // get product with id from api here

    const { id: idStr } = await params;
    const idNr: number = Number(idStr);

    if(Number.isNaN(idNr)) notFound();

    const product = await getProductById(idNr);

    if (!product) notFound();


    return (
    <main className="EditProduct">
        <section className="centered-section">
            <div className="EditProduct__Container">

            <header className="edit-page-header" >
                {/* <img src={product.thumbnail} alt="" /> */}

                <h2 id="form-header" className="edit-page-title" > Edit product: {product.title} </h2>

                <a href='/'>Go back to products list</a>
            </header>

            <section className="edit-form-section">

                <EditProductForm product={product} />

            </section>
            </div>

        </section>
    </main>
    );
}