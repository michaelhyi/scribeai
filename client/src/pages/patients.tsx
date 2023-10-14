import Container from "../components/Container";
import PatientHeader from "../components/PatientHeader";

const Patients = () => {
  return (
    <Container>
      <div>
        <PatientTable />
      </div>
      <div className="px-4 pt-4">
        Patient Registrer
        <PatientHeader />
      </div>
    </Container>
  );
};

export default Patients;
