function ProductCard(props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-64">

      <img
        src={props.image}
        alt={props.name}
        className="h-32 mx-auto mb-3"
      />

      <h2 className="text-lg font-bold">
        {props.name}
      </h2>

      <p className="text-md mb-2">
        Price: ${props.price}
      </p>

      {props.inStock ? (
        <p className="text-green-600">In Stock</p>
      ) : (
        <p className="text-red-600">Out of Stock</p>
      )}

    </div>
  );
}

export default ProductCard;