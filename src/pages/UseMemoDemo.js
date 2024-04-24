import { useMemo, useRef, useState } from "react";

const UseMemoDemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
    setName("");
    setPrice("");
  };

  // TODO: use useMemo() to prevent re-calculation of total
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      console.log("Calculating total...");
      return acc + product.price;
    }, 0);
  }, [products]);

  //   const total = products.reduce((acc, product) => {
  //     console.log("Calculating total...");
  //     return acc + product.price;
  //   }, 0);

  return (
    <div>
      <label>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Price:{" "}
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Add</button>
      <h3>Total: {total}</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoDemo;
