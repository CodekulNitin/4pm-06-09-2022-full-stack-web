import { Button, TextField } from "@mui/material";
import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
let fname = watch("fname")
console.log(fname)
  const onSubmit = (data) => {
    console.log(data);

  }

  return (
    <div className="mt-12 grid justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-2 shadow rounded border p-5">
          <TextField label="First Name" name="fname"  {...register("fname")}/>
          <TextField label="Last Name" name="lname" {...register("lname")} />
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

            <p>
       {fname}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
