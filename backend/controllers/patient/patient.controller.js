const { pool } = require("../../config/db");
const { addPatientQuery, getAllPatientQuery, getAllPatientByHospitalQuery, updatePatientQuery, deletePatientQuery, getPatientByIdQuery } = require("../../queries/patient/patient.query");


const addPatient = async (req, res) => {
  try {
    const { patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospitalid } = req.body;

    await pool.promise().query(addPatientQuery, [patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospitalid]);

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

    res.json({ patients: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllPatientByHospital = async (req, res) => {
  try {
    const  hospitalid  = req.params.hospitalid
    const data = await pool.promise().query(getAllPatientByHospitalQuery, [hospitalid]);

    // Check if patient with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json({ patient: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPatientByid= async (req, res) => {
  try {
    const  id  = req.params.id
    const data = await pool.promise().query(getPatientByIdQuery, [id]);

    // Check if patient with the given ID exists
    if (data[0].length === 0) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json({ patient: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospitalid} = req.body;
const id = req.params.id
    await pool.promise().query(updatePatientQuery, [patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospitalid, id]);

    res.json({ message: "Patientid updated successfully" });
  } catch (error) {
    console.log(error);
  }


};

const deletePatient = async (req, res) => {
  try {
    const { idarray } = req.body;

    for(let i=0; i<=idarray.length-1; i++){
  await pool.promise().query(deletePatientQuery, [idarray[i]]);
    }

    res.json({ message: "Patientid added successfully" });
  } catch (error) {
    console.log(error);
  }


};

module.exports = { addPatient, getAllPatient, updatePatient, getAllPatientByHospital, deletePatient, getPatientByid };