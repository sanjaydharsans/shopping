import React, { useState } from "react";
import Header from "../components/Header"
import Cards from "../components/Cards"
import styles from "../styles/Cards.module.css"




const Products = () => {
    // let [itemCount, setItemCount] = useState(0);
    //localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) ()
    let [addedItems, setAddedItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);
    
   
    const data = [
       
        {
            id: 0,
            image: "https://static.magicpin.com/storage/blog/images/myntra-online-shopping-for-mens_Casual_GreenShirt.jpg",
            productName: "LIGHT BLUE SHIRT",
            description:"Limited Edition Shirt",
            price: "2600"
            
        },
        {
            id: 1,
            image: "https://www.bananivista.com/wp-content/uploads/2018/12/Knit-sweater.jpg",
            productName: "BLACK SWEATSHIRT",
            description:"100% Pure Cotton",
            price: "6000"
        },
        {
            id: 2,
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/9/13/5dc36234-1a87-41cc-befd-e5e701d12cbc1568318662766-1.jpg",
            productName: "KURTA",
            description:"Perfect for Festival Season",
            price: "8000"
        },

        {
            id: 3,
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7546902/2019/2/11/be44366c-a232-47ec-a7b4-c4bea24f04e71549886561293-HERENOW-Men-Teal-Solid-Polo-Collar-T-shirt-7371549886559966-1.jpg",
            productName: " GREEN COLOR T-SHIRT",
            description:"Limited Edition",
            price: "2000"
        },  
        
        {
            id: 4,
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13287918/2021/1/6/0cb5dcbc-2877-4f0b-9f0e-a32e8bb31a0f1609909256912-Popnetic-Women-Jackets-4931609909255502-1.jpg",
            productName: " WOMEN BLACK JACKET",
            description:"Limited edition",
            price: "1600"
        },
        {
            id: 5,
            image: "https://assets.ajio.com/medias/sys_master/root/20210511/sM2E/6099b44df997ddb312993e27/-473Wx593H-462405640-white-MODEL.jpg",
            productName: " WOMEN'S WHITE SHIRT",
            description:"Rockstar Edition",
            price: "2500"
        },  
        {
            id: 6,
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11866156/2020/6/11/cf1e8efd-daa2-4b80-8416-dc11c6bfcef21591850279628-SASSAFRAS-Women-Dresses-7021591850277287-1.jpg",
            productName: " ELEGANT LONG DRESS",
            description:"A dress with a nod to classic style. ",
            price: "3500"
        },  
        {
            id: 7,
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14483862/2021/11/30/dd646a9c-7ef0-4f8d-a766-973cb7875c281638282711106-DEEBACO-Turquoise-Blue-Tropical-Printed-Smocked-Fit--Flare-D-1.jpg",
            productName: " FANCY WOMEN DRESS",
            description:"Trending",
            price: "4000"
        },    
       

    ]



    const manageStorage = (prod) => {
        setAddedItems([...addedItems, JSON.parse(prod)]);
        localStorage.setItem("cartItems", JSON.stringify([...addedItems, JSON.parse(prod)]));
        return 0;
    }

    return(
        <div>
        <Header count = {addedItems.length}/>
        <div className={styles.productContainer}>
        {
            data && data.map((product) => {
                return (
                    <Cards product = {product} handleonclick = {(prod) => { manageStorage(prod) }}
                    />
                )
                
            })

        }

        </div>

        


        
        <footer>
       <div className={styles.footer}>
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
        
        </footer>

        </div>

        

    );
}

export default Products;
