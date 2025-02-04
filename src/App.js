import { useEffect, useState } from "react";
import "./styles.css";
import Product from "./Product.jsx";
import pageSize from "./constants.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  const pageSize = 6;
  const totalPages = products.length;
  const noOfPages = Math.ceil(totalPages / pageSize);

  const startVal = currPage * pageSize;
  const endVal = startVal + pageSize;

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchAllProducts();
  }, []);

  function handleCurrPage(n) {
    setCurrPage(n);
  }
  function gotoPrevPage() {
    setCurrPage((prev) => prev - 1);
  }

  function gotoNextPage() {
    setCurrPage((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>Pagination Revision</h1>

      <div className="pagination-container">
        <button disabled={currPage === 0} onClick={gotoPrevPage}>
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            onClick={() => handleCurrPage(n)}
            className={n === currPage ? "active" : ""}
          >
            {n + 1}
          </button>
        ))}
        <button disabled={currPage === noOfPages - 1} onClick={gotoNextPage}>
          ▶️
        </button>
      </div>
      <div className="products-page">
        {products.slice(startVal, endVal).map((elem, i) => (
          <Product
            image={elem.thumbnail}
            title={elem.title}
            price={elem.price}
            rating={elem.rating}
            brand={elem.brand}
            category={elem.category}
          />
        ))}
      </div>
    </div>
  );
}
