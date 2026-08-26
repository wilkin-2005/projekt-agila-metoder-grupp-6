
import "./edit-product-page.css";
import EditProductForm from "@/app/components/product-form/edit-product-form";


//
export default async function EditProductPage( {params}: { params: Promise<{ id: string }> } )
{
    const { id } = await params;

    // get product with id from api here

  return (
    <main className="EditProduct">
        <section className="centered-section">

            <div className='EditProduct__Header'>
                <h1 className="EditProduct__Title"> Edit product </h1>
                <a href='/'>Go back to products list</a>
            </div>

            <section>

                <EditProductForm />

            </section>

        </section>
    </main>
  );
}