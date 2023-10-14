import axios from "axios";
import qs from "query-string";
import { useCallback, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Container from "../../components/Container";
import Dropzone from "../../components/Dropzone";
import { analyze } from "../../utils/ai";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [patients, setPatients] = useState(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      patientId: null,
      file: null,
    },
  });

  const handleClick: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      console.log(data);
      setSubmitting(true);
      const token = localStorage.getItem("token");
      const { data: user } = await axios(
        process.env.NEXT_PUBLIC_API_URL + "/user/" + token
      );

      const result = await analyze(data.file);

      await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/record",
        {
          data: result,
          userId: user.id,
          patientId: data.patientId,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      router.push("/records");
    },
    [router]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios(process.env.NEXT_PUBLIC_API_URL + "/user/" + token)
      .then(async (res) => {
        const user = await res.data;
        await axios(
          process.env.NEXT_PUBLIC_API_URL +
            "/patient?" +
            qs.stringify({
              userId: user!.id,
            }),
          { headers: { Authorization: "Bearer " + token } }
        ).then((res) => setPatients(res.data));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <></>;

  return (
    <Container>
      <div className="px-4 py-4">
        <div className="bg-white p-8 font-bold text-xl rounded-xl shadow-sm">
          Add New Record
        </div>
        {!submitting && (
          <div className="bg-white mt-12 w-[768px] mx-auto p-12 rounded-xl shadow-md">
            <div className="flex items-center">
              <div>Patient</div>
              <select
                value={null}
                onChange={(e) => {
                  e.preventDefault();
                  setValue("patientId", e.target.value);
                }}
                className="absolute ml-64 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-2"
              >
                <option>Select</option>
                {patients.map((v) => (
                  <option key={v} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-12" />
            <Dropzone setValue={setValue} />
            <button
              onClick={(e) => handleSubmit(handleClick)(e)}
              className="bg-blue-300 text-white font-bold px-4 py-2 mt-12 rounded-lg shadow-md"
            >
              Submit
            </button>
          </div>
        )}
        {submitting && (
          <div className="bg-white mt-12 w-[768px] mx-auto p-12 rounded-xl shadow-md flex flex-col items-center justify-center">
            <Spinner size="md" />
            <div className="mt-6">
              Please be patient. This may take a few minutes.
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Create;
