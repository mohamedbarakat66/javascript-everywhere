
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  isSoldOut?: boolean;
}

interface ProductCatalogProps {
  products: Product[];
  hideSoldOut?: boolean;
  sortByPrice?: boolean;
}

export default function ProductCatalog({
  products = [],
  hideSoldOut = false,
  sortByPrice = false,
}: ProductCatalogProps) {
  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  const filteredProducts = hideSoldOut
    ? products.filter((product) => !product.isSoldOut)
    : [...products];

  if (sortByPrice) {
    filteredProducts.sort(
      (a, b) => a.price - b.price || a.id - b.id
    );
  }

  const groupedProducts = filteredProducts.reduce<Record<string, Product[]>>(
    (groups, product) => {
      const category = product.category || "Uncategorized";

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(product);

      return groups;
    },
    {}
  );

  if (filteredProducts.length === 0) {
    return <div>No products match the filter criteria.</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Product Catalog</h2>

      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          <h3>{category}</h3>

          <ul>
            {items.map((product) => (
              <li key={product.id} style={{ margin: "5px 0" }}>
                {product.name} - ${product.price}

                {!hideSoldOut && product.isSoldOut && (
                  <span style={{ color: "red", marginLeft: "10px" }}>
                    (Sold Out)
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
