import Cart from '../images/cart.png'
import logo from '../images/uac-logo.png'
import Heart from '../images/heart.png'
import Sign from '../images/sign.png'
import Search from '../images/search.png'
import {Link } from 'react-router-dom'


const Style = (props) => {
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

                <div className='pag'>
                        <nav className='cat'>
                        <ul>
                            
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
                            
                            
                            
                            <li>
                                <Link to="/cart">CART +</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>


                <div className='clg'>
                <p>Home Page <span id='acc'> / {props.name}</span></p>
                </div>

        </div>
     );
}
 
export default Style;