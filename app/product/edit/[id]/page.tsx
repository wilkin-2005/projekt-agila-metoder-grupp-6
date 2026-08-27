import './page.css'

export default async function Page({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;

    // get product with id from api here

  return (
    <main>
        <section className="centered-section">
            <div className='EditProduct'>
            <div className='EditProduct__Header'>
        <h1 className="EditProduct__Title">
            Edit product
        </h1>
        <a href='/'>Go back to products list</a>
        </div>
        <section>
            {
                /* add product form here */
            }
        </section>
        </div>
        </section>
    </main>
  );
}