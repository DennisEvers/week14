import React from "react";
import Stars from "./star.js";
import ReviewList from './review-list';
import ReviewForm from './review-form';
import Starblank from "./starsblank.js";

// these are all the imports from the components that were used
//movie is another component made that houses card that layouts all the information in cards as well
// as handles the star rating system the form submit system the star rating system that does not submit
// and the reveiw forms and the reivews that you are able to view. basically this is the layout of the 
// cards that allows you to orinize and stylize it nice for the app.

export default class Movie extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            reviews: props.reviews,
            rating: props.rating,

        };
    }

    handleStarClick = (selectedStars) => {
        this.props.onStarClick(selectedStars);
    }

    handleReviewSubmit = (review) => {
        const newReview = { reveiws: this.state.reviews, rating: this.state.rating}
        console.log(newReview)
            this.setState(prevState => ({
                reviews: [...prevState.reviews, review]
            }));
    }

    render() {
        const defaultReview = this.state.reviews.length > 0 ? this.state.reviews : { name: '', review: '' };
        console.log(this.props.rating)
        return(
            <div className="card mb-4">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <img src={this.props.image} className="card-img" alt={this.props.title} />
                        </div>
                    </div>
                         <div className="col-xl-8">
                            <div className="card-body">
                              <h5 className="card-title fw-bold fs-3">{this.props.title}</h5> 
                              <h6 className="fw-bold fs-5">Synopsis:</h6> 
                              <p className="card-text"> {this.props.synopsis}</p>
                              <h4 className="rating-stars fw-bold">Yout Rating: <Stars rating={this.props.rating}/></h4>
                              <h4 className="rating-stars fw-bolder">Average Rating and Number of Ratings: <Starblank rating={this.props.rating}/></h4>
                              
                              <ReviewList reviews={defaultReview}/>
                              <ReviewForm onSubmit={this.handleReviewSubmit} />

                        </div>
                    </div>
                 </div>
              </div>
                
            
        );
    }


}