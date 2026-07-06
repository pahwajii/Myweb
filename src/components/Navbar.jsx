import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../portfolioData";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.8rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Left Logo + Name --- */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "var(--accent)",
            }}
          >
            {profile.initials}
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: 14 }}>{profile.fullName}</h1>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              {profile.role}
            </div>
          </div>
        </div>

        {/* --- Center Navigation Links (Desktop) --- */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.8rem",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              style={{
                position: "relative",
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "white",
                fontWeight: 500,
              }}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <motion.span
                    animate={{
                      color: isActive ? "var(--accent)" : "white",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        borderRadius: "1px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* --- Mobile Hamburger Button --- */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* --- Mobile Navigation Menu Overlay --- */}
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "1.4rem",
                textDecoration: "none",
                fontWeight: 600,
                color: "white",
              }}
            >
              {({ isActive }) => (
                <motion.span
                  animate={{ color: isActive ? "var(--accent-2)" : "white" }}
                  whileHover={{ scale: 1.1, color: "var(--accent-2)" }}
                  style={{ textShadow: isActive ? "0 0 10px var(--accent-2)" : "none" }}
                >
                  {l.label}
                </motion.span>
              )}
            </NavLink>
          ))}
        </motion.div>
      )}
    </>
  );
}
