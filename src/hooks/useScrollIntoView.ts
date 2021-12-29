import { useRef } from "react";

type Props = {
  readonly behavior?: ScrollBehavior;
  readonly block?: ScrollLogicalPosition;
};

const useScrollIntoView = (options?: Props) => {
  const defaultOptions: Props = {
    behavior: "smooth",
    block: "start",
  };

  const ref = useRef<HTMLDivElement[]>([]);
  ref.current = [];

  const scrollTarget = (item: HTMLDivElement) => ref.current.push(item);

  const scrollToTarget = (selector?: any) => {
    if (selector) {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView(options || defaultOptions);
    } else {
      if (ref.current[0])
        ref.current[0].scrollIntoView(options || defaultOptions);
    }
  };

  return { scrollToTarget, scrollTarget };
};

export default useScrollIntoView;
