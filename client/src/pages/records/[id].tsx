import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Container from "../../components/Container";
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import qs from "query-string";

const View = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { register, setValue, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      data: "",
    },
  });

  const handleEdit: SubmitHandler<FieldValues> = useCallback(
    async (formData) => {
      const token = await localStorage.getItem("token");

      await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/record/" + router.query.id,
        formData,
        { headers: { Authorization: "Bearer " + token } }
      );
    },
    [router.query.id]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (router.query.id)
      axios(process.env.NEXT_PUBLIC_API_URL + "/record/" + router.query.id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(async (res) => {
          setData(res.data);
          setValue("data", res.data.data);

          await axios(
            process.env.NEXT_PUBLIC_API_URL + "/patient/" + res.data.patientId,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          ).then((res) => setPatientData(res.data));
        })
        .finally(() => setLoading(false));
  }, [router.query.id]);

  if (loading) return <></>;

  return (
    <Container>
      <div className="px-4 pt-4">
        <div className="flex justify-between bg-white p-8 px-16 font-bold text-xl rounded-xl shadow-sm">
          <div className="flex gap-8">
            <Image
              src="/placeholder.jpg"
              width={150}
              height={100}
              className="rounded-full"
              alt="pfp"
            />
            <div>
              <div className="text-3xl font-bold">{patientData.name}</div>
              <div className="text-base text-neutral-400 mt-4">
                MRN: #{patientData.mrn}
              </div>
              <div className="text-base text-neutral-400">
                DOB: {format(new Date(patientData.dob), "Pp")}
              </div>
              <div className="text-base text-neutral-400">
                Sex: {patientData.sex}
              </div>
            </div>
          </div>
          <div className="font-normal text-base">
            <button className="border-[1px] border-neutral-200 px-4 py-2 rounded-md shadow-sm duration-500 hover:opacity-50">
              Edit
            </button>
            <button className="ml-2 border-[1px] border-neutral-200 px-4 py-2 rounded-md shadow-sm duration-500 hover:opacity-50">
              Delete
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-6 bg-white p-8 px-16 rounded-xl shadow-sm">
          <div className="ml-auto mb-6">
            <div className="font-normal text-base">
              <button className="ml-2 border-[1px] border-neutral-200 px-4 py-2 rounded-md shadow-sm duration-500 hover:opacity-50">
                Delete
              </button>
            </div>
          </div>
          <textarea
            defaultValue={data.data}
            id="data"
            {...register("data")}
            className="mt-2 border-[1.5px] border-b-neutral-200 h-96 rounded-lg p-4"
          />
          <button
            onClick={(e) => handleSubmit(handleEdit)(e)}
            className="bg-blue-300 py-3 text-white font-bold rounded-xl shadow-md duration-500 hover:opacity-50 w-48 mt-12"
          >
            Save
          </button>
        </div>
      </div>
    </Container>
  );
};

export default View;
