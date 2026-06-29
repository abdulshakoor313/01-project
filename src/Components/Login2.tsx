import { useState } from "react";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMessage("❌ Email is required");
      return;
    }

    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email");
      return;
    }

    setMessage("✅ Login Successful");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md mx-auto bg-sky-100 p-6 rounded-2xl shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center">Welcome</h2>

        <input
          className="w-full border border-gray-300 p-3 rounded-lg"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage(""); // User لکڻ شروع ڪري ته پراڻو Message لڪي وڃي
          }}
        />

        <button
          className="w-full bg-sky-500 text-white py-3 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center font-bold ${
            message.startsWith("✅")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Login2;