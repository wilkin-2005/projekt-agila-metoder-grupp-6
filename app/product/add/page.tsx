import ProductForm from '@/app/components/product-form/product-form';
import { redirect } from 'next/navigation';
import './page.css'

async function addProduct(formData: FormData) {
    "use server";

    const values = Object.fromEntries(formData.entries());
    const tags = ["tag1", "tag2", "tag3"]
        .map((name) => String(values[name] ?? "").trim())
        .filter(Boolean);
    const images = ["image1", "image2", "image3", "image4", "image5", "image6"]
        .map((name) => String(values[name] ?? "").trim())
        .filter(Boolean);

    const product = {
        ...values,
        categoryId: Number(values.categoryId),
        price: Number(values.price),
        stock: Number(values.stock),
        discountPercentage: values.discountPercentage ? Number(values.discountPercentage) : undefined,
        weight: values.weight ? Number(values.weight) : undefined,
        minimumOrderQuantity: values.minimumOrderQuantity ? Number(values.minimumOrderQuantity) : undefined,
        dimensions: {
            width: values.width ? Number(values.width) : undefined,
            height: values.height ? Number(values.height) : undefined,
            depth: values.depth ? Number(values.depth) : undefined,
        },
        tags,
        images,
    };

    for (const name of ["tag1", "tag2", "tag3", "image1", "image2", "image3", "image4", "image5", "image6", "width", "height", "depth", "rating", "comment", "date", "reviewerName", "reviewerEmail"]) {
        delete product[name as keyof typeof product];
    }

    const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    if (!response.ok) throw new Error("Failed to create product");
    redirect('/');
}

export default function Page() {
    return (
        <main className="AddProduct">
            <section className="centered-section">
                <div className='AddProduct__Header'>
                    <h1 className="AddProduct__Title">
                        Add product
                    </h1>
                    <a href='/'>Go back to products list</a>
                </div>
                <section>
                    <ProductForm action={addProduct} />
                </section>
            </section>
        </main>
    );
}
