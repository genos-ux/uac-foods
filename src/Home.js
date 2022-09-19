import Cart from './images/cart.png'
import Pizza from './images/pizza-delivery.png'
import Heart from './images/heart.png'
import Img from './images/spence.jpg'
import Sign from './images/sign.png'
import Search from './images/search.png'
import {Link} from 'react-router-dom'
import logo from './images/uac-logo.png'
import Gallery from './Gallery'
import Footer from './pages/Footer'
import Red from "./images/redred.jpg"
import Star from  './images/starrating.jpg'
import Shake from "./images/shake6.jpg"
import Burger from "./images/burgers.jpg"
import Timer from './pages/Timer'
import Mini from './pages/Header_mini'

const Main = () => {

    
    return ( 
        <div>
            <Mini/>
            

            <div className="content" style={{backgroundImage:`url(${Img})`,backgroundSize:"cover"}} >
                <h4>FOOD AND DESSERTS</h4>
                <h5>Healthy Eating</h5>
                <h4>On selected mouth watering foods</h4>
                <button className='explore'>Explore Now</button>
            </div>

            <h3 className='f'>Featured Categories</h3>



            <Gallery/>

            <div className="trends">
            <h3 className='end'><span className='i'>I</span> Trending foods</h3>
                <div className="whole">
                   <div className='wh'>
                        <img src={require("./images/Banku.jpg")} alt="food" width="250" height="200"/>
                        <div className='now'>
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Banku with tilapia</h4>
                            <p>$969.80</p>
                        </div>
                    </div>
                   
                    <div className='wh'>
                        <img src={require('./images/french toast.jpg')} alt="shake" width="250" height="200"/>
                        <div className="now">
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>French Toast</h4>
                            <p>$969.80</p>
                        </div>
                    </div>
                    <div className='wh'>
                        <img src={Burger} alt="shake" width="250" height="200"/>
                        <div className="now">
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Chicken Burger</h4>
                            <p>$969.80</p>
                        </div>
                    </div>

                    <div className='wh'>
                        <img src={require('./images/oat meal.jpg')} alt="shake" width="250" height="200"/>

                        <div className="now">
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Oat Meal</h4>
                            <p>$969.80</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='supe'>
                <h2>THE SEASON SALE UP TO 40%</h2>
                <h1>Super Handmade</h1>
                <button className='sh'>Shop Now</button>
            </div>

            <div>

                <h3 className='end'><span className='i'>I</span> Today deals</h3>
                <div className='deal'>
                    <div className='slow'>
                        <div className='slo'>
                            <h3>Gorgeous milk shake</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deserunt nobis ratione expedita </p>
                            <p>$123</p>

                            <h3>Hurry up deals ends in:</h3>
                            <p><Timer/></p>
                        
                        </div>
                        <img src={require('./images/oat meal.jpg')} alt="" width="280px" height="100px"/>
                    </div>

                    <div className='slow'>
                        <div className='slo'>
                            <h3>Gorgeous milk shake</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deserunt nobis ratione expedita </p>
                            <p>$123</p>

                            <h3>Hurry up deals ends in:</h3>
                            <p><Timer/></p>
                        
                        </div>
                        <img src={require('./images/spenser.jpg')} alt="" width="280px" height="100px"/>
                        
                    </div>
                    <div className='slow'>
                        <div className='slo'>
                            <h3>Gorgeous milk shake</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deserunt nobis ratione expedita </p>
                            <p>$123</p>

                            <h3>Hurry up deals ends in:</h3>
                            <p><Timer/></p>
                        
                        </div>
                        <img src={require('./images/spenser.jpg')} alt="" width="280px" height="100px"/>
                        
                    </div>
                </div>

            </div>


            <div className='explo'>
                <div className='feat'>
                    <div className='xplo'>
                    <h1>Featured <br /> Products</h1>
                    <button>Explore more</button>
                    </div>
                    

                </div>

                <div className='cp'>
                <div className='cap'>
                    <div className='paper'>
                        <img src={require('./images/adams.jpg')} alt="" />
                        <div>
                            <h5>Practical paper plate</h5>
                            <h4>$240</h4>
                        </div>
                    </div>
                    <div className='cap'>
                        <div className='paper'>
                            <img src={require('./images/adams.jpg')} alt="" />
                            <div>
                                <h5>Practical paper plate</h5>
                                <h4>$240</h4>
                            </div>
                        </div>
                    </div>
                    <div className='cap'>
                        <div className='paper'>
                            <img src={require('./images/baackgur2.jpg')} alt="" />
                            <div>
                                <h5>Beef Burger</h5>
                                <h4>$240</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
               
                <div className='cap'>
                    <div className='paper'>
                        <img src={require('./images/pex.jpg')} alt="" />
                        <div>
                            <h5>Pizza</h5>
                            <h4>$47</h4>
                        </div>
                    </div>
                    <div className='cap'>
                        <div className='paper'>
                            <img src={require('./images/pexs.jpg')} alt="" />
                            <div>
                                <h5>Milk shake with burger</h5>
                                <h4>$24</h4>
                            </div>
                        </div>
                    </div>
                    <div className='cap'>
                        <div className='paper'>
                            <img src={require('./images/baackgur2.jpg')} alt="" />
                            <div>
                                <h5>Practical paper plate</h5>
                                <h4>$240</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <div className='trends'>

                <h3 className='end'><span className='i'>I</span> Best Selling  foods</h3>
                
                <div className="whole">
                    <div className="wh">
                    <img src={require("./images/Banku.jpg")} alt="food" width="250" height="200"/>
                        <div className='now'>
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Banku with tilapia</h4>
                            <p>$20.80</p>
                        </div>
                    </div>

                    <div className="wh">
                    <img src={require("./images/fried rice.jpg")} alt="food" width="250" height="200"/>
                        <div className='now'>
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Fried Rice</h4>
                            <p>$30.80</p>
                        </div>
                    </div>

                    <div className="wh">
                    <img src={require("./images/mal.jpg")} alt="food" width="250" height="200"/>
                        <div className='now'>
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Sandwich</h4>
                            <p>$40.80</p>
                        </div>
                    </div>

                    <div className="wh">
                    <img src={require("./images/pexels.jpg")} alt="food" width="250" height="200"/>
                        <div className='now'>
                            <img src={Star} alt="star" id="star"/>
                            <p>Foods</p>
                            <h4>Chicken Pizza</h4>
                            <p>$45.80</p>
                        </div>
                    </div>
                </div>
                
                    


            </div>

            


            

            <Footer/>

        
        </div> 
          
           
        
    );
}
 
export default Main;