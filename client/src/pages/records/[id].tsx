import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../../components/Container";

const medicalForm = {
  "Blood Type": "A+",
  "Primary Care Physician": "Dr. Smith",
  "Emergency Contact": "Bob Johnson",
  "Emergency Contact Phone": "555-123-4567",
  "Insurance Provider": "XYZ Health Insurance",
  "Insurance Policy Number": "123456789",
  Allergies: "None",
  "Current Medications": "Aspirin, 81mg, once daily",
  "Medical History": "Hypertension, Asthma",
  Surgeries: "Appendectomy (2010)",
  "Family Medical History": "No significant family history",
  "Recent Procedures": "Colonoscopy (2022-11-15), Mammogram (2023-04-10)",
  "Next Appointment": "2024-01-15 with Dr. Smith for a check-up",
  Notes: "Patient is in good health and compliant with medication.",
};

const View = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);

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
              <button className="border-[1px] border-neutral-200 px-4 py-2 rounded-md shadow-sm duration-500 hover:opacity-50">
                Edit
              </button>
              <button className="ml-2 border-[1px] border-neutral-200 px-4 py-2 rounded-md shadow-sm duration-500 hover:opacity-50">
                Delete
              </button>
            </div>
          </div>
          {Object.keys(medicalForm).map((v) => (
            <div key={v} className="flex justify-between mt-2">
              <div className="font-bold">{v}</div>
              <div className="">{medicalForm[v]}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default View;
