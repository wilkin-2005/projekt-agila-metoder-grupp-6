import FilterSection from "./components/FilterSection";
import ListTable from "./components/ListTable";
import { getProducts } from "./lib/products";
import type { ProductsResponse } from "./types";

export default async function Home() {
  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await getProducts({ _limit: '6' })

  return (
    <main>
      <section>
        Product count section
      </section>

      <section>
        Filter section
      </section>

      <section>
        <ListTable data={products} columns={["title", "brand", "category", "stock", "price"]} />
      </section>

    </main>
  );
}
