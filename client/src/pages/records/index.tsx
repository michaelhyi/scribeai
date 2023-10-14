import RecordsHeader from "@/components/RecordsHeader";
import Container from "../../components/Container";
import RecordTable from "@/components/RecordTable";
import axios from "axios";
import qs from "query-string";
import { useEffect, useState } from "react";

const Records = () => {
  const [records, setRecords] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios(process.env.NEXT_PUBLIC_API_URL + "/user/" + token)
      .then(async (res) => {
        const user = await res.data;
        await axios(
          process.env.NEXT_PUBLIC_API_URL +
            "/record/userId/" +
             user!.id,
          { headers: { Authorization: "Bearer " + token } }
        ).then((res) => setRecords(res.data));
      })
      .finally(() => setLoading(false));  }, []);

    if (loading) return <></>
    
  return (
    <Container>
      <div className="px-4 pt-4">
        Records
        <RecordsHeader />
        <RecordTable records = {records}/>
      </div>
      
    </Container>
  );
};

export default Records;
