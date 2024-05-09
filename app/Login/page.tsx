"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { navVariants } from "../../utils/motion";
import { useState } from "react";
// import Error from "./error";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    // setError(null);

    // Simulate API call (replace with actual API call)
    setTimeout(() => {
      
      // Add logic to handle form submission
      console.log("Form submitted:", formData);
    }, 2000); // Simulated API call delay of 2 seconds
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="sm:px-16 px-6 py-8 relative"
      >
        <div className="absolute w-[50%] inset-0 gradient-1" />
        <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
          <Image src="/Search.svg" alt="search" width="24" height="24" />
          <div className="flex gap-8 uppercase font-extrabold text-[24px] leading-[30px] text-white">
            <Link href="Register">
              <div>Get Started</div>
            </Link>
            <Link href="/">
              <div>About Us</div>
            </Link>
            <Link href="Login">
              <div>Login</div>
            </Link>
            <Link href="/">
              <div>Contact Us</div>
            </Link>
          </div>
          <Image src="/Menu.svg" alt="menu" width="24" height="24" />
        </div>
      </motion.nav>
      <section className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[570px] rounded-lg shadow-md p-10 text-center">
          <h3 className="text-headingColor text-3xl font-bold mb-10">
            Hello <span className="text-primaryColor">Welcome</span>{" "}
            <span className="">Back</span>
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
            </div>
            <div>
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Login
              </button>
            </div>
            <p className="text-textColor">
              Don&apos;t have an account
              <Link className="text-primaryColor font-semibold" href="/Register" passHref>
              Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
