const {Router} = require("express");
const {addPatient, getAllPatient, getAllPatientByHospital} = require("../../controllers/patient/patient.controller");
const patientroute = Router();

patientroute.post('/addpatient', addPatient)
patientroute.get('/allpatient', getAllPatient)
patientroute.post('/patientbyhospital', getAllPatientByHospital)


module.exports = {patientroute};