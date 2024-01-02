const {pool} = require("../../config/db");
const {addPatientQuery, getAllPatientQuery, getAllPatientByHospitalQuery} = require("../../queries/patient/patient.query");


const addPatient = async (req, res) => {
    try {
        const { patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospital } = req.body;
      
        await pool.promise().query(addPatientQuery, [patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospital]);
      
        res.json({ message: "Patientid added successfully" });
      } catch (error) {
        console.log(error);
      }
      

};

const getAllPatient = async (req, res) => {
    try {
    
      const data = await pool.promise().query(getAllPatientQuery);
  
      // Check if patient with the given ID exists
      if (data.length === 0) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      res.json({ patients: data[0] , dataCount: data[0].length});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const getAllPatientByHospital = async (req, res) => {
    try {
    const {hospital} = req.body
      const data = await pool.promise().query(getAllPatientByHospitalQuery, [hospital]);
  
      // Check if patient with the given ID exists
      if (data.length === 0) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      res.json({ patient: data[0] , dataCount: data[0].length});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

module.exports = {addPatient, getAllPatient, getAllPatientByHospital};