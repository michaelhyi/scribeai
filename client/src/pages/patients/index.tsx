import { useEffect, useState } from "react";
import Container from "../../components/Container";
import PatientHeader from "../../components/PatientHeader";
import PatientTable from "../../components/PatientTable";
import axios from "axios";
import qs from "query-string";

const Patients = () => {
  const [patients, setPatients] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div></div>
      <div className="px-4 pt-4">
        Patient Registrer
        <PatientHeader />
      </div>
      <PatientTable patients={patients} />
    </Container>
  );
};

export default Patients;
