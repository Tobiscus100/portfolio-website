import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.type === "textarea" ? "message" : e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields");
    return;
  }

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
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch(() => {
      alert("Failed to send message. Try again.");
    });
};

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>

      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        <div style={styles.info}>
          <p><strong>Email:</strong> yourname@email.com</p>
          <p><strong>Location:</strong> Nigeria</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "30px",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  info: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Contact;