import { useCallback, useState } from "react";
import Container from "../../components/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      mrn: "",
      name: "",
      dob: new Date(),
      sex: "",
    },
  });

  const handleClick: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      const token = localStorage.getItem("token");
      const { data: user } = await axios(
        process.env.NEXT_PUBLIC_API_URL + "/user/" + token
      );

      await axios
        .post(
          process.env.NEXT_PUBLIC_API_URL + "/patient",
          {
            name: data.name,
            mrn: data.mrn,
            userId: user.id,
            dob: data.dob,
            sex: data.sex,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => router.push("/patients/" + res.data));
    },
    [router]
  );

  return (
    <Container>
      <div className="px-4 py-4">
        <div className="bg-white p-8 font-bold text-xl rounded-xl shadow-sm">
          Add New Patient
        </div>
        <div className="bg-white mt-12 w-[768px] mx-auto p-12 rounded-xl shadow-md">
          <div className="flex  items-center">
            <div>Medical Record Number</div>
            <input
              className="absolute ml-64 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-3"
              id="mrn"
              {...register("mrn")}
            />
          </div>
          <div className="mt-8 flex items-center">
            <div>Name</div>
            <input
              className="absolute ml-64 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-3"
              id="name"
              {...register("name")}
            />
          </div>
          <div className="mt-8 flex items-center">
            <div>Date of Birth</div>
            <div className="absolute ml-64">
              <DatePicker
                className="border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-3"
                selected={watch("dob")}
                onChange={(date) => {
                  setValue("dob", date);
                }}
              />
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div>Sex</div>
            <div className="absolute ml-64 flex gap-4">
              <button
                className={`${
                  watch("sex") === "Male" ? "bg-blue-300" : "bg-gray-300"
                } text-white font-bold px-4 py-2 rounded-lg shadow-md`}
                onClick={() => setValue("sex", "Male")}
              >
                Male
              </button>
              <button
                className={`${
                  watch("sex") === "Female" ? "bg-pink-300" : "bg-gray-300"
                } text-white font-bold px-4 py-2 rounded-lg shadow-md`}
                onClick={() => setValue("sex", "Female")}
              >
                Female
              </button>
            </div>
          </div>
          <button
            onClick={(e) => handleSubmit(handleClick)(e)}
            className="bg-blue-300 text-white font-bold px-4 py-2 mt-12 rounded-lg shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Create;
