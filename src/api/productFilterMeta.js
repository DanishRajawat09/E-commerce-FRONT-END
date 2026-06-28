const defaultSizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
]

const productFilterMeta = {
  1: { category: "Hoodie", color: "red", style: "Casual", sizes: defaultSizes },
  2: { category: "Hoodie", color: "gray", style: "Casual", sizes: defaultSizes },
  3: { category: "Hoodie", color: "gray", style: "Casual", sizes: defaultSizes },
  4: { category: "Hoodie", color: "black", style: "Casual", sizes: defaultSizes },
  5: { category: "Jeans", color: "black", style: "Gym", sizes: defaultSizes },
  6: { category: "Jeans", color: "black", style: "Gym", sizes: defaultSizes },
  7: { category: "Jeans", color: "red", style: "Gym", sizes: defaultSizes },
  8: { category: "Shirts", color: "navy", style: "Formal", sizes: ["Small", "Medium", "Large"] },
  9: { category: "Shirts", color: "blue", style: "Party", sizes: ["Small", "Medium", "Large"] },
  10: { category: "Shirts", color: "red", style: "Party", sizes: ["Small", "Medium", "Large"] },
  11: { category: "Shirts", color: "black", style: "Casual", sizes: ["Small", "Medium", "Large"] },
  12: { category: "Shorts", color: "green", style: "Formal", sizes: defaultSizes },
  13: { category: "Shorts", color: "black", style: "Gym", sizes: defaultSizes },
  14: { category: "T-Shirts", color: "white", style: "Casual", sizes: defaultSizes },
  15: { category: "T-Shirts", color: "white", style: "Casual", sizes: defaultSizes },
  16: { category: "T-Shirts", color: "black", style: "Casual", sizes: defaultSizes },
}

export const FILTER_COLORS = [
  { id: "black", label: "Black", hex: "#000000" },
  { id: "white", label: "White", hex: "#FFFFFF" },
  { id: "red", label: "Red", hex: "#FF3333" },
  { id: "blue", label: "Blue", hex: "#007BFF" },
  { id: "navy", label: "Navy", hex: "#1B2A4E" },
  { id: "gray", label: "Gray", hex: "#9CA3AF" },
  { id: "green", label: "Green", hex: "#556B2F" },
]

export const FILTER_CATEGORIES = ["T-Shirts", "Shorts", "Shirts", "Jeans", "Hoodie"]

export const FILTER_STYLES = ["Casual", "Formal", "Party", "Gym"]

export const SIZE_MAP = {
  xxSmall: "XX-Small",
  xSmall: "X-Small",
  small: "Small",
  mdm: "Medium",
  large: "Large",
  xl: "X-Large",
  xxl: "XX-Large",
  xxxl: "3X-Large",
  xxxxl: "4X-Large",
}

export const MAX_PRODUCT_PRICE = 150

export default productFilterMeta
