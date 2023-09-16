import React from "react";


//this page contains all the review forms. this is the component that controls the form that allows you to add
// your own review and name on the review to the app. It makes sure that the form is submited to the apporpraite card that
// so the the correct movie is updated. when it renders it returns the form created for poeple to add there reviews and is cleared when
// it is used.



export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            review: '',
            rating: '',
        };
    }

    handleReviewChange = (event) => {
        if (event.target.name === "review") {
            this.setState({ review: event.target.value });
   
        } else if (event.target.name === "name")
        this.setState({ name: event.target.value });
    }

        handleSubmit = (event) => {
            event.preventDefault();
            this.props.onSubmit({review: this.state.review, name: this.state.name});
            this.setState({ review: ''});
            this.setState({ name: ''});
            
        }

        render() {
            const {review} = this.state;
            const {name} = this.state;
            
            return (
                <div className="cardStencil Std, fantasy">
                <form onSubmit={this.handleSubmit}>
                    <div className=" card-bodyStencil Std, fantasy row form-control ms-1 bg-secondary">
                        <textarea 
                            type="text"
                            placeholder="Write your Review Here"
                            value={review}
                            onChange={this.handleReviewChange}
                            className="col"
                            name="review"
                            />

                    </div>
                    <div className="row card-body form-control p-2 ms-1 bg-secondary">
                        <input 
                            type="text"
                            id="username"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={this.handleReviewChange}
                            className="col "
                            />
                           

                            <button type="submit" className="review btn btn-info p-2 mt-4 ms-1 fw-bold fs-4">Add Your Review</button>

                    </div>
                   

                </form>
                </div>


            );

        }



}