import productFilterMeta, { MAX_PRODUCT_PRICE, SIZE_MAP } from "../api/productFilterMeta"

export const defaultFilters = {
  category: null,
  maxPrice: MAX_PRODUCT_PRICE,
  color: null,
  size: null,
  style: null,
}

export function filterProducts(products, filters = defaultFilters) {
  return products.filter((product) => {
    const meta = productFilterMeta[product.id]
    if (!meta) return true

    if (filters.category && meta.category !== filters.category) return false

    if (
      filters.maxPrice > 0 &&
      filters.maxPrice < MAX_PRODUCT_PRICE &&
      product.price > Number(filters.maxPrice)
    ) {
      return false
    }

    if (filters.color && meta.color !== filters.color) return false

    if (filters.style && meta.style !== filters.style) return false

    if (filters.size) {
      const sizeLabel = SIZE_MAP[filters.size]
      if (sizeLabel && !meta.sizes.includes(sizeLabel)) return false
    }

    return true
  })
}
