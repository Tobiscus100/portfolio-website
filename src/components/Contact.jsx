import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    emailjs
      .send(
        "service_ogd42e2",
        "template_r21xsnj",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "2_sBNeok2kd1F8i-S"
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Thank you! Your message was sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again or email directly.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>Get In Touch</span>
          <h2 style={styles.heading}>Let's Build Something Together</h2>
          <p style={styles.subtitle}>
            Have a project in mind, looking to hire, or just want to connect? Send me a message below.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Form */}
          <form style={styles.form} onSubmit={handleSubmit}>
            {status.message && (
              <div
                style={{
                  ...styles.statusMessage,
                  backgroundColor: status.type === "success" ? "#ecfdf5" : "#fef2f2",
                  color: status.type === "success" ? "#065f46" : "#991b1b",
                  border: `1px solid ${status.type === "success" ? "#a7f3d0" : "#fecaca"}`,
                }}
              >
                {status.message}
              </div>
            )}

            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your full name"
                style={styles.input}
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                style={styles.input}
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or inquiry..."
                rows="5"
                style={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info Card */}
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Contact Details</h3>
            <p style={styles.infoText}>
              I'm actively open to full-time roles, freelance contracts, and software engineering collaborations.
            </p>

            <div style={styles.contactItem}>
              <span style={styles.contactLabel}>Location</span>
              <span style={styles.contactValue}>Lagos, Nigeria (Remote Worldwide)</span>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactLabel}>Focus</span>
              <span style={styles.contactValue}>Full-Stack Web (React & Django)</span>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactLabel}>Response Time</span>
              <span style={styles.contactValue}>Within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "clamp(3.5rem, 7vw, 6rem) 1.25rem",
    backgroundColor: "#ffffff",
    scrollMarginTop: "5rem",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  badge: {
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#0284c7",
    display: "inline-block",
    marginBottom: "0.5rem",
  },
  heading: {
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
    fontWeight: "800",
    color: "#0f172a",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#64748b",
    marginTop: "0.75rem",
    maxWidth: "540px",
    marginInline: "auto",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2.5rem",
    alignItems: "start",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    backgroundColor: "#f8fafc",
    padding: "2rem",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
  },
  statusMessage: {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    lineHeight: 1.4,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    padding: "0.75rem 1rem",
    fontSize: "0.95rem",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    outline: "none",
    backgroundColor: "#ffffff",
    transition: "border-color 0.2s ease",
  },
  textarea: {
    padding: "0.75rem 1rem",
    fontSize: "0.95rem",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    outline: "none",
    backgroundColor: "#ffffff",
    resize: "vertical",
    minHeight: "120px",
    fontFamily: "inherit",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.85rem 1.5rem",
    fontSize: "0.95rem",
    fontWeight: "600",
    backgroundColor: "#0284c7",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    transition: "background-color 0.2s ease",
  },
  infoCard: {
    padding: "2rem",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  infoTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    margin: 0,
    color: "#f8fafc",
  },
  infoText: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    lineHeight: 1.6,
    margin: 0,
  },
  contactItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    borderTop: "1px solid #334155",
    paddingTop: "1rem",
  },
  contactLabel: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#64748b",
    fontWeight: "600",
  },
  contactValue: {
    fontSize: "0.95rem",
    color: "#f1f5f9",
    fontWeight: "500",
  },
};

export default Contact;