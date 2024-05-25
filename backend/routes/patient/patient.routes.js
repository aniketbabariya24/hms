const {Router} = require("express");
const {addPatient, getAllPatient, getAllPatientByHospital, deletePatient, updatePatient, getPatientByid} = require("../../controllers/patient/patient.controller");
const patientroute = Router();

patientroute.post('/add', addPatient)
patientroute.get('/getall', getAllPatient)
patientroute.get('/getbyhospital/:hospitalid', getAllPatientByHospital)
patientroute.get('/getbyid/:id', getPatientByid)
patientroute.post('/update/:id', updatePatient)
patientroute.post('/delete', deletePatient)

module.exports = {patientroute};

// Add Patient: http://localhost:8080/patient/add