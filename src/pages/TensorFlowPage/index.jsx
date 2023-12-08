import React, { useEffect, useRef } from 'react';
/* import './App.css'; */

function TensorFlowPage() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const labelContainerRef = useRef(null);
  const modelRef = useRef(null);
  const maxPredictionsRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const URL = "https://teachablemachine.withgoogle.com/models/75SMGpej2/";
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      modelRef.current = await window.tmPose.load(modelURL, metadataURL);
      maxPredictionsRef.current = modelRef.current.getTotalClasses();

      const size = 200;
      const flip = true;
      webcamRef.current = new window.tmPose.Webcam(size, size, flip);
      await webcamRef.current.setup();
      await webcamRef.current.play();

      window.requestAnimationFrame(loop);

      const canvas = canvasRef.current;
      canvas.width = size;
      canvas.height = size;
      /* const ctx = canvas.getContext("2d"); */
      labelContainerRef.current = document.getElementById("label-container");

      for (let i = 0; i < maxPredictionsRef.current; i++) {
        labelContainerRef.current.appendChild(document.createElement("div"));
      }
    };

    init();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loop = async (timestamp) => {
    webcamRef.current.update();
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    const { pose, posenetOutput } = await modelRef.current.estimatePose(webcamRef.current.canvas);
    const prediction = await modelRef.current.predict(posenetOutput);

    for (let i = 0; i < maxPredictionsRef.current; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
    }

    drawPose(pose);
  };

  const drawPose = (pose) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (webcamRef.current.canvas) {
      ctx.drawImage(webcamRef.current.canvas, 0, 0);

      if (pose) {
        const minPartConfidence = 0.5;
        window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  return (
    <div className="App">
      <div>Teachable Machine Pose Model</div>
      <button type="button" onClick={() => webcamRef.current && webcamRef.current.play()}>Start</button>
      <div><canvas ref={canvasRef} id="canvas"></canvas></div>
      <div id="label-container" ref={labelContainerRef}></div>
    </div>
  );
}

export default TensorFlowPage;