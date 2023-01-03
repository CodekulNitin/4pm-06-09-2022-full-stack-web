
import {TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import { useForm } from "react-hook-form";
import CommonTable from "../homePage/common/CommonTable";
import LoginModal from './LoginModal'

const data = {
  result: [
    {
      id: 1,
      firstName: "John",
      lastName: "doe",
      mobileNumber: "123456",
      password: "dsf#$%",
      address: "codeKul,pune",
      pinCode: "424210",
    },
  ],
};

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: "",
      address: "",
      pinCode: "",
    },
  });

  const [dataResult, setDataResult] = React.useState([]);

  // //open and close modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (dataObj) => {
    let orignalData = data;
    orignalData.result.push(dataObj);
    setDataResult(orignalData);
  };
  console.log(dataResult);
  return (
    <div className="mt-12 grid justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
      <Button onClick={handleOpen}>Open modal</Button>
        <div className="grid grid-cols-3 gap-2 shadow rounded border p-5">
          <TextField
            label="First Name"
            name="firstName"
            {...register("firstName")}
          />
          <TextField
            label="Last Name"
            name="lastName"
            {...register("lastName")}
          />
          <TextField
            label="Mobile Number"
            name="mobileNumber"
            {...register("mobileNumber")}
          />
          <TextField
            label="Password"
            name="password"
            {...register("password")}
          />
          <TextField label="Address" name="address" {...register("address")} />
          <TextField label="PinCode" name="pinCode" {...register("pinCode")} />
          <div className="col-span-3 flex justify-center space-x-2">
            <button type="button" onClick={reset} variant="outlined" color="warnnig">
              Reset
            </button>
            <button type="submit" variant="contained">
              Submit
            </button>
          </div>
          <div></div>
        </div>
      </form>
      <>
        {data.result.length > 0 ?(
        <CommonTable data={dataResult} />
         ):null} 
      </>
    <LoginModal 
    open={open}
    handleClose={handleClose}
    />
    </div>
  );
}

export default Form;
