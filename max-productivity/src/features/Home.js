import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

    constructor(props) {

    super(props);

    const allPhotos = [
    {
        id: 'sourkey',
        url: 'https://firebasestorage.googleapis.com/v0/b/max-productivity-e7804.appspot.com/o/sourkey.png?alt=media&token=f2bd4041-5447-4632-861c-f6d81bb85fbf'
    }
    ]
    this.state = {
        allPhotos
    };
    }

    render() {
        const allImages = this.state.allPhotos.map(photo => {
            return (
            <div key={photo.id}>
                <div style={{minHeight: '215px'}}>
                <i className="bottom-icon material-icons main-close">This is the home page</i>
                <Image style={{ width: '100%' }} src={photo.url} responsive />
                </div>
            </div>
            );
        })

        return (
            <div>{allImages}</div>
        );
    }
}