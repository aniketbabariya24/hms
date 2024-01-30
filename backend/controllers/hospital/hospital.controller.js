const { pool } = require("../../config/db");
const { addHospitalQuery } = require("../../queries/hospital/hospital.query");


const addHospital = async (req, res) => {
  try {
    const { hospitalid, hospitalname, hospitalemail, hospitalphoneno, address, city, state, country, pincode,  gstno, ownername, owneremail, contactpersonname, contactpersonemail, contactpersonphoneno, contactpersonmobileno, status } = req.body;

    await pool.promise().query(addHospitalQuery, [hospitalid, hospitalname, hospitalemail, hospitalphoneno, address, city, state, country, pincode,  gstno, ownername, owneremail, contactpersonname, contactpersonemail, contactpersonphoneno, contactpersonmobileno, status]);

    res.json({ message: "Hospitalid added successfully" });
  } catch (error) {
    console.log(error);
  }


};


module.exports = { addHospital };