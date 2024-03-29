import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
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
      setSubmissionData({
        data: response.data,
        message: "Submission Data has been loaded!"
      });
    });
  }

  function fetchFormData() {
    axios.get("/api/form").then(response => {
      setFormData({
        data: response.data,
        message: "Form Data has been loaded!"
      });
    });
  }

  function show() {
    setShowOutput(true);
    setSubmissionData({ ...submissionData, message: null });
    setFormData({ ...formData, message: null });
  }

  return (
    <div className="App">
      <h1>{submissionData.message}</h1>
      {!submissionData.data && (
        <Button variant="contained" onClick={fetchSubmissionData}>
          Fetch Submission Data
        </Button>
      )}
      <h1>{formData.message}</h1>
      {!formData.data && (
        <Button variant="contained" color="primary" onClick={fetchFormData}>
          Fetch Form Data
        </Button>
      )}
      {submissionData.data && formData.data && (
        <React.Fragment>
          {!showOutput && (
            <React.Fragment>
              <h1>{"Click to generate the output."}</h1>
              <Button variant="contained" color="secondary" onClick={show}>
                Generate output
              </Button>
            </React.Fragment>
          )}
          {showOutput && (
            <React.Fragment>
              <h2>{"Dependents"}</h2>
              <SubmissionFormData
                sub={submissionData.data}
                form={formData.data}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
