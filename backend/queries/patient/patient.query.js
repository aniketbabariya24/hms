
const addPatientQuery = `INSERT INTO patient (patientid, age, sex, height, weight, address, bloodgroup, bloodpressure, heartrate, glucoselevel, hemoglobinlevel, doctor, doctornotes, nursenotes, status, lastvisit, hospital)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const getAllPatientQuery = `SELECT * FROM patient ORDER BY id`;

const getAllPatientByHospitalQuery = 'SELECT * FROM patient WHERE hospital = ? ORDER BY id';

module.exports= {addPatientQuery, getAllPatientQuery, getAllPatientByHospitalQuery}