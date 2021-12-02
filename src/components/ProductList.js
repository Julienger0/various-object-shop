import React from "react";
import initialData from "../datas/initialData";
import Product from "./Product";

class ProductList extends React.Component{

    render(){
        return(
            <ul className='productlist'>
                {initialData.map((product)=><Product product={product} key={product.id}/>)}
            </ul>
        )
    }

}

export default ProductList