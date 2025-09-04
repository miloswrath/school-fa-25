// Home.jsx
import { useEffect, useState } from "react";
import Header from "./Header";
import Side from "./Side";
import MainC from "./MainC";
import Footer from "./Footer";
import "./Home.css";

export default function Home() {
  const [humanDate, setHumanDate] = useState("");
  const [machineDate, setMachineDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setHumanDate(
      now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setMachineDate(now.toISOString().split("T")[0]);
  }, []);

  return (
    <div className="pageRoot">
      <Header humanDate={humanDate} machineDate={machineDate} />
      <div className="row">
        <Side />
        <MainC humanDate={humanDate} machineDate={machineDate} />
      </div>
      <Footer />
    </div>
  );
}
