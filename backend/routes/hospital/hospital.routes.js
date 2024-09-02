const {Router} = require("express");
const { addHospital, updateHospital } = require("../../controllers/hospital/hospital.controller");
const { addHospitalValidationRules } = require("../../security/validations/hospital.validation");

const hospitalRoute = Router();

hospitalRoute.post('/addhospital', addHospital)
hospitalRoute.post('/updateospital', updateHospital)




module.exports = {hospitalRoute};