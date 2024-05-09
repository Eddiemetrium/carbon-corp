"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Image from "next/image";
import GetInTouch from "../public/Get in touch-amico.png";
import TitleText from "../components/TitleText";

interface FormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData, e: React.BaseSyntheticEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      null;
    }
    // Simulate form submission
    console.log("Form data:", data);
  };

  return (
    <section id="contact" className="py-10 px-10">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <TitleText title={<>Contact Us</>} textStyles="text-center" />

          <div className="flex md:justify-end my-5"></div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-start gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center items-center"
        >
          <Image className="w-3/4" src={GetInTouch} alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0 "
        >
          <form
            target="_blank"
            action="https://formsubmit.co/5fcff513f13c7c3157dc8b88be03b41c"
            method="POST"
          >
            <div>
              <input
                className="w-3/4 bg-white font-semibold text-black p-3 contact-input"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="text-red mt-1 contact-input">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                style={{ marginTop: "1rem" }}
                className="w-3/4 bg-white font-semibold text-black p-3 contact-input "
                type="text"
                placeholder="SUBJECT"
                {...register("subject", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.email && (
                <p className="text-black mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <input
                className="w-3/4 bg-white font-semibold text-black p-3 mt-5 contact-input"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-black mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-w-3/4 bg-white font-semibold text-black p-3 mt-5 contact-input"
                placeholder="MESSAGE"
                rows={5}
                cols={49}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
            </div>
            <button
              className="flex bg-sky-700 font-normal text-[16px] text-white justify-center items-center w-[100px] h-[50px] rounded-[24px] "
              type="submit"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
