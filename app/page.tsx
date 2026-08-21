import FilterSection from "./components/FilterSection";
import ListTable from "./components/ListTable";
import Pagination from "./components/Pagination";
import StockOverview from "@/app/components//stock-overview/stock-overview";
import { getProducts } from "./lib/products";
import type { ProductsResponse } from "./types";

export default async function Home({ searchParams }: {
    searchParams?: Promise<{
    page?: string;
    categoryId?: string;
    stock?: string;
    search?: string;
    }>}) 
  {

  const _searchParams = await searchParams;
  const _page = _searchParams?.page || "1";
  const categoryId = _searchParams?.categoryId;
  const stock = _searchParams?.stock;
  const search = _searchParams?.search;

  const options = {
    _limit: "6",
    _page,
    ...(search ? { q: search } : {}),
    ...(categoryId ? { categoryId } : {}),
    ...(stock === "in-stock"
      ? { stock_gte: "11" }
      : stock === "low-stock"
        ? { stock_gte: "1", stock_lte: "10" }
        : stock === "out-stock"
          ? { stock: "0" } : {})
  }

  const { products, total, page, pages, limit }: ProductsResponse = await getProducts(options)

  // get all products to calculate stock count
  const { products: allProducts }: ProductsResponse = await getProducts({ _limit: "" });

  return (
    <main>
      <section>
        <StockOverview products={allProducts} />
      </section>

      <section className="centered-section">
        <FilterSection />
      </section>

      <section className="centered-section">
        <ListTable data={products} columns={["title", "brand", "category", "stock", "price"]} />
        <Pagination page={parseInt(_page, 10)} pages={pages} />
      </section>

    </main>
  );
}