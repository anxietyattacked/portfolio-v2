import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleOnSubmit(e) {
    if (name === "") {
      setNameError(true);
      return;
    } else if (email === "") {
      setEmailError(true);
      return;
    } else if (message === "") {
      setMessageError(true);
      return;
    }
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      }
    });
  }

  return (
    <section id="contact" className="bg-[#2A343D] px-16 lg:px-36  py-8">
      <h1 className="text-white font-bold text-4xl mb-8">Contact</h1>
      {submitted ? (
        <h1 className="text-center text-green-500 text-xl font-varela font-bold">
          Message Sent
        </h1>
      ) : null}
      <h2 className="text-white">
        <strong>Email</strong>
      </h2>
      <p className="text-white">michaelbergerson@gmail.com</p>
      <form onSubmit={handleOnSubmit} className="flex flex-col mt-8">
        <div className="flex flex-col">
          {nameError ? (
            <p className="font-roboto text-red-500">Name Required</p>
          ) : null}
          <label className="font-roboto text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col">
          {emailError ? (
            <p className="font-roboto text-red-500">Email Required</p>
          ) : null}
          <label className="font-roboto text-white" htmlFor="email">
            Email
          </label>
          <input
            className="mb-8"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col">
          {messageError ? (
            <p className="font-roboto text-red-500">Message Required</p>
          ) : null}
          <label className="font-roboto text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className=""
            name="message"
            id=""
            cols="20"
            rows="10"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 bg-[#F02B2B] font-bold text-white  text-xl md:text-2xl w-full md:w-1/2"
            aria-label="send message"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
