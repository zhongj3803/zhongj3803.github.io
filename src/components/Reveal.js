import React, { useEffect, useRef } from "react";

// Fades its children up the first time they scroll into view.
function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const element = useRef(null);

  useEffect(() => {
    const node = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add("is-in");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={element}
      className={`reveal ${className}`}
      style={{ ...style, "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
