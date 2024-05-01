import { camelToSnake } from "./utils/camel-to-snake";

const { REACT_APP_LOCAL_URL: reactAppLocalHost } = process.env;

export const medSchedApiRequest = async (
  url: string,
  options: {
    method?: string;
    headers?: { [k: string]: string };
    body?: { [k: string]: any };
    raw?: boolean;
  },
  pathOverride = ""
) => {
  const token = ""; // accountStore.loginToken; // need to set up some kind of store for this
  const fetchOptions = {
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      ...(options.headers ? { ...options.headers } : {}),
    },
    method: options.method || "GET",
    ...(options.body
      ? { body: JSON.stringify(camelToSnake(options.body)) }
      : {}),
  };

  const baseUrl = reactAppLocalHost;
  let path = `${baseUrl}/${url}`;

  const result = await fetch(path, fetchOptions);

  if (options.raw) {
    if (result.status === 401) {
      return (window.location.href = "/");
    }
    return result;
  }

  const contentType = result.headers.get("content-type");
  const body = await (contentType && contentType.includes("application/json")
    ? result.json()
    : result.text());

  if (result.status >= 400) {
    if (result.status === 401) {
      window.location.href = "/";
    }
    throw body;
  }

  return body;
};
