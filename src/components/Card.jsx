import React, { Component } from 'react';

class Card extends Component {
    render(){
        return(
        <div className="container  d-flex justify-content-around">
            <div className="">
                <img className="card-img-top" src="http://placehold.it/500x325" alt="Card image cap"/>
                <div class="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <hr />
                    <a href="#" className="btn btn-primary">Find Out More!</a>                    
                </div>
            </div>
        </div>
        )
    }
}

class CardList extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-around">
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        )
    }
}

export default CardList;