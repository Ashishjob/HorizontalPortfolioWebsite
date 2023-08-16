"use client";
import { useState, useEffect } from "react";

function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        `https://getform.io/f/${process.env.NEXT_PUBLIC_GETFORM_URL}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (

      <div className="my-24">
      <h1 className="hover:text-lightgreen text-center text-4xl underline">
        contact.
      </h1>
      <div className="mt-12 items-center justify-center w-full">
              <form onSubmit={handleSubmit} className="mx-12">
                  <input name="_input" type="hidden" className="hidden" />
                  <div className="w-full">
                      <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="placeholder:text-md h-12 w-full rounded-lg pl-2 shadow-inner text-black"
                          placeholder="Name" />
                  </div>
                  <div className="mt-6 w-full">
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="placeholder:text-md h-12 w-full rounded-lg pl-2 shadow-inner text-black"
                          placeholder="Email" />
                  </div>
                  <div className="mt-6 w-full">
                      <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="h-40 w-full resize-y rounded-lg bg-white pl-2 pt-2 shadow-inner placeholder:text-lg text-black"
                          placeholder="Enter Your Message Here" />
                  </div>
                  <div className="flex justify-center">
                      <button
                          type="submit"
                          disabled={isLoading}
                          className={`bg-white text-black relative mt-6 w-1/2 rounded-full p-2 shadow-inner hover:shadow-2xl ${isLoading ? "flex items-center justify-center" : ""}`}
                      >
                          {isLoading ? (
                              <div className="flex h-12 w-10 items-center justify-center">
                                  <div className="border-black h-5 w-5 animate-spin rounded-full border-b-2 py-4"></div>
                              </div>
                          ) : (
                              "Submit!"
                          )}
                      </button>
                  </div>
                  {isSent && (
                      <p className="text-white mt-2 text-center font-semibold">
                          Message Sent!
                      </p>
                  )}
              </form>
          </div>
          </div>
  );
}

export default MobileContact;