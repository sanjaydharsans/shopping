import React from "react";
import Header from "../components/Header";
import styles from "../styles/Cards.module.css";
import Animation from "./green-tick.gif"




const Checkout = (props) => {


   // const redirectTo = () => {
   //    return
   // }

   // eslint-disable-next-line no-empty-pattern
  
   
  
     return (
      <div>
      <Header/>
      <fragment>
      <img src = {Animation} style = {{display: 'block', margin:'auto',paddingTop:'10%',paddingBottom:'8%'}}/>
      <h1 style={{fontFamily:'Lucida console',textAlign:'center', borderbottom:'5%'}}>ORDER PLACED SUCCESSFULLY</h1>
      </fragment>

      
      
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

 


 

export default Checkout;