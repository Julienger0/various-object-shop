import React from "react";
//import Header from "./Header";
import ProductList from "./ProductList";
// import ShoppingCart from "./ShoppingCart";
//import Footer from "./Footer";
import initialData from "../datas/initialData";



class App extends React.Component{
    render(){
        return(
            <div id='root'>
                {/* <Header/> */}
                <div className='content'>
                    <ProductList/>
                    {/* <ShoppingCart/> */}

                </div>
                {/* <Footer/> */}
            </div>
            
        )
    }
}

export default App