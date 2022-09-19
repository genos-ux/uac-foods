import Header from './Header'
import Footer from './Footer'
import sahand from '../images/sahand.jpg'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const Cart = () => {

    const [amount,setAmount] = useState(110);
    const [quan,setQuan] = useState(1)
    return ( 
        <div>
            <Header name="Cart"/>
            <div className='grid'>
                <div class="grid-container">
                    <div class="grid-item"></div>
                    <div class="grid-item"><h5>PRODUCT</h5></div>
                    <div class="grid-item"><h5>PRICE</h5></div>  
                    <div class="grid-item"><h5>QUANTITY</h5></div>
                    <div class="grid-item"><h5>SUBTOTAL</h5></div>
                    <div class="grid-item">
                        <div>
                            <img src={sahand} alt="" className='sand'/>
                        </div>
                    </div>
                    <div class="grid-item"><h5>Heavy Duty</h5></div>
                    <div class="grid-item"><h5>{amount}</h5></div>
                    <div class="grid-item"><h5>1</h5></div>
                    <div class="grid-item"><h5>{amount}</h5></div>
                    

                </div>

                <div className='sub'>
                    <h4>CART TOTALS</h4>
                    <div className='do'>
                        <h5>Subtotal</h5>
                        <h5>{amount}</h5>
                    </div>
                    <div className='doe'>
                        <h5>Total</h5>
                        <h2>{amount}</h2>
                    </div>
                    <button className='pro'>
                        <Link to="/checkout" className='link'>
                        Proceed to checkout
                        
                        </Link>
                    </button>
                </div>
                

            </div>

            <div className='coup'>
                <div className='coupon'>
                     <input type="text" placeholder='Coupon code'/>
                    <button>Apply Coupon</button>
                </div>
                <button className='up' onClick={()=>{
                    setQuan(quan => quan +1);
                    
                    setAmount(amount=>quan * amount);

                    
                    
                
                }}>Update cart</button>
            </div>

            <Footer/>

            

        
        </div>
    );
}
 
export default Cart;