import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/productsApi";
import Product from "../features/products/Product";
function Home() {
  const products = useLoaderData();
  return (
    <div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="bootstrap-tabs product-tabs">
                <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                  <h3>Trending Products</h3>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {products.map((product) => (
                      <Product product={product} key={product.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Home;
