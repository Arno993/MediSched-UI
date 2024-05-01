import { useEffect, RefObject } from "react";

export const useTooltipBlur = (
  tooltipRef: RefObject<HTMLElement>,
  buttonRef: RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;

      console.log({
        target,
        cur: !tooltipRef.current,
        curbut: buttonRef.current,
      });
      if (!tooltipRef.current || !buttonRef.current) {
        return;
      }
      if (
        tooltipRef.current.contains(target) ||
        buttonRef.current.contains(target)
      ) {
        return false;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [tooltipRef, buttonRef, handler]);
};
