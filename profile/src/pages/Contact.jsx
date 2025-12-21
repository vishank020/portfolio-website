import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:singhvishank20@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="min-h-screen pt-28 px-4 flex justify-center"
    >
      <div className="w-full max-w-lg">
        <h2 className="text-4xl font-bold mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-8">
          Whether for an internship, a freelance project, or just to chat about AI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="glass-card p-8 flex flex-col gap-6"
          noValidate
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm text-gray-400 mb-1 block"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Cooper"
              className="w-full p-3 bg-grey-500/30 border border-gray-700 rounded text-white focus:border-[#16814f] outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm text-gray-400 mb-1 block"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ceara@example.com"
              className="w-full p-3 bg-grey-500/30 border border-gray-700 rounded text-white focus:border-[#16814f] outline-none transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-sm text-gray-400 mb-1 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hey Vishank, I have a project..."
              className="w-full p-3 bg-grey-500/30 border border-gray-700 rounded text-white focus:border-[#16814f] outline-none transition resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-2 py-3 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
