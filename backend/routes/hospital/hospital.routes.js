const {Router} = require("express");
const { addHospital } = require("../../controllers/hospital/hospital.controller");
const { addHospitalValidationRules } = require("../../security/validations/hospital.validation");

const hospitalRoute = Router();

hospitalRoute.post('/addhospital', addHospitalValidationRules ,addHospital)



module.exports = {hospitalRoute};