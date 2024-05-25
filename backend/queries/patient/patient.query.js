
const addPatientQuery = `INSERT INTO patient (patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospitalid)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const updatePatientQuery = `UPDATE patient SET patientid = ?, age = ?, sex = ?, height = ?, weight = ?, address = ?, bloodgroup = ?, bloodpressure = ?, heartrate = ?, glucoselevel = ?, hemoglobinlevel = ?, doctor = ?, doctornotes = ?, nursenotes = ?, status = ?, lastvisit = ?, hospitalid = ? WHERE id = ?`


const getAllPatientQuery = `SELECT * FROM patient ORDER BY id`;

const getAllPatientByHospitalQuery = 'SELECT * FROM patient WHERE hospitalid = ? ORDER BY id';

const getPatientByIdQuery = 'SELECT * FROM patient WHERE id = ?';

const deletePatientQuery = 'DELETE * FROM patient WHERE id = ?';


module.exports= {addPatientQuery, getAllPatientQuery, getAllPatientByHospitalQuery, updatePatientQuery, deletePatientQuery, getPatientByIdQuery}