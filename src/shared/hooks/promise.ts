import { useCallback, useEffect, useState } from "react";

export interface UsePromiseError extends Error {
  fieldErrors?: {
    message: string;
    path: string;
  }[];
}

export const usePromise = <F, P>(
  f: (...args: P[]) => Promise<F>,
  deps: any[]
) => {
  const {
    execute: executePromise,
    result,
    isLoading,
    error,
  } = usePromiseLazy(f, deps);

  useEffect(() => {
    executePromise();
  }, [executePromise]);

  return { execute: executePromise, result, isLoading, error };
};

export const usePromiseLazy = <F, P>(
  f: (...args: P[]) => Promise<F>,
  deps: any[]
) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    result: F | undefined;
    error: any | undefined;
  }>({
    isLoading: false,
    result: undefined,
    error: undefined,
  });

  const execute = useCallback(
    async (...args: P[]) => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
        error: undefined,
      }));
      try {
        const theResult = await f(...args);
        setState({ isLoading: false, result: theResult, error: undefined });
        return { result: theResult, error: undefined };
      } catch (caughtError) {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          result: undefined,
          error: caughtError,
        }));
        return { result: undefined, error: caughtError };
      }
    },
    [f, setState]
  );

  return { execute, ...state };
};
