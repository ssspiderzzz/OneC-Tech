import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SubmissionFormData from "./components/SubmissionFormData";

export default function App(props) {
  useEffect(() => {
    console.log(process.env);
  }, []);

  const [submissionData, setSubmissionData] = useState({
    message: "Step 1: Click the button to load Submission Data!"
  });

  const [formData, setFormData] = useState({
    message: "Step 2: Click the button to load Form Data!"
  });

  function fetchSubmissionData() {
    axios.get("/api/submission").then(response => {
      // handle success
      console.log(response.data);

      setSubmissionData({
        message: "Submission Data has been loaded!"
      });
    });
  }

  function fetchFormData() {
    axios.get("/api/form").then(response => {
      // handle success
      console.log(response.data);

      setFormData({
        message: "Form Data has been loaded!"
      });
    });
  }

  function fetch() {
    axios.get("/api/submission").then(response => {
      console.log(response.data);
    });
  }

  return (
    <div className="App">
      <h1>{submissionData.message}</h1>
      <button onClick={fetchSubmissionData}>Fetch Submission Data</button>
      <h1>{formData.message}</h1>
      <button onClick={fetchFormData}>Fetch Form Data</button>
      <SubmissionFormData />
      <h1>{"formData.message"}</h1>
      <button onClick={fetch}>Fetch Form backend</button>
    </div>
  );
}
