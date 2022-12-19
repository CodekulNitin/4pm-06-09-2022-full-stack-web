import React from "react";
import "../../App.css";
const data = {
  result: [
    {
      id: 1,
      name: "codekul",
      address: "Kothrud Depot,pune",
    },
    {
      id: 2,
      name: "codekul",
      address: "Kothrud Depot,pune",
    },
    {
      id: 3,
      name: "codekul",
      address: "Kothrud Depot,pune",
    },
    {
      id: 4,
      name: "codekul",
      address: "Kothrud Depot,pune",
    },
  ],
};
console.log(JSON.stringify(data.result));
export default function Header() {
  return (
    <div className="header">
      {data.result.map((data) => (
        <div className="headerInfo">{data.name}</div>
      ))}
    </div>
  );
}
