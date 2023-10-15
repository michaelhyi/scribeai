import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleRegister: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      await axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/auth/register", data)
        .then((res) => localStorage.setItem("token", res.data))
        .finally(() => router.push("/"));
    },
    []
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col">
        <div className="mt-6 text-neutral-600 font-medium text-xs">
          FIRST NAME
        </div>
        <input
          className="mt-2 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-2"
          id="firstName"
          {...register("firstName")}
        />
        <div className="mt-6 text-neutral-600 font-medium text-xs">
          LAST NAME
        </div>
        <input
          className="mt-2 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-2"
          id="lastName"
          {...register("lastName")}
        />
        <div className="mt-6 text-neutral-600 font-medium text-xs">EMAIL</div>
        <input
          className="mt-2 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-2"
          id="email"
          {...register("email")}
        />
        <div className="mt-6 text-neutral-600 font-medium text-xs">
          PASSWORD
        </div>
        <input
          className="mt-2 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-2"
          id="password"
          type="password"
          {...register("password")}
        />
        <button
          onClick={(e) => handleSubmit(handleRegister)(e)}
          className="mt-8 bg-blue-300 py-3 text-white font-bold rounded-xl shadow-md duration-500 hover:opacity-50"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
