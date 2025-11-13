"use client";

import { motion } from "motion/react";

const expand = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

export default function Contact() {
  return (
    <div className="flex gap-16 flex-wrap mt-32" id="contact">
      <div className="w-96">
        <h1 className="font-bold text-3xl">Contact Me</h1>
        <p className="mt-4">
          If you'd like to get in touch, feel free to reach out for
          collaborations or just a friendly hello!
        </p>
      </div>
      <form
        className="flex flex-col flex-1"
        action="https://formsubmit.co/ironerae@gmail.com"
        method="POST"
      >
        <legend className="fieldset-legend">Name:</legend>
        <motion.input
          type="text"
          required
          className="input w-full"
          name="name"
          placeholder="Type your name here"
          variants={expand}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        />

        <legend className="fieldset-legend">Email:</legend>
        <motion.input
          type="email"
          name="email"
          required
          className="input w-full"
          placeholder="Type your email here"
          variants={expand}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        />

        <legend className="fieldset-legend">Message</legend>
        <motion.textarea
          name="message"
          required
          minLength={50}
          className="textarea h-24 w-full"
          placeholder="Type your message here"
          variants={expand}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        />

        <motion.button
          type="submit"
          className="btn mt-6 btn-neutral border-2 border-secondary rounded-xl"
          variants={expand}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          Send
        </motion.button>
      </form>
    </div>
  );
}
