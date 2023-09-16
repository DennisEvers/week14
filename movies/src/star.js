import {useState} from 'react';
// this is the component for the star rating system
// this creats the star prop and uses the rating from movie list to create an average
// to be greyed out so you know what the average rating is. It the allows you to see gold stars when you hover
// over the stars and it stays gold on the ammount you click setting the rating.
// it takes the average using the ratings and the length of the the rating array.
// it then exports this component so it can be used in another section
const Star = (props) => {
   const [rating, setRating] = useState();
   const averageRating = Math.floor(props.rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / props.rating.length)
   const [hover, onHover] = useState();
   const [numberOfRatings, setNumberOfRatings] = useState(props.rating.length)
   
   return (
    <div className="star-rating bg-light">
        {[...Array(5)].map((star, index) => {
            index += 1;
            return (
                <button 
                    type="button"
                    key={index}
                    className={index <= (rating || hover) ? "on" : "off"}
                    onClick={() => {
                        setRating(index)
                        if (rating === 0)
                         setNumberOfRatings(numberOfRatings + 1)
                    
                    }}
                      onMouseEnter={() => {
                        onHover(index)
                      }}
                      onMouseLeave={() =>  onHover(0)}
 
                      >
                        {((index <= averageRating) || (index <= rating)) ? <span className='star'>&#9733;</span> : <span className="star">&#9734;</span>}
                      </button>
                      
                      

            );
        })}
        
        <br></br>
        
       

    </div>
   );
};

export default Star;