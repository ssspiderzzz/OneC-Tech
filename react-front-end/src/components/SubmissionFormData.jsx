import React from "react";
import "./SubmissionFormData.css";

export default function SubmissionFormData(props) {
  let newForm = {};
  props.sub.map(data => {
    newForm[data.field] = {};
    newForm[data.field].value = data.value;
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
