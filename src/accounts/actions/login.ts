import { LoginResponse, LoginParams } from "../domain/app_users";

export const login = async ({
  username,
  password,
}: LoginParams): Promise<LoginResponse> => {
  const body = {
    model: {
      timeout: 259200,
    },
    auth: [["password", { username, password }]],
  };

  const response = await fetch("/api/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Login failed!");
  }

  const data = await response.json();
  if (data.status === "OK" && data.data) {
    return { uid: data.data.uid };
  } else {
    throw new Error("Invalid login response");
  }
};
