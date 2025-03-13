"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          to: process.env.NEXT_PUBLIC_EMAIL_USER,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (error) {
      setErrorMessage(
        (error as Error).message || "Failed to send message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const SocialLink = [
    {
      platform: "GitHub",
      link: "https://github.com/AdityaZxxx",
      logo: <Github />,
    },
    {
      platform: "X",
      link: "https://x.com/adxxya30",
      logo: <Twitter />,
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/adxxya30",
      logo: <Instagram />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 inline-block neo-brutalist-box py-2 px-4"
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neo-brutalist-box-accent2 p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-6">
              Have a project in mind or just want to say hello? Feel free to
              contact me through this form or via the contact information
              provided.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Email:</p>
                <p>adityaofficial714@gmail.com</p>
              </div>
              <div>
                <p className="font-bold">Location:</p>
                <p>Kediri, ID</p>
              </div>
              <div className="pt-4">
                <div className="flex space-x-4">
                  <h2>Social Links</h2>
                  <div className="flex justify-center gap-4 text-sm">
                    {SocialLink.map((social) => (
                      <a
                        key={social.platform}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white dark:bg-black text-black dark:text-white font-bold border-4 border-black dark:border-white transform hover:rotate-3 transition-transform"
                      >
                        {social.logo}
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="neo-brutalist-box-secondary p-6"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" name="honeypot" style={{ display: "none" }} />
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  className="w-full p-3 neo-brutalist-box-accent1"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  id="email"
                  className="w-full p-3 neo-brutalist-box-accent2"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={4}
                  className="w-full p-3 neo-brutalist-box-accent1"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              {errorMessage && (
                <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="mt-2 text-sm text-green-500">{successMessage}</p>
              )}
              <button
                type="submit"
                className="neo-button px-6 py-3 mt-4 cursor-pointer"
                style={{ backgroundColor: "#6a5acd" }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
