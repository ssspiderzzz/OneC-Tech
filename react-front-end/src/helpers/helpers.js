/* eslint-disable array-callback-return */

export default function transformRawString(string) {
  let temp = [];
  let output = "";
  if (string.includes("=")) {
    temp = string.split("\n");
    console.log(temp);
    temp.map(section => {
      output += section.split(" = ")[1];
      if (section.split(" = ")[0] === "address") {
        output += "\n";
      } else if (section.split(" = ")[0] === "city") {
        output += ", ";
      } else {
        output += " ";
      }
    });
  } else {
    output = string;
  }
  return output;
}
