"use client";

import './page.css'

export default function Page() {
  return (
    <main className="EditProduct">
        <section className="centered-section">
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
        </section>
    </main>
  );
}