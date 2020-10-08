import React from "react";
import TextFieldController from "../../../../fields/TextFieldController";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useForm } from "react-hook-form";
import { ButtonBase, Input, Typography } from "@material-ui/core";
import userLogo from "../../../../assets/images/avatar.svg";

const defaultValues = {
  username: "",
  password: ""
};

export default function LoginPage() {
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit(onSubmit)} className="login-page__form">
        <img width="120px" src={userLogo} alt="user-logo-form" />
        <Typography variant="h5">WELCOME</Typography>
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
        <div className="login-page__login-button">
          <ButtonBase>
            <Input fullWidth value="LOGIN" type="submit" />
          </ButtonBase>
        </div>
      </form>
    </div>
  );
}
