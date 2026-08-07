import type { ProductsResponse } from '../types'

type SearchParams = {
  _limit?: string
  _sort?: string
  _order?: string
  _expand?: string
  _page?:string
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
