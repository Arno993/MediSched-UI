import React, { useState } from "react";
import Cookies from "js-cookie";
// import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/login";
import {
  BackgroundImg,
  FlexContainer,
  H2,
  InfoContent,
  InfoPanel,
  Input,
  LoginBox,
  LoginButton,
  LoginContainer,
  LoginError,
  StyledSpacer,
} from "./login-styles";

type LoginProps = {
  setIsLoading: (isLoading: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setIsLoading }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Set loading state
    setIsLoading(true);
    // Clear form errors (if there are any)
    setError(undefined);
    try {
      const result = await login({ username, password });
      Cookies.set("uid", result.uid, { expires: 3 });
      navigate("/home");
    } catch (error: any) {
      console.error("Login Error:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <BackgroundImg />
      <FlexContainer>
        <InfoPanel>
          <InfoContent>
            <h1>Welcome!</h1>
            <p>
              As part of my proficiency test, I've harnessed the power of the
              GoodX APIs to manage login functionalities and perform simple CRUD
              operations. My implementation includes a component that allows
              viewing of diary schedules by day, month, and year.
            </p>
            <p>
              Not only can you update and delete appointments with a few clicks,
              but you can also snoop on patient and debtor details—all while
              demonstrating my API skills and a serious flair for keeping
              schedules from going rogue!
            </p>
          </InfoContent>
        </InfoPanel>
        <LoginBox>
          <H2>Sign in</H2>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledSpacer />
          <LoginButton disabled={!(username && password)} onClick={handleLogin}>
            Login
          </LoginButton>
        </LoginBox>
      </FlexContainer>
      {error && (
        <LoginError>
          <p>{error}</p>
        </LoginError>
      )}
    </LoginContainer>
  );
};

export default Login;
