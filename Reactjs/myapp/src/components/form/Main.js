import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import CommonTable from "../homePage/common/CommonTable";
import MainModal from "./MainModal";

const data = {
  result: [
    {
      id: 1,
      firstName: "John",
      lastName: "doe",
      mobileNumber: "123456",
      address: "codeKul,pune",
      pinCode: "424210",
      password: "2345",
    },
  ],
};

function Form() {
  const [dataResult, setDataResult] = React.useState([]);

  // //open and close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setDataResult(data);
  }, []);

  console.log("data Result is",dataResult);
  return (
    <div className="mt-12 grid justify-center">
      <Button onClick={handleOpen}>Open modal</Button>

      <>{data.result.length > 0 ? <CommonTable data={dataResult} /> : null}</>


      <MainModal
        open={open}
        handleClose={handleClose}
        data={dataResult}
        setDataResult={setDataResult}
      />
    </div>
  );
}

export default Form;
