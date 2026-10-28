import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
function YourComponent() {
  const [topArea, setTopArea] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTopArea(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="top-0 sticky bg-transparent z-30">
        <Navbar
          fluid
          rounded
          className={`absolute w-full ${isMenuOpen ? "menu-open" : ""}`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            zIndex: "10",
            color: topArea >= 450 ? "#111" : "#f7f7f7",
            backgroundImage:
              topArea >= 450
                ? "linear-gradient(#f7f7f7, #f7f7f7)"
                : "linear-gradient(#01010199, transparent)",
            transition: "color .6s",
          }}
        >
          <Navbar.Brand href="https://delighttourandtravel.com/">
            <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Delight Tour
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 flex-row gap-4">
            <FaWhatsapp height="10px" width="10px" />
            <a href="https://wa.me/qr/XATL45V764QNK1">+251984529929</a>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <style>
              {`
                .nav-link:hover {
                  text-decoration: underline;
                  text-decoration-color: orange;
                }
                .nav-link:nth-child(1):hover {
                  color: orange;
                }
                .nav-link:nth-child(2):hover {
                  color: green;
                }
                .nav-link:nth-child(3):hover {
                  color: orange;
                }
                .nav-link:nth-child(4):hover {
                  color: orange;
                }
                .nav-link:nth-child(5):hover {
                  color: orange;
                }
              `}
            </style>
            <Navbar.Link
              href="/"
              active
              className="nav-link"
              style={{ color: topArea >= 450 ? "#111" : "#f7f7f7" }}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              href="/about"
              className="nav-link"
              style={{ color: topArea >= 450 ? "#111" : "#f7f7f7" }}
            >
              About
            </Navbar.Link>
            <Navbar.Link
              href="/#services"
              className="nav-link"
              style={{ color: topArea >= 450 ? "#111" : "#f7f7f7" }}
              onClick={() => scrollToSection("services")}
            >
              Services and pricings
            </Navbar.Link>

            <Navbar.Link
              href="#contact"
              className="nav-link"
              style={{ color: topArea >= 450 ? "#111" : "#f7f7f7" }}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* Your existing commented-out Nav component */}
    </>
  );
}

export default YourComponent;
