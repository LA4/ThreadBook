import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar({ children }) {
  const [open, setOpen] = useState(false);
  const HandleOpen = () => {
    setOpen(!open);
  };

  const styleLI = { display: "flex", height: "100%/3", padding: ".5rem" };
  return (
    <>
      <motion.header
        style={{
          display: "flex",
          position: "fixed",
          width: "50px",
          height: "50px",
          margin: "1rem",
          cursor: "pointer",
        }}>
        <p
          onClick={HandleOpen}
          style={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255, 255, 255, 0.87)",
          }}>
          Menu
        </p>
        <AnimatePresence>
          {open && (
            <motion.nav
              key="navigate"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "flex",
                width: "50px",
                height: "50px",
                margin: "1rem",
                cursor: "pointer",
              }}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: ".5rem",
                  width: "auto",
                  height: "90px",

                  backgroundColor: "rgba(0,0,0,.8)",
                }}>
                <motion.li
                  whileHover={{
                    x: 2,
                    color: "rgba(255,255,255,.6)",
                  }}
                  style={styleLI}>
                  <Link onClick={HandleOpen} to={`login`}>
                    Connexion
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{
                    x: 2,
                    color: "rgba(255,255,255,.6)",
                  }}
                  style={styleLI}>
                  <Link onClick={HandleOpen} to={`/`}>
                    Acceuil
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
      <main>{children}</main>
    </>
  );
}
