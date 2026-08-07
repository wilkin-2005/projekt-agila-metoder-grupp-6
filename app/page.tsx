import FilterSection from "./components/FilterSection";
import ListTable from "./components/ListTable";
import Pagination from "./components/Pagination";
import StockOverview from "@/app/components//stock-overview/stock-overview";
import { getProducts } from "./lib/products";
import type { ProductsResponse } from "./types";

export default async function Home({searchParams}: {searchParams?: Promise<{
    page?: string;
  }>}) {

  const _searchParams = await searchParams;
  const _page = _searchParams?.page || "1";

  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const { products, total, page, pages, limit }: ProductsResponse = await getProducts({ _limit: '6',_page: _page })

  return (
    <main>
      <section>
        <StockOverview />
      </section>

      <section className="centered-section">
        Filter section
      </section>

      <section className="centered-section">
        <ListTable data={products} columns={["title","brand","category","stock", "price"]}/>
        <Pagination page={parseInt(_page,10)} pages={pages}/>
      </section>

    </main>
  );
}
