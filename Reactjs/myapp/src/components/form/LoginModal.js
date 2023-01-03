import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const validationSchema = yup.object().shape({
    password: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
  
    },
    // resolver: yupResolver(validationSchema),
  });
  const onSubmit = (dataObj) => {
    console.log(dataObj);
    reset()
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <TextField
                  type="email"
                  name="email"
                  size="small"
                  label="Email"
                  {...register("email")}
                />
                <TextField
                  type="password"
                  name="password"
                  size="small"
                  label="Password"
                  {...register("password")}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded p-2 "
                >
                  Login
                </button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
