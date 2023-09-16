import React from "react";
import Review from "./review.js";

//this is the reveiw list component
// this maps through all the reviews from the movielists and displays them in the card
// when you call the component on the movie tab. it takes all the reviews and the name 
// of the reviewer as well as the rating and then it is called back in the movie tab so they are all displayed.
export default class ReviewList extends React.Component {
    render() {
        const {reviews} = this.props;

        return (
            <div className="card review-list">
                <h4 className="fs-3 fw-bold"> Reviews:</h4>
                <div className=" card-body">
                {reviews.map((reviewInfo, index) =>
                <Review 
                    key={index} 
                    name={reviewInfo.name}
                    review={reviewInfo.review} 
                    rating={reviewInfo.rating} />
                )}  

                </div>

            </div>
        );
    }
}