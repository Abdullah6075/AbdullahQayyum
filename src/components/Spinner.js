import React, { Component } from 'react';
import Loader from '../assets/Loader.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="overlay"></div>
                <div className="text-center">
                    <img src={Loader} alt="Loader" />
                </div>
            </div>
        );
    }
}

export default Spinner;