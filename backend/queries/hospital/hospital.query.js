
const addHospitalQuery = `INSERT INTO hospital (hospitalName, hospitalEmail, hospitalPhoneNo, address, city, state, country, pincode, gstNo, ownerName, ownerEmail, contactPersonName, contactPersonEmail, contactPersonPhoneNo, contactPersonMobileNo, status)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const getByhospitalEmail = `SELECT * FROM hospital WHERE hospitalEmail = ?`;

const getByhospitalPhoneNo = `SELECT * FROM hospital WHERE hospitalPhoneNo = ?`;

const getByOwnerEmail = `SELECT * FROM hospital WHERE ownerEmail = ?`;

const getByContactPersonEmail = `SELECT * FROM hospital WHERE ownerEmail = ?`;

const getByContactPersonMobileNo = `SELECT * FROM hospital WHERE ownerEmail = ?`;


 

module.exports= {addHospitalQuery, getByContactPersonEmail, getByOwnerEmail, getByhospitalPhoneNo, getByhospitalEmail, getByContactPersonMobileNo}