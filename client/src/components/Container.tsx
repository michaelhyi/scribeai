import { format } from "date-fns";
import Sidebar from "./Sidebar";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { useEffect, useState } from "react";
//import axios from "axios";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(null);
  /*
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios(process.env.NEXT_PUBLIC_API_URL + "/user/" + token)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <></>;
  */
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col bg-[#F9F9F9] m-0 h-screen w-full overflow-hidden ml-60">
        <div className="flex items-center h-24 bg-white border-b-[1.5px] border-b-neutral-100">
          <input className="ml-16 border-[1.5px] border-b-neutral-200 h-10 w-[512px] rounded-lg" />
          <div className="flex flex-col text-sm text-right ml-24">
            <div>{"John" + " " + "Doe"}</div>
            <div className="font-bold">Radiologist</div>
          </div>
          <div className="text-xs border-b-neutral-100 border-[1px] p-4 rounded-lg ml-16">
            {format(new Date(), "PPP")}
          </div>
          <div className="ml-20" />
          <AiOutlineMail color="#a3a3a3" size={20} />
          <div className="ml-8" />
          <AiOutlineBell color="#a3a3a3" size={20} />
          <div className="ml-8" />
          <TbLogout color="#a3a3a3" size={20} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Container;
