import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import WebcamCapture from './WebcamCapture.js';
import firebase from 'firebase';

export default class Home extends Component {

    render() {
        const config = {
            apiKey: "AIzaSyAUK-soj5vhmQxrltcbq_b3HsD128ZcxTE",
            authDomain: "max-productivity-e7804.firebaseapp.com",
            databaseURL: "https://max-productivity-e7804.firebaseio.com",
            projectId: "max-productivity-e7804",
            storageBucket: "max-productivity-e7804.appspot.com",
            messagingSenderId: "451847561861",
            appId: "1:451847561861:web:db37af667f1b5579373fec",
            measurementId: "G-WTGVWL93LK"
        };
        firebase.initializeApp(config);

        return (
            <div><WebcamCapture></WebcamCapture></div>
        );
    }
}