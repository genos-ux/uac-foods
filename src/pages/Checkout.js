import Header from './Header'
import Order from './Order'
import {Link} from 'react-router-dom'
const Checkout = () => {
    return (
        <div>
            <Header name="Checkout"/>

            <div className='check'>
                <input type="text" className='code' placeholder='Have a coupon? Click here to enter your code'/>

                <div className='tag'>
                    <div className='bill'>
                        <h4>Billing Details</h4>

                        <div className='lab'>
                            <div>
                                <label htmlFor="">First name <span className='star'>*</span></label><br />
                                <input type="text"  className='typ'/>
                            </div>
                            <div className='last'>
                                <label htmlFor="">Last name <span className='star'>*</span></label><br />
                                <input type="text" className='typ'/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="">Company name<span className='star'>*</span></label><br />
                            <input type="text"  className="type"/>
                        </div>
                        <div>
                            <label htmlFor="">Stress Address<span className='star'>*</span></label><br />
                            <input type="text"  className="type"/><br />
                            <input type="text" className="type" /><br />

                        </div>

                        <div>
                            <label htmlFor="">Town / City<span className='star'>*</span></label><br />
                            <input type="text"  className="type"/>
                        </div>

                        <div>
                            <label htmlFor="">County(optional)<span className='star'>*</span></label><br />
                            <input type="text"  className="type"/>
                        </div>

                        <div>
                            <label htmlFor="">Postcode<span className='star'>*</span></label><br />
                            <input type="text" className="type" />
                        </div>

                        <div>
                            <label htmlFor="">Phone<span className='star'>*</span></label><br />
                            <input type="text" className="type" />
                        </div>

                        <div>
                            <label htmlFor="">Email address<span className='star'>*</span></label><br />
                            <input type="text"  className="type"/>
                        </div>

                        <div className='inf'>
                            <h4>Additional information</h4>
                            <h5>Order notes(optional)</h5>
                            <textarea name="" id="" cols="30" rows="5" placeholder='Notes about your order.eg. special notes for delivery'></textarea>
                        </div>

                    </div>
                    <div>

                    <div className='out'>
                    <h4>YOUR ORDER</h4>
                    <div className='do'>
                        <h5>Product</h5>
                        <h5>Subtotal</h5>
                    </div>
                    <div className='do'>
                        <div className='heavy'>
                            <h5>Heavy duty leather wallet</h5>
                            <h5>x1</h5>
                            <h5>Vendor:Shopic</h5>
                        </div>
                        <h5>$110</h5>
                    </div>
                    <div className='do'>
                        <h5>Subtotal</h5>
                        <h5>$110</h5>
                    </div>
                    <div className='do'>
                        <h5>Total</h5>
                        <h5 className='su'>$110</h5>
                    </div>
                    <h5>Cash on delivery</h5>
                    <h5>Pay with cash on delivery</h5>

                    <div>
                        <p className='par'>Your personal data will be used to process your order, support your experience 
                            throughout this website, and for other purposes described in our privacy policy.
                        </p>

                        <Link to="/order">

                            <button className='ord'>Place order</button>
                        
                        </Link>
                    </div>
                </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;