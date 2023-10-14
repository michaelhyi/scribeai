import Container from "../../components/Container";
import PatientHeader from "../../components/PatientHeader";
import PatientTable from "../../components/PatientTable";

const Patients = () => {
  return (
    <Container>
      <div></div>
      <div className="px-4 pt-4">
        Patient Registrer
        <PatientHeader />
      </div>
      <PatientTable />
    </Container>
  );
};

export default Patients;
