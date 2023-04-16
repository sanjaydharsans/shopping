import React from "react";
import styles from "../styles/Cards.module.css"


const Cards = (props) => {
    const {product,handleonclick} = props;
    return(
        <div className={styles.cardContainer}>
        <div className={styles.imageContainer}><img src ={product.image} alt = "productimage"/></div>
        <div>
        <h3 style={{ textAlign:"center",color:"red"}}>{product.productName}</h3>
        <p style={{ textAlign:"center"}}>{product.description}</p>
        <p style={{ textAlign:"center"}}>Price: Rs{product.price}</p>
        <button className={styles.addToCardBtn} value={JSON.stringify(product)} onClick={(event) => handleonclick(event.target.value)}>Add to cart</button>
        </div>

        </div>
 
    );
}
export default Cards;