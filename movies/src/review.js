import React from "react";

//this is the component that calls the reviws that have been left to be displayed. it shows them by name then review then title and ads dashes to make 
// it easier to read this is called in reviewlist which is then called in movie.

export default class Review extends React.Component  {
    render()  {
        const { name, review, rating } = this.props;

        return (
            <div className="card">
                <p className="fw-bold fs-5">--{name}</p>
                <p>-{review}</p>
                <p>-{rating}</p>
            </div>
        );
    }
}