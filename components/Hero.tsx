"use client";

import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { useState } from "react";
import MyFooter from "./MyFooter";

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Email Format
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!isValidEmail(formData.email)) {
      setStatus("❌ Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <ModalTrigger className="bg-blue-500 dark:bg-blue-500 px-4 py-2 rounded-lg text-white">
        Contact Me
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h2 className="text-2xl font-semibold text-center mb-4 dark:text-white">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:text-white"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:text-white"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-lg text-white transition-transform ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 dark:bg-blue-600 hover:scale-105"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <p className="text-center text-sm text-white" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

const Hero = () => {
  const words = [
    { text: "hey," },
    { text: "i'm" },
    { text: "abhi", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div>
      <AuroraBackground>
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center">
            <img
              src="/abhigrad2.jpeg"
              alt="Abhi"
              className="h-3/4 w-auto rounded-lg"
            />
          </div>
          <div className="relative flex flex-col gap-4 justify-center px-4">
            <div className="w-[200px] md:w-[300px]">
              <TypewriterEffect words={words} />
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-3">
              <ul>
                <li>purdue graduate</li>
                <li>software engineer</li>
                <li>musician</li>
              </ul>
            </div>
            <ContactModal />
            <div className="flex flex-row w-full justify-around">
              <a
                href="https://github.com/abhishekaddagatla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-8 w-8 text-black dark:text-white hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/abhishekaddagatla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 text-black dark:text-white hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:abhi.add0503@gmail.com">
                <Mail className="h-8 w-8 text-black dark:text-white hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <MyFooter />
      </AuroraBackground>
    </div>
  );
};

export default Hero;
