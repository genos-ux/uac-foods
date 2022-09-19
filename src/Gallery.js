
import Card from './Card';
// import Children from './Children';


 function Gallery(){
     return(
    
      <div className="gallery">
        <div className="gallery1">
          <Card
            images1= {require('../src/images/shake1.jpg')}
            alt1="milk shake"
            width={350}
            height={250}
            categories="Milk shakes"
            
          />
         <Card
            images1= {require('../src/images/doughnuts.jpg')}
            alt1="dessert"
            width={350}
            height={250}
            categories="Desserts"
          />
         <Card
            images1= {require('../src/images/fried rice.jpg')}
            alt1="continental dish"
            width={350}
            height={250}
            categories="Continental dishes"
          />
        
      
          <Card
            images1= {require('../src/images/oat meal.jpg')}
            alt1="breakfast"
            width={350}
            height={250}
            categories="Breakfast"
          />
          <Card
            images1= {require('../src/images/pizzaegg.jpg')}
            alt1="pizza"
            width={350}
            height={250}
            categories="Pizza"
          />
          <Card
            images1= {require('../src/images/Banku.jpg')}
            alt1="local dish"
            width={350}
            height={250}
            categories="Local dishes"
          />
        </div>
     
      </div>
    
     )
}
export default Gallery;