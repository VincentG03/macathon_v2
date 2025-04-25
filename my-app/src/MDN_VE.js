import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import "./MDN_VE.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Label,
} from "recharts";

const irisData = {
  inputs: [
    [5.1, 3.5, 1.4, 0.2],
    [7.0, 3.2, 4.7, 1.4],
    [6.3, 3.3, 6.0, 2.5],
    [5.0, 3.4, 1.5, 0.2],
    [6.7, 3.1, 4.4, 1.4],
    [7.6, 3.0, 6.6, 2.1],
    [5.4, 3.9, 1.7, 0.4],
    [6.9, 3.1, 4.9, 1.5],
    [6.5, 3.0, 5.8, 2.2],
  ],
  labels: [
    [1, 0, 0], // Setosa
    [0, 1, 0], // Versicolor
    [0, 0, 1], // Virginica
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
};

const classNames = ["Setosa", "Versicolor", "Virginica"];

export default function TrainYourOwnModel() {
const navigate = useNavigate();

  const [learningRate, setLearningRate] = useState(0.1);
  const [epochs, setEpochs] = useState(20);
  const [trainingData, setTrainingData] = useState([]);
  const [isTraining, setIsTraining] = useState(false);
  const [model, setModel] = useState(null);
  const [inputValues, setInputValues] = useState([5.1, 3.5, 1.4, 0.2]);
  const [prediction, setPrediction] = useState(null);

  const trainModel = async () => {
    setIsTraining(true);
    setTrainingData([]);
    setPrediction(null);

    const newModel = tf.sequential();
    newModel.add(tf.layers.dense({ units: 10, activation: "relu", inputShape: [4] }));
    newModel.add(tf.layers.dense({ units: 3, activation: "softmax" }));
    newModel.compile({
      optimizer: tf.train.adam(learningRate),
      loss: "categoricalCrossentropy",
      metrics: ["accuracy"],
    });

    const xs = tf.tensor2d(irisData.inputs);
    const ys = tf.tensor2d(irisData.labels);

    await newModel.fit(xs, ys, {
      epochs,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          setTrainingData((prev) => [
            ...prev,
            { epoch, loss: logs.loss, acc: logs.acc },
          ]);
        },
        onTrainEnd: () => {
          setIsTraining(false);
          setModel(newModel);
        },
      },
    });
  };

  const handlePredict = () => {
    if (!model) return;

    const inputTensor = tf.tensor2d([inputValues]);
    const predictionTensor = model.predict(inputTensor);
    const predictionArray = predictionTensor.arraySync()[0];
    const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));

    setPrediction({
      label: classNames[maxIndex],
      confidence: predictionArray[maxIndex].toFixed(2),
    });
  };

  return (
    <div className="container shadow-border">
        {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>🌈✨MDN Virtual Experience✨🌈</h1>

      {/* Iris Dataset Information */}
      <div className="section">
        <h2>🌸 The Iris Dataset</h2>
        <p>
          The Iris dataset is a famous dataset in machine learning, often used for classification tasks. 
          It contains measurements of iris flowers from three different species: <strong>Setosa</strong>, 
          <strong>Versicolor</strong>, and <strong>Virginica</strong>. The dataset is small and simple, 
          making it an ideal starting point for learning about classification problems and machine learning algorithms.
        </p>
        <h3 style={{ marginTop: "70px" }}>The Iris Dataset Features</h3>
        <p>It has four features (also called attributes or inputs) for each flower:</p>
        <ul style={{ listStylePosition: "inside", paddingLeft: "0", margin: "0", textAlign: "center" }}>
    <li>Sepal Length (in cm)</li>
    <li>Sepal Width (in cm)</li>
    <li>Petal Length (in cm)</li>
    <li>Petal Width (in cm)</li>
  </ul>
        <p>
          These four features are used to classify the flowers into one of the three species. Each sample (data point) 
          in the dataset represents a flower, with its measurements and the corresponding label (the species).
        </p>
        <h3 style={{ marginTop: "70px" }}>Example Data Points</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sepal Length</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sepal Width</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Petal Length</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Petal Width</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Species</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>5.1</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>3.5</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>1.4</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>0.2</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Setosa</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>7.0</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>3.2</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>4.7</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>1.4</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Versicolor</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>6.3</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>3.3</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>6.0</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>2.5</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Virginica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: "70px" }}>🧠 Learn AI by Training a Model</h2>
      <p>This app uses a simple dataset (Iris) to show how machines learn from data.</p>

      {/* Training Settings Section */}
      <div className="section">
        <h3>1️⃣ Training Settings</h3>
        <label>Learning Rate: </label>
        <input
          type="number"
          step="0.01"
          value={learningRate}
          onChange={(e) => setLearningRate(Number(e.target.value))}
          className="input"
        />
        <br />
        <label>Epochs (Training Loops): </label>
        <input
          type="number"
          value={epochs}
          onChange={(e) => setEpochs(Number(e.target.value))}
          className="input"
        />
        <br />
        <button
          onClick={trainModel}
          disabled={isTraining}
          className="button button-primary"
        >
          {isTraining ? "Training..." : "Train Model"}
        </button>
      </div>

      {/* Training Progress Section */}
<div className="section">
  <h3 style={{ marginTop: "70px" }}>2️⃣ Training Progress</h3>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <LineChart width={600} height={300} data={trainingData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="epoch">
        <Label value="Epoch" offset={-5} position="insideBottom" />
      </XAxis>
      <YAxis>
        <Label value="Value" angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
      </YAxis>
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign="middle" />
      <Line type="monotone" dataKey="loss" stroke="#8884d8" strokeWidth={2} name="Loss" />
      <Line type="monotone" dataKey="acc" stroke="#82ca9d" strokeWidth={2} name="Accuracy" />
    </LineChart>
  </div>
</div>

      {/* Try It Yourself Section */}
      <div style={{ marginTop: "70px" }} className="section">
        <h3>3️⃣ Try It Yourself</h3>
        <p>Enter measurements and predict the type of iris flower:</p>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexDirection: "row" }}>
          {["Sepal Length", "Sepal Width", "Petal Length", "Petal Width"].map((label, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <label style={{ marginBottom: "5px", fontWeight: "bold" }}>{label}</label>
              <input
                type="number"
                step="0.1"
                value={inputValues[i]}
                onChange={(e) => {
                  const newValues = [...inputValues];
                  newValues[i] = Number(e.target.value);
                  setInputValues(newValues);
                }}
                placeholder={label}
                className="input"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePredict}
          disabled={!model}
          className="button button-success"
        >
          Predict
        </button>
        {prediction && (
          <div style={{ marginTop: "1rem" }}>
            <strong>Prediction:</strong> {prediction.label} (Confidence: {prediction.confidence})
          </div>
        )}
      </div>
    </div>
  );
}