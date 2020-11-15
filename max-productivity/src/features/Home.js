import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import WebcamCapture from './WebcamCapture.js';

export default class Home extends Component {

    render() {

        return (
            <div><WebcamCapture></WebcamCapture></div>
        );
    }
}