import Header from './Header'
import Footer from './Footer'

const Order = () => {
    return (
        <div>
            <Header name="Checkout / Order"/>

            <div className='receive'>
                <h3>Thank you. Your order has been received.</h3>
            </div>

            <div class="grid-containe">
                <div class="grid-ite">
                    
                    <p>Order Number:</p>
                    <h5>6772</h5>
                    
                </div>
                <div class="grid-ite">
                    <p>Date:</p>
                    <h5>August 24,2020</h5>
                </div>
                <div class="grid-ite">
                    <p>Total</p>
                    <h5>$110</h5>
                
                </div>  
                <div class="grid-ite" id='it'>
                    <p>Payment method</p>
                    <h5>Cash on delivery</h5>
                </div>
            
            </div>

            <div className='ou'>
                    <h4>ORDER DETAILS</h4>
                    <div className='d'>
                        <h5>Product</h5>
                        <h5>Subtotal</h5>
                    </div>
                    <div className='d'>
                        <div>
                            <h5>Heavy duty leather wallet x1</h5>
                            
                        </div>
                        <h5>$110</h5>
                    </div>
                    <div className='d'>
                        <h5>Subtotal</h5>
                        <h5>$110</h5>
                    </div>
                    <div className='d'>
                        <h5>Payment method</h5>
                        <h5 className='s'>Cash on delivery</h5>
                    </div>
                    <div className='d'>
                        <h5>Total</h5>
                        <h5 className='s' id='ot'>$110</h5>
                    </div>
                    </div>

            <Footer/>
        </div>
    );
}
 
export default Order;