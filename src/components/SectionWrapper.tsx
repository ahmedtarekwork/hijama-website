import { ComponentProps, ReactNode, forwardRef } from "react";

type Container =
  | {
      value: false;
      attr?: never;
    }
  | {
      value: true;
      attr?: ComponentProps<"div">;
    };

type Props = {
  children: ReactNode;
  container?: Container;
  title?: string;
  padding?: boolean;
} & ComponentProps<"div">;

const SectionWrapper = forwardRef<HTMLDivElement, Props>(
  (
    { children, container = { value: true }, title, padding = true, ...attr },
    ref
  ) => {
    return (
      <div
        {...attr}
        className={`${attr.className || ""}${padding ? " section" : ""}`}
        ref={ref}
      >
        {!container?.value && title ? (
          <h2 className="section-title">{title}</h2>
        ) : null}

        {container?.value ? (
          <div
            {...container?.attr}
            className={`container${
              container.attr?.className ? ` ${container.attr?.className}` : ""
            }`}
          >
            {title && <h2 className="section-title">{title}</h2>}

            {children}
          </div>
        ) : (
          children
        )}
      </div>
    );
  }
);
export default SectionWrapper;
