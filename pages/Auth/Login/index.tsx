import React from 'react';
import MainComponent from "../../../components/shared/MainComponent";
import LoginForm from "../../../components/LoginForm";
import SignUpForm from "../../../components/SignUpForm";

const Login: React.FC = () => {
  return (
    <MainComponent>
      <br />
      <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="Log In" />
      <br />
      <SignUpForm titlePhrase="Criar uma conta" buttonPhrase="Registre-se" />
    </MainComponent>
  )
}

export default Login;