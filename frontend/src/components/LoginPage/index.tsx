import React from "react";
import { useRef } from "react";
import {BackgroundImageDiv, CenteredColumnDiv} from "../global-styles";
import AjustableForm from "../AjustableForm";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import getCookie from "../../utils";

const Login = () => {
  const emailRef = useRef({value: ""});
  const passwordRef = useRef({value: ""});
  const navigate = useNavigate();

  if (getCookie("loggedin") === "true") {
    navigate("/");
  }

  const onClick = () => {
    const handleCorrectInput = (response: AxiosResponse<any, any>) => {
      localStorage.setItem("username", response.data.username);
      navigate("/");
    };

    const handleWrongInput = () => {
      passwordRef.current.value = "";
      alert("Wrong email or password!");
    };

    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    axios
      .post("http://localhost:4000/login", { email: email, password: password }, {withCredentials: true})
      .then((response: any) => {
        response.data.status === 200
          ? handleCorrectInput(response)
          : handleWrongInput();
      });
  };

  return (
    <BackgroundImageDiv>
    <CenteredColumnDiv>
      <AjustableForm
        fields={[
          { text: "Email", type: "text", ref: emailRef },
          { text: "Password", type: "password", ref: passwordRef },
        ]}
        onClick={onClick}
      />
    </CenteredColumnDiv>
    </BackgroundImageDiv>
  );
};

export default Login;