import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";



import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
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
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
};

export default function TrainYourOwnModel() {
  const [learningRate, setLearningRate] = useState(0.1);
  const [epochs, setEpochs] = useState(20);
  const [trainingData, setTrainingData] = useState([]);
  const [isTraining, setIsTraining] = useState(false);

  const trainModel = async () => {
    setIsTraining(true);
    setTrainingData([]);

    const model = tf.sequential();
    model.add(
      tf.layers.dense({ units: 10, activation: "relu", inputShape: [4] })
    );
    model.add(tf.layers.dense({ units: 3, activation: "softmax" }));
    model.compile({
      optimizer: tf.train.adam(learningRate),
      loss: "categoricalCrossentropy",
      metrics: ["accuracy"],
    });

    const xs = tf.tensor2d(irisData.inputs);
    const ys = tf.tensor2d(irisData.labels);

    await model.fit(xs, ys, {
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
        },
      },
    });
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* Left Side: Controls */}
      <div style={{ flex: 1 }}>
        <h2>🧠 Train Your Own Model</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label>Learning Rate: </label>
          <input
            type="number"
            step="0.01"
            value={learningRate}
            onChange={(e) => setLearningRate(Number(e.target.value))}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Epochs: </label>
          <input
            type="number"
            value={epochs}
            onChange={(e) => setEpochs(Number(e.target.value))}
          />
        </div>

        <button
          onClick={trainModel}
          disabled={isTraining}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {isTraining ? "Training..." : "Train Model"}
        </button>
      </div>

      {/* Right Side: Chart */}
      <div style={{ flex: 2 }}>
        <h3>📈 Training Progress</h3>
        <LineChart width={600} height={300} data={trainingData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="loss"
            stroke="#8884d8"
            strokeWidth={2}
            name="Loss"
          />
          <Line
            type="monotone"
            dataKey="acc"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Accuracy"
          />
        </LineChart>
      </div>

    </div>
  );
}


