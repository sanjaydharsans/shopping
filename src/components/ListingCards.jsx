import React from "react";
import styles from "../styles/Cards.module.css"


const ListingCards = (props) => {
    const {product, index, handleonclick} = props;
    return(
        <div className={styles.cartCardContainer}>
            <div className={styles.cartImageContainer}><img src ={product.image} alt = "productimage"/></div>
            <div>
                <h3 style={{ textAlign:"center",color:"red"}}>{product.productName}</h3>
                <p style={{ textAlign:"center"}}>{product.description}</p>
                <p style={{ textAlign:"center"}}>Price: Rs{product.price}</p>
            </div>
            <div>
            <button className={styles.addToCardBtn1} value={index} onClick={(event) => handleonclick(event.target.value)}>Remove</button>
            </div>
        </div>
        
    );
    
    
}
export default ListingCards;