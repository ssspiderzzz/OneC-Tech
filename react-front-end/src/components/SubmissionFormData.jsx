/* eslint-disable array-callback-return */
import React from "react";
import "./SubmissionFormData.css";
import transformRawString from "../helpers/helpers";

export default function SubmissionFormData(props) {
  let newForm = {};
  // Create a new object to match the field id number
  // then the algorithm become (2n) instead of (n^2)
  props.sub.map(data => {
    newForm[data.field] = {};
    // Use helper function to transform the submission data to
    // the format that requires
    newForm[data.field].value = transformRawString(data.value);
  });
  props.form.map(field => {
    if (newForm[field.id]) {
      newForm[field.id].label = field.label;
    }
  });

  return (
    <React.Fragment>
      <div id="tableRoot">
        <table className="box-table">
          <tbody>
            {Object.keys(newForm).map((id, index) => {
              return (
                <tr key={index}>
                  <td>{newForm[id].label}</td>
                  <td>{newForm[id].value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
