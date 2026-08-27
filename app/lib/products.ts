import type { ProductsResponse, StockStats } from '../types'

type SearchParams = {
  _limit?: string
  _sort?: string
  _order?: string
  _expand?: string
  _page?: string
  categoryId?: string
  stock?: string
  stock_gte?: string
  stock_lte?: string
}

const BASE_URL = 'http://localhost'
const PORT = 4000

export async function getProducts(options?: SearchParams): Promise<ProductsResponse> {

  const params = new URLSearchParams({
    _limit: String(6),
    _sort: 'id',
    _order: 'desc',
    _expand: 'category',
    ...options,
  })

  const response = await fetch(`${BASE_URL}:${PORT}/products/?${params}`)

  if (!response.ok) {
    throw new Error('Failed to load products')
  }

  const products = response.json()
  return products
}

export async function getProductStats(): Promise<StockStats> {
  const response = await fetch(`${BASE_URL}:${PORT}/products/stats`)
  if (!response.ok) throw new Error('Failed to load product stats')
  return response.json()
}

export async function deleteProduct(id:number): Promise<undefined> {
  if(!id){
    return;
  }

  const response = await fetch(`${BASE_URL}:${PORT}/products/${id}`, {method:"DELETE"})

  if (!response.ok) {
    throw new Error('Failed to delete product');
  }

  return response.json()
}
