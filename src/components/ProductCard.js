import "./ProductCard.css";

export function ProductCard({ product, background = "slategray", onPurchase }) {
  return (
    <article className="Container" style={{ background }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul className="Specification">
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
        Buy (From ${product.price})
      </button>
      )}      
    </article>
  );
}

function Status({ stockCount }) {
  
  const notAvailableTemplate = (
    <b><p className="NotAvailableStatus">Not available</p></b>
  )

  const availableTemplate = (
    <b><p className="AvailableStatus">{stockCount} left in stock</p></b>
  )

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}