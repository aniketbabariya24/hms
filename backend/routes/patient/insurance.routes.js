const {Router} = require("express");
const {addInsurance, getAllInsurance, getInsuranceByPatient, deleteInsurance, updateInsurance, getInsuranceByid} = require("../../controllers/patient/insurance.controller");
const insuranceRoute = Router();

insuranceRoute.post('/add', addInsurance)
insuranceRoute.get('/getall', getAllInsurance)
insuranceRoute.get('/getbypatient/:patientid', getInsuranceByPatient)
insuranceRoute.get('/getbyid/:id', getInsuranceByid)
insuranceRoute.post('/update/:id', updateInsurance)
insuranceRoute.post('/delete', deleteInsurance)

module.exports = {insuranceRoute};

// Add Insurance: http://localhost:8080/insurance/add

// Update Insurance: http://localhost:8080/insurance/update/:id

// Delete Insurance: http://localhost:8080/insurance/delete

// Get Insurance By ID: http://localhost:8080/insurance/getbyid/:id

// Get Insurance By Patient ID: http://localhost:8080/insurance/getbypatient/:patientid 
