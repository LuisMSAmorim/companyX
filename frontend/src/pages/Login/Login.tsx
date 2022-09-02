import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { LoginContainer, LoginForm } from "./styles";

type Inputs = {
  email: string;
  password: string;
}

const apiUrl = 'http://localhost:5000';

export function Login() {
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = data => {
    axios.post(`${apiUrl}/auth/login`, data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      }).catch(err => {
        setError("Login ou senha inválidos...");
      })
  }

  return (
    <LoginContainer>
      <h1>Login</h1>
      { error != '' ? <ErrorMessage message={error} /> : null }
      {/* <ErrorMessage message={"Login ou senha inválidos..."} /> */}
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="email" required placeholder="Email" />
        <input {...register("password")} type="password" required placeholder="Senha" />

        <button type="submit">Entrar</button>
      </LoginForm>
    </LoginContainer>
  )
}
