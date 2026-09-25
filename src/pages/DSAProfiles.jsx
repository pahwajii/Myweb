import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code2, Award, Zap, CheckCircle2 } from "lucide-react";
import { dsaProfiles, codolioLink, codolioCardLink } from "../portfolioData";

export default function DSAProfiles() {
  return (
    <section className="container" style={{ padding: "50px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "linear-gradient(145deg, rgba(15,15,15,0.95), rgba(5,5,5,0.95))",
          borderRadius: 20,
          padding: "40px 30px",
          color: "#e5e5e5",
          border: "1px solid rgba(0, 180, 255, 0.15)",
          boxShadow: "0 0 35px rgba(0, 180, 255, 0.08)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 32,
              fontWeight: 700,
              background: "linear-gradient(90deg, #00b4ff, #00ffc8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 10,
            }}
          >
            ⚡ DSA & Competitive Programming Profiles
          </motion.h2>
          <p style={{ color: "#aaa", fontSize: 16, maxWidth: 650, margin: "0 auto" }}>
            A dedicated showcase of my algorithmic problem-solving journey across LeetCode, CodeChef, Codeforces, GeeksforGeeks, and Codolio.
          </p>
        </div>

        {/* Codolio Highlight Card Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(15,15,15,0.9))",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: 16,
            padding: "24px",
            marginBottom: 40,
            display: "flex",
            flexWrap: "wrap",
            gap: 30,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Zap color="#f97316" size={24} />
              <h3 style={{ fontSize: 22, color: "#f97316", margin: 0 }}>Codolio Verified Stats Card</h3>
            </div>
            <p style={{ color: "#ccc", fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>
              Centralized platform tracking real-time contest activity, problem submissions, and active streak days across all coding handles.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#22c55e" }}>120</div>
                <div style={{ fontSize: 12, color: "#aaa" }}>Active Days</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#f97316" }}>369</div>
                <div style={{ fontSize: 12, color: "#aaa" }}>Total Contributions</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#00b4ff" }}>Top 6%</div>
                <div style={{ fontSize: 12, color: "#aaa" }}>LeetCode Rating</div>
              </div>
            </div>
            <motion.a
              href={codolioLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(90deg, #f97316, #ea580c)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              View Codolio Profile <ExternalLink size={16} />
            </motion.a>
          </div>

          {/* Codolio Card Preview */}
          <div style={{ flex: "0 1 300px", display: "flex", justifyContent: "center" }}>
            <motion.a
              href={codolioLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ duration: 0.3 }}
              style={{ display: "block", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(249,115,22,0.4)" }}
            >
              <img
                src={codolioCardLink}
                alt="Lakshay Pahwa Codolio Card"
                style={{ width: "100%", maxWidth: 280, height: "auto", display: "block" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* DSA Profiles Grid */}
        <h3 style={{ fontSize: 22, color: "#00b4ff", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <Trophy color="#00b4ff" size={24} /> Competitive Programming Platforms
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {dsaProfiles.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: `0 0 20px ${p.color}33` }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${p.color}44`,
                borderRadius: 16,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {p.icon && (
                      <img
                        src={p.icon}
                        alt={p.name}
                        style={{ width: 36, height: 36, objectFit: "contain" }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    )}
                    <div>
                      <h4 style={{ fontSize: 18, color: "#fff", margin: 0 }}>{p.name}</h4>
                      <span style={{ fontSize: 13, color: "#aaa" }}>{p.username}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      background: `${p.color}22`,
                      color: p.color,
                      border: `1px solid ${p.color}44`,
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                <div style={{ fontSize: 15, fontWeight: 600, color: "#00ffc8", marginBottom: 8 }}>
                  {p.highlight}
                </div>

                <p style={{ fontSize: 13, color: "#bbb", lineHeight: 1.6, marginBottom: 20 }}>
                  {p.stats}
                </p>
              </div>

              <motion.a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: `${p.color}22`,
                  color: "#fff",
                  border: `1px solid ${p.color}55`,
                  padding: "8px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Visit {p.name} Profile <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
