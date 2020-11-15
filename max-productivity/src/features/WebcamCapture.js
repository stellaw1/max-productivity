import React, { Component } from 'react';
import Webcam from "react-webcam";

export default class WebcamCapture extends Component {

    constructor(props) {
        super(props);

        this.state = { imageSource: null };
    };


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
                this.setState({ imageSource: imageSrc});
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
