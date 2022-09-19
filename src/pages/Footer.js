import paypal from '../images/paypal.png';
import master from '../images/mastercard.png';
import visa from '../images/visa.png';
import maestro from '../images/maestro.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import gmail from '../images/gmail.png'
import uac from '../images/uac-logo.png'


const Footer = () => {
    return (

        <div className='foot'>
            <div className="footer">
                <nav className='nav-bar'>
                    <ul>
                        <img src={uac} alt="" className='lo' />
                        
                        <li>UAC Foods by Freebirds, the in house contemporary fine-dining restaurant at America House, Adjiringanor , specializes in
                            traditional Ghanaian cuisine with a delicious continental twist. </li>
                        <li><h3>(+233)550114976</h3></li>
                        <li>11 Pentecost Church Road,Adjiringanor</li>
                        <li>uac-foods@gmail.com</li>

                    </ul>

                </nav>
                <div className='products'>
                    <nav className='nav'>
                        <ul>
                            <h3 style={{"color":"orange"}}>FOODS</h3>
                            <li>Local Dishes</li>
                            <li>Continental Dishes</li>
                            <li>Desserts</li>
                            <li>Pizza</li>
                            <li>Desserts</li>
                        </ul>
                    </nav>
                </div>
                <div>
                <nav className='nav'>
                        <ul className>
                            <h3 style={{"color":"orange"}}>SERVICES</h3>
                            <li>Informal Silver</li>
                            <li>Formal Silver</li>
                            <li>Russian</li>
                            <li>American Service</li>
                            
                        </ul>
                    </nav>
                </div>
                <div className='pay'>
                    <p>ACCEPT PAYMENTS</p>
                    <div>
                        
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                        <img src={maestro} alt="" />
                        <img src={paypal} alt="" />
                        
                    </div>
                    <p>FOLLOW US</p>

                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={gmail} alt="" />
                        
                    </div>


                </div>
            </div>

            


            <div className='copy'>
                <p>Copyright &copy; 2020 <span className='ua'>uac</span>. All right reserved</p>
            </div>


        </div>

        



    );
}
 
export default Footer;