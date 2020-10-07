import React from "react";
import TextFieldController from "../../../../fields/TextFieldController";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useForm } from "react-hook-form";

const defaultValues = {
  userName: "",
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
          name="userName"
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
