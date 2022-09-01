import { LoginContainer, LoginForm } from "./styles";

export function Login() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </LoginForm>
    </LoginContainer>
  )
}
