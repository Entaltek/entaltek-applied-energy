import { type MouseEvent, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { Link, type LinkProps, useNavigate } from "react-router-dom";

type TransitionLinkProps = LinkProps & { children: ReactNode };

const TransitionLink = ({ children, onClick, target, to, ...props }: TransitionLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || target || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;

    const documentWithTransition = document as Document & { startViewTransition?: (callback: () => void) => unknown };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!documentWithTransition.startViewTransition || reduceMotion) return;

    event.preventDefault();
    documentWithTransition.startViewTransition(() => {
      flushSync(() => navigate(to));
    });
  };

  return <Link {...props} to={to} target={target} onClick={handleClick}>{children}</Link>;
};

export default TransitionLink;
