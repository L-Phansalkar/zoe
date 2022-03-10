import React from "react";
// import { connect } from "react-redux";
// // import { getAllPosters } from "../store/posters";
// import { Link } from "react-router-dom";

export class LandingPage extends ReactComponent{
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.Poster.id,
            quantity: this.props.Poster.poster.quantity,
            price: this.props.Poster.poster.price,
        },
        this.handleChange = this.handleChange.bind(this);
}