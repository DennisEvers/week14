import {useState} from 'react';
// this is the same basic thing as star but all the working have been taken out of it so all id does
//now is display how many people rated the movie as well as the average rating in gold stars but
// you are not able to manipulate it just see it.
const Starblank = (props) => {
   const [rating, setRating] = useState();
   const averageRating = Math.floor(props.rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / props.rating.length)
   
   const [numberOfRatings, setNumberOfRatings] = useState(props.rating.length)
   
   return (
    <div className="star-rating bg-light">
        {[...Array(5)].map((star, index) => {
            index += 1;
            return (
                <button 
                    type="button"
                    key={index}
                   
            
                      >
                        {((index <= averageRating) || (index <= rating)) ? <span className='star1'>&#9733;</span> : <span className="star">&#9734;</span>}
                      </button>
                      
                      

            );
        })}
        <span>{numberOfRatings}</span>
      
       

    </div>
   );
};

export default Starblank;