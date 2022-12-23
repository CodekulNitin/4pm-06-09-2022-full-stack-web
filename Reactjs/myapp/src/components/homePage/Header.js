import React from "react";
import "../../App.css";
import img from "../assets/img.jpg";
import women from "../assets/women.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Tooltip } from "@mui/material";
import IncrementDecrementCounter from "./IncrementDecrementCounter";
import CommonTable from "./common/CommonTable";

const data = {
  result: [
    {
      id: 1,
      img: img,
      name: "codekul",
      address: "Kothrud Depot,pune",
      mobile: 1234567,
      email: "abc@gmail.com",
      skills: ["JavaScript", "ReactJs", "HTML", "CSS", "AngularJs"],
    },
    {
      id: 2,
      img: women,
      name: "codekul",
      address: "Kothrud Depot,pune",
      mobile: 1234567,
      email: "abc@gmail.com",
      skills: ["JavaScript", "ReactJs", "HTML", "CSS", "AngularJs"],
    },
    {
      id: 3,
      img: img,
      name: "codekul",
      address: "Kothrud Depot,pune",
      mobile: 1234567,
      email: "abc@gmail.com",
      skills: ["JavaScript", "ReactJs", "HTML", "CSS", "AngularJs"],
    },
    {
      id: 4,
      img: women,
      name: "codekul",
      address: "Kothrud Depot,pune",
      mobile: 1234567,
      email: "abc@gmail.com",
      skills: ["JavaScript", "ReactJs", "HTML", "CSS", "AngularJs"],
    },
  ],
};

// https://www.freecodecamp.org/news/react-hooks-fundamentals/#:~:text=React%20Hooks%20are%20simple%20JavaScript,useState%20%3A%20To%20manage%20states.

// https://reactjs.org/docs/hooks-intro.html

console.log(JSON.stringify(data.result));
export default function Header() {
  const [dataResult, setDataResult] = React.useState(data);

  console.log("data is", dataResult);
  const [visible, setVisible] = React.useState(false);
  const [personalInfo, setPersonalInfo] = React.useState(false);

  const showContent = () => {
    setVisible(true);
  };

  return (
    <div>
      <div>
        <button
          className="bg-green-600 text-white rounded p-2 "
          onClick={() => {
            showContent();
          }}
        >
          Visible Items
        </button>
      </div>
      {visible ? (
        <div className="grid grid-cols-4 gap-2 mt-12 m-5 ">
          {dataResult.result.map((data) => (
            <div className="border p-2 shadow-xl rounded">
              <div className="flex justify-center">
                <img className="rounded-full h-44 w-44" src={data.img} />
              </div>
              <div className="flex justify-end">
                <Tooltip title="View">
                  <button>
                    <RemoveRedEyeIcon className="text-red-500 animate-pulse" />
                  </button>
                </Tooltip>
              </div>
              <div className="flex space-x-2 font-semibold">
                <label>Name &nbsp; :</label>
                <p>{data.name}</p>
              </div>
              <div className="flex space-x-2 font-semibold">
                <label>Address &nbsp; :</label>
                <p>{data.address}</p>
              </div>
              {personalInfo ? (
                <div>
                  <div className="flex space-x-2 font-semibold">
                    <label>Email &nbsp; :</label>
                    <p>{data.email}</p>
                  </div>
                  <div className="flex space-x-2 font-semibold">
                    <label>MobileNo &nbsp; :</label>
                    <p>{data.mobile}</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="flex space-x-2 font-semibold">
                <label className="whitespace-nowrap	">Skills &nbsp; :</label>
                <p className="flex flex-wrap ">{data.skills}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* <h1>Hello codekul</h1> */}
          <CommonTable data={data}/>
        </div>
      )}
      <div>
        {/* <IncrementDecrementCounter/> */}
      </div>
    </div>
  );
}
