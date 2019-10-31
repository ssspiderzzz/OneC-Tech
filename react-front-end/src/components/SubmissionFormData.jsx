import React, { useEffect } from "react";

export default function SubmissionFormData(props) {
  useEffect(() => {
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
  }, []);

  return <React.Fragment></React.Fragment>;
}
