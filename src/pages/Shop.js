
// import pic2 from "../src/images/doughnuts"
// import pic3 from "../src/images/shake7"
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Header from './Header';
import Mini from './Header_mini'
import Cart from '../images/cart.png'
import Pizza from '../images/pizza-delivery.png'
import Heart from '../images/heart.png'
import Img from '../images/spence.jpg'
import Sign from '../images/sign.png'
import Search from '../images/search.png'
import logo from '../images/uac-logo.png'

const Shop = () => {

  
  
    return ( 
        <div className="shop">
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
                        <option selected="selected"><a href="/#ba">Continental Dishes</a></option>
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
           <div className="background1">
              <h2 className="dessert">Desserts</h2>
              <p className="super">Super tasty!</p>
              <p className="discount">30% discount on all desserts</p>
              <button className='ex'>Explore</button>
            </div> 
            <div className="pics1" id>
                <div>
                  <h3 className="sal">Sale!!</h3>
                  <img src= {require("../images/waffles.jpg")} alt="shake"/>
                  <div className='clo'>
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Waffles ($21)</h2>
                    <p>$70</p>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                    <h3 className="sald">Sale!!</h3>
                    <img src= {require("../images/doughnuts.jpg")} alt="doughnuts"/>
                    <div className="clo">
                      <Link to="/Account" id="order">Order now</Link>
                      <h2 className="name">Doughnuts ($27)</h2>
                      <p>$90</p>
                      <button>Add to cart</button>
                    </div>
                </div>
                <div>
                    <h3 className="sale">Sale!!</h3>
                    <img src= {require("../images/pancakes.jpg")} alt="shake"/>
                    <div className="clo">
                      <Link to="/Account" id="order">Order now</Link>
                      <h2 className="name">Pancakes ($18)</h2>
                      <p>$60</p>
                      <button>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="background2">
              <h2 className="dessert">Continental dishes</h2>
              <p className="super">Super tasty!</p>
              <p className="discount">Chinese continental dishes available</p>
              <button className='ex'>Explore</button>
            </div> 
            <div className="pics1">
                <div>
                  <h3 className="sal">Sale!!</h3>
                  <img src= {require("../images/fried rice.jpg")} alt="rice"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Fried rice ($100)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                  <h3 className="sald">Sale!!</h3>
                  <img src= {require("../images/continental.jpg")} alt="food"/>
                  <div className="clo">
                    <Link to="/Cart" id="order">Order now</Link>
                    <h2 className="name">Special chicken ($250)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                 <h3 className="sale">Sale!!</h3>
                 <img src= {require("../images/pasta.jpg")} alt="pasta"/>
                 <div className="clo">
                  <Link to="/Cart" id="order">Order now</Link>
                  <h2 className="name">Pasta ($150)</h2>
                  <button >Add to cart</button>
                 </div>
                </div>
            </div>

            <div className="background3">
                <h3 className="dessert">Local dishes</h3>
                <p className="super">Asanka delight</p>
                <p className="discount">The redred is on another level!</p>
                <button className='ex'>Explore</button>
            </div> 
            <div className="pics1">
                <div>
                  <h3 className="sal">Sale!!</h3>
                  <img src= {require("../images/fufu.jpg")} alt="rice"/>
                  <div className="clo">
                    <Link to="/Cart" id="order">Order now</Link>
                    <h2 className="name">Special fufu with soup of choice ($200)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                  <h3 className="sald">Sale!!</h3>
                  <img src= {require("../images/Banku.jpg")} alt="food"/>
                  <div className="clo">
                    <Link to="/Cart" id="order">Order now</Link>
                    <h2 className="name">Banku & Tilapia ($250)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                 <h3 className="sale">Sale!!</h3>
                 <img src= {require("../images/redred.jpg")} alt="pasta"/>
                 <div className="clo">
                  <Link to="/Cart" id="order">Order now</Link>
                  <h2 className="name">Redred papapaa ($150)</h2>
                  <button>Add to cart</button>
                 </div>
                </div>
            </div>

            <div className="background4" id='ba'>
                <h3 className="dessert">Breakfast</h3>
                <p className="super">Order any breakfast of your choice</p>
                <p className="discount">Get started for your day!</p>
                <button className='ex'>Explore</button>
            </div> 
            <div className="pics1">
                <div>
                  <h3 className="sal">Sale!!</h3>
                  <img src= {require("../images/french toast.jpg")} alt="rice"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">French toast ($20)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                  <h3 className="sald">Sale!!</h3>
                  <img src= {require("../images/croissant.jpg")} alt="food"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Croissant ($30)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                 <h3 className="sale">Sale!!</h3>
                 <img src= {require("../images/cincinnatti.jpg")} alt="pasta"/>
                 <div className="clo">
                  <Link to="/Account" id="order">Order now</Link>
                  <h2 className="name">Cincinnatti ($50)</h2>
                  <button>Add to cart</button>
                 </div>
                </div>
            </div>

            <div className="background5">
                <h3 className="dessert">Pizza</h3>
                <p className="super">Mushroom pizza now added to menu</p>
                <p className="discount">Get a bottle of coke for <span>FREE!!!</span> </p>
                <button className='ex'>Explore</button>
            </div> 
            <div className="pics1">
                <div>
                  <h3 className="sal">Sale!!</h3>
                  <img src= {require("../images/ChickenPizza.jpg")} alt="rice"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Chicken pizza ($70)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                  <h3 className="sald">Sale!!</h3>
                  <img src= {require("../images/mushroom.jpg")} alt="food"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Mushroom pizza ($60)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                 <h3 className="sale">Sale!!</h3>
                 <img src= {require("../images/pepperoni.jpg")} alt="pasta"/>
                 <div className="clo">
                  <Link to="/Account" id="order">Order now</Link>
                  <h2 className="name">Pepperoni ($80)</h2>
                  <button>Add to cart</button>
                 </div>
                </div>
            </div>

            <div className="background6">
                <h3 className="dessert">Milk shakes</h3>
                <p className="super">Vegetable shakes now added to menu</p>
                <p className="discount">Make your day refreshing!</p>
                <button>Explore</button>
            </div> 
            <div className="pics1">
                <div>
                  <h3 className="sal">Sale!!</h3>
                  <img src= {require("../images/shake1.jpg")} alt="rice"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Mixed fruits ($20)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                  <h3 className="sald">Sale!!</h3>
                  <img src= {require("../images/shake4.jpg")} alt="food"/>
                  <div className="clo">
                    <Link to="/Account" id="order">Order now</Link>
                    <h2 className="name">Vegetables ($20)</h2>
                    <button>Add to cart</button>
                  </div>
                </div>
                <div>
                 <h3 className="sale">Sale!!</h3>
                 <img src= {require("../images/shake6.jpg")} alt="pasta"/>
                 <div className="clo">
                  <Link to="/Account" id="order">Order now</Link>
                  <h2 className="name">Oreo ($15)</h2>
                  <button>Add to cart</button>
                 </div>
                </div>
            </div>
        </div>
     );
}
 
export default Shop;