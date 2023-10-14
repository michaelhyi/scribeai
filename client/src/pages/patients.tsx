import Container from "../components/Container";
import PatientHeader from "../components/PatientHeader";
import PatientTable from "../components/PatientTable";
import React from "react";

const Patients = () => {
  return (
    <Container>
      <div className="px-4 pt-4">
        Patient Registrer
        <PatientHeader />
      </div>
      <div>
        <PatientTable />
      </div>
    </Container>
  );
};

export default Patients;
