const {Router} = require("express");
const { addHospital, updateHospital, getAllHospitals, deleteHospital } = require("../../controllers/hospital/hospital.controller");
const { addHospitalValidationRules } = require("../../security/validations/hospital.validation");

const hospitalRoute = Router();

hospitalRoute.post('/addhospital', addHospital)
hospitalRoute.post('/updatehospital/:id', updateHospital)
hospitalRoute.post('/gethospital', getAllHospitals)
hospitalRoute.post('/deletehospital', deleteHospital)






module.exports = {hospitalRoute};