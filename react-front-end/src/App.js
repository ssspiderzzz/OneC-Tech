import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FormData from "./components/FormData";

export default function App(props) {
  useEffect(() => {
    console.log(process.env.TOKEN);
  }, []);

  const [submissionData, setSubmissionData] = useState({
    message: "Step 1: Click the button to load Submission Data!"
  });

  const [formData, setFormData] = useState({
    message: "Step 2: Click the button to load Form Data!"
  });

  function fetchSubmissionData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const submission = `https://www.formstack.com/api/v2/submission/551042206.json?oauth_token=${process.env.TOKEN}`;

    axios.get(proxyurl + submission).then(response => {
      // handle success
      console.log(response.data.data);

      setSubmissionData({
        message: "Submission Data has been loaded!"
      });
    });
  }

  function fetchFormData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const submission = `https://www.formstack.com/api/v2/form/3634968.json?oauth_token=${process.env.TOKEN}`;

    axios.get(proxyurl + submission).then(response => {
      // handle success
      console.log(response.data.fields);

      setFormData({
        message: "Form Data has been loaded!"
      });
    });
  }

  return (
    <div className="App">
      <h1>{submissionData.message}</h1>
      <button onClick={fetchSubmissionData}>Fetch Submission Data</button>
      <h1>{formData.message}</h1>
      <button onClick={fetchFormData}>Fetch Form Data</button>
      <FormData />
    </div>
  );
}
