import Footer from './Footer';
import Style from './Header'

const Page = () => {
    return (
        <div>
            <Style name="Error 404"/>
            <img className='im' src="https://colorlib.com/cdn-cgi/image/width=1200,height=686,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="" />
            <Footer/>
        </div>
    );
}
 
export default Page;