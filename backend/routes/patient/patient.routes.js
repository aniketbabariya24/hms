const {Router} = require("express");
const {addPatient, getAllPatient, getAllPatientByHospital, deletePatient, updatePatient, getPatientByid} = require("../../controllers/patient/patient.controller");
const patientRoute = Router();

patientRoute.post('/add', addPatient)
patientRoute.get('/getall', getAllPatient)
patientRoute.get('/getbyhospital/:hospitalid', getAllPatientByHospital)
patientRoute.get('/getbyid/:id', getPatientByid)
patientRoute.post('/update/:id', updatePatient)
patientRoute.post('/delete', deletePatient)

module.exports = {patientRoute};

// Add Patient: http://localhost:8080/patient/add