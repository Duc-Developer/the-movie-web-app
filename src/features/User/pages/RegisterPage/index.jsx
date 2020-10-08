import React, { useRef, useState } from "react";
import TextFieldController from "../../../../fields/TextFieldController";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useForm } from "react-hook-form";
import { Avatar, ButtonBase, Grid, Input, Typography } from "@material-ui/core";
import userLogo from "../../../../assets/images/avatar.svg";
import { useDispatch } from 'react-redux';
import { createNewUser } from "../../../../actions";

const defaultValues = {
  username: "",
  password: "",
  avatar: {},
  firstName: "",
  lastName: "",
};

export default function RegisterPage() {
  const { handleSubmit, errors, control } = useForm({
    defaultValues,
  });
  const inputRef = useRef(null);
  const [fileValue, setFileValue] = useState(null);
  const [preview, setPreview] = useState(userLogo);
  const [fileErrorMessage, setFileErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (fileValue === null) {
      setFileErrorMessage("Avatar must be update!");
      return;
    }
    if (fileValue?.type !== "image/jpeg") {
      setFileErrorMessage("Avatar must be .jpeg file!");
      return;
    }
    dispatch(createNewUser(data));
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit(onSubmit)} className="register-page__form">
        <Grid container spacing={2}>
          <Grid container justify="center" item xs={12}>
            <Avatar
              style={{ width: "8em", height: "8em" }}
              src={preview}
              alt="user-logo-form"
              onClick={() => {
                inputRef.current.click();
              }}
            />
            <input
              name="avatar"
              ref={inputRef}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFileValue(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
              style={{ display: "none" }}
              type="file"
            />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Typography color="error" variant="caption" component="i">
              {fileErrorMessage}
            </Typography>
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Typography variant="h5">REGISTER</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldController
              errors={errors}
              control={control}
              rules={{
                required: { value: true, message: "First name is required" },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "First name must be letters",
                },
              }}
              icon={<div />}
              name="firstName"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldController
              errors={errors}
              control={control}
              rules={{
                required: { value: true, message: "Last name is required" },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Last name must be letters",
                },
              }}
              icon={<div />}
              name="lastName"
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldController
              errors={errors}
              control={control}
              rules={{
                required: { value: true, message: "Please enter user name" },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "User name must be letters and numbers",
                },
              }}
              icon={<AccountCircle />}
              name="username"
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldController
              errors={errors}
              control={control}
              rules={{
                required: { value: true, message: "Password is required" },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Password is more than 8 characters and including numbers and letters",
                },
              }}
              icon={<VpnKeyIcon />}
              name="password"
              type="password"
              enableAdornment
            />
          </Grid>
          <Grid item xs={12}>
            <div className="register-page__login-button">
              <ButtonBase>
                <Input fullWidth value="REGISTER" type="submit" />
              </ButtonBase>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
