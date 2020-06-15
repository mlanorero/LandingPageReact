import React, { Component } from 'react';

class Jumbo extends Component {
    render() {
        return(
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
        )
    }
}

export default Jumbo;   
