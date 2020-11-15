import React, { Component } from 'react';
import Webcam from "react-webcam";
import firebase from 'firebase';
import base64 from 'react-native-base64';

export default class WebcamCapture extends Component {

  constructor(props) {
    super(props);

    this.state = { imageSource: null };
  };

  async handleUploadSuccess (filename) {
    let { bucket, fullPath } = await firebase.storage().ref('images').child(filename).getMetadata();
    let downloadURL = await firebase.storage().ref('images').child(filename).getDownloadURL();
    console.log('downloadURL', downloadURL)

    let newPhoto = {
      src: downloadURL,
      bucket,
      fullPath
    }
    console.log('newPhoto', newPhoto);

    await firebase.firestore().collection('photos').add(newPhoto);
  }

  render() {
      const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
      }

      const WebcamCapture = () => {
          const webcamRef = React.useRef(null);

          const capture = React.useCallback(
            () => {
              const imageSrc = webcamRef.current.getScreenshot();
              console.log(imageSrc);

              var substrImageSrc = imageSrc.substr(23);
              console.log(substrImageSrc);

              this.setState({ imageSource: imageSrc});

              var storageRef = firebase.storage().ref('images');
              var imageRef = storageRef.child('test.jpg');
              imageRef.putString(substrImageSrc, 'base64', { contentType: 'image/jpg' });

              this.handleUploadSuccess('test.jpg');
            },
            [webcamRef]
          );

          return (
            <>
              <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
              />
              <button onClick={capture}>Capture photo</button>
              {this.state.imageSource && (<img src={this.state.imageSource}/>)}
            </>
          );
      }

      return (
          <div>
              <WebcamCapture></WebcamCapture>
          </div>
      );
  }
}
