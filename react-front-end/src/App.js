import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SubmissionFormData from "./components/SubmissionFormData";

export default function App(props) {
  const [submissionData, setSubmissionData] = useState({
    data: false,
    message: "Step 1: Click the button to load Submission Data!"
  });
  const [formData, setFormData] = useState({
    data: false,
    message: "Step 2: Click the button to load Form Data!"
  });
  const [showOutput, setShowOutput] = useState(false);

  function fetchSubmissionData() {
    axios.get("/api/submission").then(response => {
      // handle success
      console.log(response.data);
      setSubmissionData({
        data: response.data,
        message: "Submission Data has been loaded!"
      });
    });
  }

  function fetchFormData() {
    axios.get("/api/form").then(response => {
      // handle success
      console.log(response.data);
      setFormData({
        data: response.data,
        message: "Form Data has been loaded!"
      });
    });
  }

  function show() {
    setShowOutput(true);
  }

  return (
    <div className="App">
      <h1>{submissionData.message}</h1>
      {!submissionData.data && (
        <button onClick={fetchSubmissionData}>Fetch Submission Data</button>
      )}
      <h1>{formData.message}</h1>
      {!formData.data && (
        <button onClick={fetchFormData}>Fetch Form Data</button>
      )}
      {submissionData.data && formData.data && (
        <React.Fragment>
          <h1>{"Click to generate the output."}</h1>
          <button onClick={show}>Generate output</button>
        </React.Fragment>
      )}
      {showOutput && <SubmissionFormData />}
    </div>
  );
}
