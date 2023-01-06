import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import CommonTable from "../homePage/common/CommonTable";
import MainModal from "./MainModal";

const loginData = {
  massage: "Login List",
  result: [
    {
      Id: 1,
      firstName: "John",
      lastName: "doe",
      mobileNumber: "123456",
      address: "codeKul,pune",
      pinCode: "424210",
      password: "2345",
    },
  ],
  statusCode: "200",
  actions: ["Edit", "Delete"],
};

function Form() {
  const [data, setData] = React.useState({ actions: [], result: [] });
  const [dataResult, setDataResult] = React.useState([]);

  // //open and close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setData(loginData);
    setDataResult(loginData.result);
  }, []);

  console.log("data Result is", dataResult);
  return (
    <div className="mt-12 grid justify-center">
      <Button onClick={handleOpen}>Open modal</Button>

      <>
        {data.result.length > 0 ? (
          <CommonTable
            data={data}
            dataResult={dataResult}
            setDataResult={setDataResult}
          />
        ) : null}
      </>

      <MainModal
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default Form;
