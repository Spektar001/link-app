"use client";

import { grabUsername } from "@/actions/grabUsername";
import { redirect } from "next/navigation";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import UsernameFormResult from "../formResults/UsernameFormResult";
import RightIcon from "../icons/RightIcon";

type UsernameFormProps = {
  desiredUsername: string;
};

const UsernameForm = ({ desiredUsername }: UsernameFormProps) => {
  const [taken, setTaken] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const result = await grabUsername(formData);
    setTaken(result === false);
    if (result) {
      redirect("/account?created=" + formData.get("username"));
    }
  };

  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-6">
        Grab your username
      </h1>
      <p className="text-center mb-2 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          defaultValue={desiredUsername}
          className="block p-2 mx-auto border w-full mb-2 text-center"
          type="text"
          placeholder="username"
        />
        {taken && <UsernameFormResult />}
        <SubmitButton>
          <span>Claim your username</span>
          <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
};

export default UsernameForm;
