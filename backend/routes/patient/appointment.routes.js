const {Router} = require("express");
const {addAppointment, getAllAppointment, getAppointmentByPatient, getAppointmentByHospital, deleteAppointment, updateAppointment, getAppointmentByid} = require("../../controllers/patient/appointment.controller");
const appointmentRoute = Router();

appointmentRoute.post('/add', addAppointment)
appointmentRoute.get('/getall', getAllAppointment)
appointmentRoute.get('/getbypatient/:patientid', getAppointmentByPatient)
appointmentRoute.get('/getbyhospital/:hospitalid', getAppointmentByHospital)
appointmentRoute.get('/getbyid/:id', getAppointmentByid)
appointmentRoute.post('/update/:id', updateAppointment)
appointmentRoute.post('/delete', deleteAppointment)

module.exports = {appointmentRoute};

// Add Appointment: http://localhost:8080/appointment/add

// Update Appointment: http://localhost:8080/appointment/update/:id

// Delete Appointment: http://localhost:8080/appointment/delete

// Get Appointment By ID: http://localhost:8080/appointment/getbyid/:id

// Get Appointment By Patient ID: http://localhost:8080/appointment/getbypatient/:patientid 