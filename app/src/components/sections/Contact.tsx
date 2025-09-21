import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    setLoading(true);

    try {
      const serviceId = "service_u23mlwz";
      const templateId = "template_wq93t2l";
      const publicKey = "N9a8-U-4k9DH2A4Sv";

      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
        },
        publicKey
      );

      if (res.status === 200) {
        toast.success("Message sent!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("EmailJS submission failed");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 py-24 transition-colors"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-10">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">
          Let’s get in touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Your name"
            className="bg-transparent outline-none border-b border-dotted 
                       border-gray-400 dark:border-gray-600 
                       focus:border-black dark:focus:border-white 
                       transition-all py-2 placeholder-gray-500 
                       dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Your email"
            className="bg-transparent outline-none border-b border-dotted 
                       border-gray-400 dark:border-gray-600 
                       focus:border-black dark:focus:border-white 
                       transition-all py-2 placeholder-gray-500 
                       dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            aria-label="Your message"
            className="bg-transparent outline-none border-b border-dotted 
                       border-gray-400 dark:border-gray-600 
                       focus:border-black dark:focus:border-white 
                       transition-all py-2 placeholder-gray-500 
                       dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 resize-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`self-start flex items-center gap-2 
                        bg-purple-600 text-white px-6 py-2 rounded-md 
                        transition-all duration-300
                        ${loading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-purple-700 hover:scale-105 hover:shadow-lg"
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
          <p
            className="text-green-600 dark:text-green-400 text-sm mt-2"
            role="alert"
          >
            Thank you! Your message has been sent.
          </p>
        )}

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          theme="dark"
        />
      </div>
    </section>
  );
};

export default Contact;
