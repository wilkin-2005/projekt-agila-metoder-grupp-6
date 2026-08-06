import type { ProductsResponse } from '../types'

type SearchParams = {
  _limit?: string
  _sort?: string
  _order?: string
  _expand?: string
  _page?:string
}

export async function getProducts(options?: SearchParams): Promise<ProductsResponse> {
  const BASE_URL = 'http://localhost'
  const PORT = 4000

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
