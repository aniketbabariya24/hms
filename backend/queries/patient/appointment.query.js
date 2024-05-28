const getAllAppointmentQuery = `SELECT * FROM appointment ORDER BY id DESC`;

const getAppointmentByIdQuery = 'SELECT * FROM appointment WHERE id = ?';

const getAppointmentByPatientQuery = 'SELECT * FROM appointment WHERE patientid = ?';

const getAppointmentByHospitalQuery = 'SELECT * FROM appointment WHERE hospitalid = ?';



const deleteAppointmentQuery = 'DELETE FROM appointment WHERE id = ?';


module.exports= {getAllAppointmentQuery, deleteAppointmentQuery, getAppointmentByIdQuery, getAppointmentByHospitalQuery, getAppointmentByPatientQuery}