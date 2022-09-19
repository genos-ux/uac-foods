import Header from './Header'
import Footer from './Footer';
import add from '../images/location-pointer.png';
import call from '../images/call.png'
import email from '../images/gmail.png'
import business from '../images/customer-support.png'

const Contact = () => {
    return ( 
        <div>
            <Header name= "Contact"/>

            <div className='location'>
                <div className='help'>
                    <h1>We are here to help</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque Lorem ipsum dolor sit amet consectetur adipisicing </p>
                </div>
                {/* <img src="https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png" alt="" className='map'/> */}
                
                {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6664.374942708819!2d-1.6219142063874163!3d6.688839589493921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97f9e61a5867%3A0xe6af02a9c805f427!2sWhizzy%20Academy!5e0!3m2!1sen!2sgh!4v1663196882932!5m2!1sen!2sgh"
                 width="100" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.11339318492!2d-0.1670703338832891!3d5.636402538684569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b501278f4a5%3A0xca081548a0c20ffd!2sEast%20Legon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1663236993286!5m2!1sen!2sgh" style={{border: "0"}} className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='locate'>
                <div className='loc'>
                    <h4>Send us a message</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias!</p>

                    <form action="" className='form'>
                        <input type="text" placeholder='Your name'/><br />
                        <input type="text" placeholder='Your email'/><br />
                        <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea><br />
                        <button className='msg'>send message</button>

                    </form>
                </div>
                <div className='address'>
                    <div className='time'>
                        <img src={add} alt="" />
                        <div>
                            <h5>Address</h5>
                            <p>11 Pentecost Church Adjiringanor,America House</p>
                        </div>
                    </div>
                    <div className='time'>
                        <img src={call} alt="" />
                        <div>
                            <h5>(+233)550114976</h5>
                            <h5>(+233)200301232</h5>
                        </div>
                    </div>

                    <div className='time'>
                        <img src={email} alt="" />
                        <div>
                            <h5>Email</h5>
                            <p>uac-foods@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className='time'>
                        <img src={business} alt="" />
                        <div>
                            <h5>Business Hours</h5>
                            <p>Mon-Sat: 10:00am-5:00pm </p>
                        </div>
                    </div>
                </div>
            </div>

            

            
            <Footer/>

        </div>
        
       
     );
}
 
export default Contact;