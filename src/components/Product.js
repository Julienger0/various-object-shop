import React from "react";


class Product extends React.Component{
    render(){
        return(
            <li className='productsheet' >
            
            {/* <img src={`../assets/${this.props.product.id}.png`}/> */}
            <img src={this.props.product.image}/>
            <br/>
            {this.props.product.name} 
            <br/>
            {this.props.product.price}€
            <br/>
            <button> ajouter </button>
        </li>
        )
    }
}
export default Product