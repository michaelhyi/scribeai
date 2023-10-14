import axios from "axios";
import qs from "query-string";
import { useCallback, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Container from "../../components/Container";
import Dropzone from "../../components/Dropzone";

const Create = () => {
  const [patients, setPatients] = useState(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      mrn: "",
      name: "",
      dob: new Date(),
      sex: "",
    },
  });

  const handleClick: SubmitHandler<FieldValues> = useCallback(async (data) => {
    const token = localStorage.getItem("token");
    const { data: user } = await axios(
      process.env.NEXT_PUBLIC_API_URL + "/user/" + token
    );

    await axios.post(
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
    );
  }, []);

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
        <div className="bg-white mt-12 w-[768px] mx-auto p-12 rounded-xl shadow-md">
          <div className="flex  items-center">
            <div>Patient</div>
            <select className="absolute ml-64 border-[1.5px] border-b-neutral-200 h-10 w-64 rounded-lg px-2">
              {patients.map((v) => (
                <option key={v}>{v.name}</option>
              ))}
            </select>
          </div>
          <div className="mt-12" />
          <Dropzone />
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
