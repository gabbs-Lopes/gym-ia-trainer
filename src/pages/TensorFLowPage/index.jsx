import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as posedetection from "@tensorflow-models/pose-detection";
import Webcam from 'react-webcam';
import { drawKeypoints, drawSkeleton } from './utilities';

export default function TensorFlow() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // load pose-detection

  const runPosedetection = async() =>{
    const net = await posedetection.load({
      inputResolution:{width:640, height:480},
      scale:0.5
    });
    // comentar o setInterval para parar a função
    setInterval(()=>{
      detect(net)
    }, 100);
    
  };

  const detect = async (net) =>{
    if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4 ){
      //get video proprieties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //make detections
      const pose = await net.estimateSinglePose(video)/
      console.log(pose);

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
     }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) =>{
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.5, ctx);
    drawSkeleton(pose["keypoints"], 0.5, ctx);
  }
// comentar runPosedetection quando quiser parar a função
  runPosedetection();

  return (
    <div>TensorFlow
      <header className='Tf-header'>
        <Webcam
          style={{
            backgroundColor: 'blue',
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left:0,
            right:0,
            textAlign: 'center',
            zIndex:9,
            width:640,
            height: 480
          }}
          >
        </Webcam>
        <canvas 
        ref={webcamRef}
        style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left:0,
            right:0,
            textAlign: 'center',
            zIndex:9,
            width:640,
            height: 480
        }}></canvas>
      </header>
    </div>
    
  )
}
