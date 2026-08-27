import FilterSection from "./components/FilterSection";
import ListTable from "./components/ListTable";
import Pagination from "./components/Pagination";
import StockOverview from "@/app/components//stock-overview/stock-overview";
import { getProductStats, getProducts } from "./lib/products";
import type { ProductsResponse } from "./types";

export default async function Home({ searchParams }: {
    searchParams?: Promise<{
    page?: string;
    search?: string;
    categoryId?: string;
    stock?: string;
  }>
}) {

  const _searchParams = await searchParams;
  const _page = _searchParams?.page || "1";
  const search = _searchParams?.search;
  const categoryId = _searchParams?.categoryId;
  const stock = _searchParams?.stock;

  const stockOptions = {
    "in-stock": { stock_gte: "11" },
    "low-stock": { stock_gte: "1", stock_lte: "10" },
    "out-stock": { stock: "0" },
  }[stock ?? ""];

  const options = {
    _limit: '6', 
    _page,
    ...(search ? { q: search } : {}),
    ...(categoryId ? { categoryId } : {}),
    ...stockOptions,
  };

  const [productsResponse, stats] = await Promise.all([
    getProducts(options),
    getProductStats(),
  ])
  const { products, total, page, pages, limit }: ProductsResponse = productsResponse

  return (
    <main>
      <section>
        <StockOverview stats={stats} />
      </section>

      <section className="centered-section">
        <FilterSection />
      </section>

      <section className="centered-section">
        <ListTable page={page} data={products} columns={["title", "brand", "category", "stock", "price"]} />
        <Pagination page={parseInt(_page, 10)} pages={pages} />
      </section>

    </main>
  );
}