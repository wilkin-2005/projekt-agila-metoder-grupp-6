"use client";

import './page.css'

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
                {
                    /* add product form here */
                }
            </section>
        </section>
    </main>
  );
}
