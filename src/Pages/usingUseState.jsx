import { useState } from 'react';

export default function () {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
  });
  const [data, setData] = useState(null);

  const handleformChanges = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const addNewProduct = (e) => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          onChange={handleformChanges}
          value={product.title}
          placeholder="enter the title here"
        />
        <input
          type="text"
          name="description"
          onChange={handleformChanges}
          value={product.description}
          placeholder="enter the desc here"
        />
        <input
          type="text"
          name="price"
          onChange={handleformChanges}
          value={product.price}
          placeholder="enter the price here"
        />
        <input
          type="text"
          name="category"
          onChange={handleformChanges}
          value={product.category}
          placeholder="enter the category here"
        />
      </div>
      <div>
        <button onClick={addNewProduct}>Add product</button>
      </div>

      <div>{data && JSON.stringify(data, null, 2)}</div>
    </>
  );
}
