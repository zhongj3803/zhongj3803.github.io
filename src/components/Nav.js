import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navigation } from "../content";

function Nav() {
  const [active, setActive] = useState(null);
  const [glow, setGlow] = useState({ x: 0, width: 0 });
  const list = useRef(null);

  // A section counts as active while it crosses a line two-thirds down the screen.
  // Any higher, and the last section can't reach it on tall monitors.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          setActive((id) => {
            if (isIntersecting) return target.id;
            return id === target.id ? null : id;
          });
        });
      },
      { rootMargin: "-65% 0px -33% 0px" }
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const link = list.current.querySelector('[aria-current="true"]');
      if (link) setGlow({ x: link.offsetLeft, width: link.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const activeItem = navigation.find(({ id }) => id === active);

  return (
    <header className="nav">
      <a className="nav__mark" href="#top" aria-label="Jesse Zhong, back to top">
        JZ
      </a>
      <nav className="nav__links" aria-label="Sections" ref={list}>
        <span
          className="nav__glow"
          aria-hidden="true"
          style={{
            "--x": `${glow.x}px`,
            "--w": `${glow.width}px`,
            "--c": `var(--${activeItem ? activeItem.color : "blue"})`,
            opacity: activeItem ? 1 : 0,
          }}
        />
        {navigation.map(({ id, label }) => (
          <a
            className="nav__link"
            href={`#${id}`}
            key={id}
            aria-current={id === active ? "true" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Nav;
