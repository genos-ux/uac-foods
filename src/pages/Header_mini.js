import { Link } from "react-router-dom";
import Cart from '../images/cart.png'
import Pizza from '../images/pizza-delivery.png'
import Heart from '../images/heart.png'
import Img from '../images/spence.jpg'
import Sign from '../images/sign.png'
import Search from '../images/search.png'
import logo from '../images/uac-logo.png'



const Mini = (props) => {
    return ( 
        <div>
            <div className='first'>
                <h4>Free delivery over $100 all products</h4>

                <div className='sign'>
                    
                    <Link to="/account"><img src={Sign} alt="" className='in'/></Link>
                    <Link to="/account"><h5>SIGN IN</h5></Link>
                    
                </div>
            </div>

            <div className='sec'>
                <div className='logo'>
                    {/* <img src={Pizza} alt="pizza" />
                    <h4>Shopic</h4> */}
                    <img src={logo} alt="" className='log' />
                </div>
                
                <div className='search'>
                    <input type="text" placeholder="Search products..." />
                    <span><img src={Search} alt="hey" /></span>
                </div>

                <div className='list'>
                    <img src={Heart} alt="" className='li'/>
                    <div className='wish'>
                        <p>WishList</p>
                        <h3>2 items</h3>
                    </div>
                </div>

                <div className="list">
                    <img src={Cart} alt="" className='li'/>
                        <div className='wish'>
                            <Link to="/cart">
                                <p>Cart</p>
                                <h3>$0.00</h3>
                            
                            </Link>
                        </div>
                </div>

                
            </div>


            <nav className='category'>
                <ul>
                    <li>
                    <select>
                        <option>Categories</option>
                        <option selected="selected"><a href="#ba">Continental Dishes</a></option>
                        <option>Breakfast</option>
                        <option>Desserts</option>
                        <option>Local Dishes</option>
                    </select>
                    </li>
                    <li>
                        <Link to="/home">HOME +</Link>
                    </li>
                    <li>
                        <Link to="/shop">SHOP +</Link>
                    </li>
                    <li>
                        <Link to="/page">PAGE +</Link>
                    </li>
                    
                    <li>
                        <Link to="/contact">CONTACT +</Link>
                    </li>
                    
                </ul>
            </nav>

        </div>
     );
}
 
export default Mini;