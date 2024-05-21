import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/user-context";
import { login as loginUser } from "../actions/login";
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

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const { login, setIsLoading } = useUser();

  const handleLogin = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const result = await loginUser({ username, password });
      login({ session_id: result.uid, name: "User Name" }); // Adjust user properties as needed
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
