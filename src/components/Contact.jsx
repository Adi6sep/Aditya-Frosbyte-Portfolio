import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_92k3p6j",
        "template_u3caopb",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Aditya",
          to_email: "adityakhandagale87@gmail.com",
          message: form.message,
        },
        "VlQLMPT-GjgWlCex-"
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong!");
      });
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="text-secondary text-lg font-bold uppercase tracking-wider">Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Earth */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[600px] md:h-[550px] h-[400px] w-full"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-16 w-full rounded-3xl bg-tertiary px-6 py-14 md:px-16 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Great Together
          </h3>
          <p className="text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
            Open for internships, software development opportunities and exciting collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:adityakhandagale87@gmail.com" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              📧 Email Me
            </a>
            <a href="tel:+918799826319" className="bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-gray-600 hover:bg-white/20 transition-colors">
              📱 Call Me
            </a>
            <a href="https://github.com/Adi6sep" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-gray-600 hover:bg-white/20 transition-colors">
              🐙 GitHub
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-gray-600 hover:bg-white/20 transition-colors">
              💼 LinkedIn
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-secondary text-sm">Thank you for visiting my portfolio ❤️</p>
            <p className="text-gray-500 text-xs mt-2">© 2026 Aditya Khandagale — Made by Aditya</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
