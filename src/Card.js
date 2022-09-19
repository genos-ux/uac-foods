import './index.css'
function Card(props){
    return(
           <div className="container">
                <div className="prop1">
                 <img src={props.images1} alt={props.alt1}/>
                 <a href="/shop">{props.categories}</a>
                </div>
           </div>
    )
}
export default Card;