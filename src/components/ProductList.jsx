import products from "../porducts .js";
import ProductCard from "./Productcard";
import "../App.css"

const ProductList = () => {
    // console.log(products);

    return (
        <div>
            <h1>E-Laptop shop Lagos</h1>
            <div className="grid">
                {products.map((item) =>(
                    <ProductCard
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        imgurl={item.imgUrl}
                        />
                ))}
            </div>
        </div>
    );
};

export default ProductList;