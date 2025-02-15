import { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState("HOME");

  const menuItems = [
    "HOME",
    "ABOUT",
    "COURSES",
    "FREE TRADING RESOURCES",
    "TESTIMONIALS",
  ];

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center space-x-8 p-4 uppercase text-black text-sm">
        {menuItems.map((item) => (
          <li
            key={item}
            className="relative cursor-pointer"
            onClick={() => setActive(item)}
          >
            <span className={`${active === item ? "font-semibold" : ""}`}>
              {item}
            </span>
            {active === item && (
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1  bg-teal-500 rounded-full"
                style={{ top: "120%", width: "100%" }}
              ></div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
