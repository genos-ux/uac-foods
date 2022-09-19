import Style from './Header';
import Footer from './Footer';



const Account = () => {

    
    return (
        <div>

            <Style name="My account"/>
            
            

            <div className='info'>

                <div className='sign-in'>
                    <div className='go'>
                        <h2>Login</h2>
                        <form action="">
                           
                        
                            <div className='username'>
                                <label htmlFor="name">Username or email address <span className='star'>*</span></label><br />
                                <input type="text" />
                            </div>
                            <div className='username'>
                                <label htmlFor="name">Password  <span className='star'>*</span></label><br />
                                <input type="text" />
                                
                            </div>

                            <button className='logi'>Login</button>

                            
                        </form>
                    </div>

                    <div className='rem'>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <p>Lost your password?</p>
                    </div>

                </div>
                <div className='register'>
                   <h2>Register</h2>

                   <form action="">
                            <div className='user'>
                                <label htmlFor="name">Username or email address <span className='star'>*</span></label><br />
                                <input type="text" />
                            </div>
                            <div className='user'>
                                <label htmlFor="name">Password  <span className='star'>*</span></label><br />
                                <input type="text" />
                            </div>

                            <div className='rad'>
                                <input type="radio"  />
                                <label htmlFor="cust">I am customer</label>
                            </div>

                            <div className='radio'>
                                <input type="radio"/>
                                <label htmlFor="cust">I am vendor</label>
                            </div>

                    </form>

                    <p className='para'>Your personal data will be used to support your experience throughout this website , to manage 
                                access to your account, and for other purposes described in our privacy policy
                    </p>


                    <button className='login'>Register</button>

                </div>



            </div>

            <Footer/>

            
        </div>

        
    ) ;
}
 
export default Account;