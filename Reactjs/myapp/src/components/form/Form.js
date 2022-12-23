import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import CommonTable from "../homePage/common/CommonTable";

const data = {
  result:[
    {
      id:1,
      firstName:"John",
      lastName:"doe"
    }
  ]
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    } 
});

  const [dataResult,setDataResult] = React.useState()

  const onSubmit = (data) => {
    console.log(data);
    setDataResult(data)
    
  };


  return (
    <div className="mt-12 grid justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-2 shadow rounded border p-5">
          <TextField label="First Name" name="firstName" {...register("firstName")} />
          <TextField label="Last Name" name="lastName" {...register("lastName")} />
          <TextField label="Mobile Number" />
          <TextField label="Password" />
          <TextField label="Address" />
          <TextField label="PinCode" />
          <div className="col-span-3 flex justify-center">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
          <div>
            
          </div>
        </div>
      </form>
      <>
        <CommonTable
        data={data}
        dataResult={dataResult}
        />
      </>
    </div>
  );
}

export default Form;
