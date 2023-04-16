

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import ListingCards from "../components/ListingCards"
import styles from "../styles/Cards.module.css"


const Cart = () => {
    // let [itemCount, setItemCount] = useState(0);
    let [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);

    const handleRemove = (item) => {
        let tempArr = cartItems.filter((rm, index) => {
            return index !== item;
        });
        tempArr.splice(item,1)
        cartItems.splice(item,1)
        setCartItems(tempArr)
        setTimeout(() => {
            localStorage.setItem("cartItems", JSON.stringify(tempArr))
        }, 1000)
    }
    
    return(
        <div>
            <Header count = {cartItems.length} />
            <div className={styles.cartContainer}>
            {
                cartItems && cartItems.map((product, index) => {
                    return (
                        <ListingCards product = {product} index={index} handleonclick = {(removeItem) => {handleRemove(removeItem)}}/>
                    )
                    
                })
            }
            
            
            </div>
            <router>
            <div >
            <Link to="/Checkout"><button className={styles.Checkouts} >Checkout</button></Link>
            </div>
            </router>
           
           
           

           
       <div className={styles.footer2}>
       
       <div className={styles.footer1}>
       
               
                <p class={styles.footerheading}>Online</p>
                <a class={styles.footerlist} href="/">clothing men</a>
                <a class={styles.footerlist} href="/">Accessories</a>
                </div>
            <div className={styles.footer1}>
            <p class={styles.footerheading}>Customer service</p>
            <a class={styles.footerlist} href="/">Track order</a>
            <a class={styles.footerlist} href="/">Cancel order</a>
            <a class={styles.footerlist} href="/">Return order</a>
            <a class={styles.footerlist} href="/">Contact us</a>
               
            </div>
            <div className={styles.footer1}>
            <p class={styles.footerheading}>Partners</p>
            <p class={styles.footerlist}>Zara</p>
            <p class={styles.footerlist}>H&M</p>
            <p class={styles.footerlist}>venfield</p>
            <p class={styles.footerlist}>Levis</p>
            <p class={styles.footerlist}>+MAny More</p>
               
            </div>
            <div className={styles.footer1}>
            <p class={styles.footerheading}>Address</p>
            <p class={styles.footerlist}>Chittoor,Andhra pradesh</p>
            
            </div>
            </div>
    
        
       
        </div>
        

        

    );
}

export default Cart;
