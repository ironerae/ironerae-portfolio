"use client";

import { useReCaptcha } from "next-recaptcha-v3";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { toast } from "react-toastify";

interface FormData {
  nickname: string;
  message: string;
}

const config: Config = {
  dictionaries: [names],
};

export default function SendForm() {
  const { executeRecaptcha } = useReCaptcha();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const token = await executeRecaptcha("form_submit");

    try {
      const response = await fetch("/api/send-note", {
        method: "POST",
        body: JSON.stringify({ ...data, token }),
      });

      if (response.ok) {
        reset();
        toast.success("Note sent successfully!");
      }
    } catch (error) {
      console.error("Error sending note:", error);
      toast.error("Failed to send the note. Please try again later.");
    }
  };

  const handleSelectName = () => {
    const randomName: string = uniqueNamesGenerator(config);

    setValue("nickname", randomName);
  };

  return (
    <form
      className="w-full flex flex-col items-center mt-8 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="fieldset w-96">
        <legend className="fieldset-legend">Nickname</legend>
        <div className="relative">
          <input
            type="text"
            className="input w-full"
            placeholder="Type your nickname here"
            {...register("nickname")}
          />
          <GiPerspectiveDiceSixFacesRandom
            onClick={handleSelectName}
            className="absolute right-2 top-2 bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"
            size={24}
          />
        </div>
        <p className="label">Optional</p>
      </fieldset>
      <fieldset className="fieldset w-96">
        <legend className="fieldset-legend">Message</legend>
        <textarea
          className="textarea h-24 w-full"
          placeholder="Type your anonymous message here"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 5,
              message: "Message must be at least 5 characters long",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message.message}</p>
        )}
      </fieldset>
      <button
        className="btn btn-neutral mt-4 rounded-xl px-8"
        disabled={isSubmitting}
      >
        Send Note
      </button>
    </form>
  );
}
