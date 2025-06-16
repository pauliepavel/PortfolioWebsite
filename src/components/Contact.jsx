import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // NEW

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email address.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const res = await fetch("https://formspree.io/f/xjkrrjpr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="bg-[#F3EDED] px-4 py-24">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Let’s get in touch</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent outline-none border-b border-dotted border-gray-400 focus:border-black transition-all py-2 placeholder-gray-500"
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent outline-none border-b border-dotted border-gray-400 focus:border-black transition-all py-2 placeholder-gray-500"
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent outline-none border-b border-dotted border-gray-400 focus:border-black transition-all py-2 placeholder-gray-500 resize-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`self-start flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-md transition-opacity ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700 hover:scale-105 hover:shadow-lg"
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 text-sm mt-2">Thank you! Your message has been sent.</p>
        )}

        <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar />
      </div>
    </section>
  );
};

export default Contact;
