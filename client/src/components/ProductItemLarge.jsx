function ProductItemLarge({ product }) {
  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
    </div>
  );
}

export default ProductItemLarge;
