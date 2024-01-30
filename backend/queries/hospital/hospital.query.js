
const addHospitalQuery = `INSERT INTO hospital (hospitalid, hospitalname, hospitalemail, hospitalphoneno, address, city, state, country, pincode,  gstno, ownername, owneremail, contactpersonname, contactpersonemail, contactpersonphoneno, contactpersonmobileno, status)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

 

module.exports= {addHospitalQuery}