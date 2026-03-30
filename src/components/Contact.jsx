import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, internships, or opportunities.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;