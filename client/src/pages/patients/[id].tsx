import Image from "next/image";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { format } from "date-fns";
import RecordsHeader from "../../components/RecordsHeader";
import qs from "query-string";
import RecordTable from "../../components/RecordTable";

const View = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [records, setRecords] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (router.query.id)
      axios(process.env.NEXT_PUBLIC_API_URL + "/patient/" + router.query.id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(async (res) => {
          setData(res.data);
          await axios(
            process.env.NEXT_PUBLIC_API_URL +
              "/record?" +
              qs.stringify({
                patientId: res.data.id,
              }),
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          ).then((res) => setRecords(res.data));
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
              <div className="text-3xl font-bold">{data.name}</div>
              <div className="text-base text-neutral-400 mt-4">
                MRN: #{data.mrn}
              </div>
              <div className="text-base text-neutral-400">
                DOB: {format(new Date(data.dob), "Pp")}
              </div>
              <div className="text-base text-neutral-400">Sex: {data.sex}</div>
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
        <RecordsHeader />
      </div>
      <RecordTable records={records} />
    </Container>
  );
};

export default View;
