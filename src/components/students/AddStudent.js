import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/features/studentSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid"
import Layout from "./layout/Layout";

const AddStudent = () => {
  const dispatch = useDispatch()
  let history = useHistory();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(addStudent(data))
    reset({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    });
    history.push("/");
  };



  return (
    <div>
      <Layout>
        <Paper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter Your First Name"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Your Last Name"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  placeholder="Enter Your E-mail Address"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  placeholder="Enter Your Address"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <TextField
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Enter Your Phone Number"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Button type="submit">Create new Student</Button>
          </form>
        </Paper>
      </Layout>
    </div>
  );
};

export default AddStudent;
