const {Router} = require("express");
const {addStaff, getAllStaff, getAllStaffByHospital, deleteStaff, updateStaff, getStaffByid} = require("../../controllers/hospital/staff.controller");
const staffRoute = Router();

staffRoute.post('/add', addStaff)
staffRoute.get('/getall', getAllStaff)
staffRoute.get('/getbyhospital/:hospitalid', getAllStaffByHospital)
staffRoute.get('/getbyid/:id', getStaffByid)
staffRoute.post('/update/:id', updateStaff)
staffRoute.post('/delete', deleteStaff)

module.exports = {staffRoute};

// Add Staff: http://localhost:8080/patient/add