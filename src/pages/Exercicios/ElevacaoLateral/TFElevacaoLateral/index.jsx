import React, { useEffect, useRef } from 'react';
import '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';
import '@tensorflow/tfjs';

import styles from './TFAgachamento.module.scss'
import { Link } from 'react-router-dom';

function TFElevacaoLateral() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const labelContainerRef = useRef(null);

  useEffect(() => {
    const URL = 'https://teachablemachine.withgoogle.com/models/lotRsQxZ1/';
    let model, webcam, ctx, labelContainer, maxPredictions;

    async function init() {
      const modelURL = URL + 'model.json';
      const metadataURL = URL + 'metadata.json';

      model = await tmPose.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const size = 200;
      const flip = true;
      webcam = new tmPose.Webcam(size, size, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      const canvas = canvasRef.current;
      canvas.width = size;
      canvas.height = size;
      ctx = canvas.getContext('2d');
      labelContainer = labelContainerRef.current;
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
      }
    }

    async function loop() {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    }

    async function predict() {
      const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
      const prediction = await model.predict(posenetOutput);

      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }

      drawPose(pose);
    }

    function drawPose(pose) {
      if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        if (pose) {
          const minPartConfidence = 0.5;
          tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
          tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
      }
    }

    init();

    // Cleanup function
    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div><canvas className={styles.container__canva} ref={canvasRef}></canvas></div>
      <div className={styles.container_right}>
        <div className={styles.container__titulo}>Detecção de Pose Elevação Lateral</div>
        <div className={styles.container_div}>        
          <div ref={labelContainerRef}></div>
        </div>
        <button className={styles.container__btn} type="button" onClick={() => {}}>Começar</button>
      </div>

      <Link className={styles.container_voltar} to="/exercicios"><h2>&#8592; VOLTAR</h2></Link>
    </div>
  );
}

export default TFElevacaoLateral;