import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CommonTable from "../homePage/common/CommonTable";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const loginData = {
  massage: "Login List",
  result: [
    {
      Id: 1,
      Gender: "John",
      GenderName: "doe",
      mobileNumber: "123456",
      address: "codeKul,pune",
      pinCode: "424210",
      password: "2345",
    },
  ],
  statusCode: "200",
  actions: ["Edit", "Delete"],
};

export default function TransitionsModal(props) {
  //yup's validation schema
  const schema = yup.object().shape({
    email: yup.string().email().required("must be a email"),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required("password should not be empty"),
      mobileNumber: yup.number()
      .typeError("Mobile Number must be a number")
      .nullable()
      .moreThan(0, "Floor area cannot be negative")
      .transform((_, val) => (val !== "" ? Number(val) : null))
      .required("mobile number should not be empty"),
      fullName: yup
      .string()
      .min(8)
      .max(16)
      .required("fullName should not be empty"),
      pinCode: yup.number()
      .typeError("pin code must be a number")
      .nullable()
      .moreThan(0, "Floor area cannot be negative")
      .transform((_, val) => (val !== "" ? Number(val) : null))
      .required("pin code should not be empty"),
      address: yup
      .string()
      .min(18)
      .max(56)
      .required("Address should not be empty"),
  });

  const [data, setData] = React.useState({ actions: [], result: [] });
  const [dataResult, setDataResult] = React.useState([]);

  React.useEffect(() => {
    setData(loginData);
    setDataResult(loginData.result);
  }, []);

  //the object to reset the form to blank values
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      Id:"",
      fullName: "",
      email:"",
      mobileNumber: "",
      password: "",
      address: "",
      pinCode: "",
    },
  });
  console.log("data", props.data);

  const onSubmit = (dataObj) => {
    let orignalData = props.data;
    console.log("orignaldata", orignalData);
    orignalData.result.push(dataObj);
    props.setData(orignalData);
    props.handleClose();
    reset();
  };
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <a
              className="flex justify-end my-3 text-red-700 cursor-pointer"
              onClick={() => {
                props.handleClose();
              }}
            >
              <CancelPresentationIcon />
            </a>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-2 shadow rounded border p-5">
                <div>
                  <TextField
                    required
                    id="email"
                    name="email"
                    size="small"
                    label="Email"
                    fullWidth
                    {...register("email")}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Full Name"
                    name="fullName"
                    fullWidth
                    {...register("fullName")}
                  />
                  <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                    {errors.fullName?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Mobile Number"
                    name="mobileNumber"
                    fullWidth

                    {...register("mobileNumber")}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.mobileNumber?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Password"
                    name="password"
                    fullWidth

                    {...register("password")}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Address"
                    fullWidth

                    name="address"
                    {...register("address")}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.address?.message}
                  </Typography>
                </div>
                <div>
                  <TextField
                    size="small"
                    label="PinCode"
                    fullWidth

                    name="pinCode"
                    {...register("pinCode")}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.pinCode?.message}
                  </Typography>
                </div>
                <div className="col-span-3 flex justify-center space-x-2">
                  <button
                    className="border border-red-700 text-red-700 rounded p-2 px-4"
                    type="button"
                    onClick={() => {
                      reset();
                    }}
                    variant="outlined"
                    color="warnnig"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    variant="contained"
                    className="bg-blue-700 text-white rounded p-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <>
              {data.result.length > 0 ? (
                <CommonTable
                  data={data}
                  dataResult={dataResult}
                  setDataResult={setDataResult}
                />
              ) : null}
            </>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
