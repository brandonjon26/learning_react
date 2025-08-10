export function ProductCard({ product, background = "slategray", onPurchase }) {

  return (
    <article 
      style={{ 
        background, 
        width: "100%", 
        border: "1px solid white", 
        borderRadius: "8px", 
        padding: "16px", 
        textAlign: "center" 
      }}
    >
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
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
    <b><p style={{ fontSize: "14px", color: "darkred" }}>Not available</p></b>
  )

  const availableTemplate = (
    <b><p style={{ fontSize: "14px", color: "lightgreen" }}>{stockCount} left in stock</p></b>
  )

  return stockCount == 0 ? notAvailableTemplate : availableTemplate;
}