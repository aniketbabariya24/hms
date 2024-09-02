const { pool } = require("../../config/db");
const { addHospitalQuery, getByhospitalEmail, getByhospitalPhoneNo, getByOwnerEmail, getByContactPersonMobileNo, getByContactPersonEmail } = require("../../queries/hospital/hospital.query");

const { validationResult } = require('express-validator');
const { emailValidator, pincodeValidator, phonenoValidator } = require("../../constants/validators");

// addHospitalQuery, getByContactPersonEmail, getByOwnerEmail, getByhospitalPhoneNo, getByhospitalEmail, getByContactPersonMobileNo


const addHospital = async (req, res) => {
  try {
    const { hospitalName, hospitalEmail, hospitalPhoneNo, address, city, state, country, pincode, gstNo, ownerName, ownerEmail, contactPersonName, contactPersonEmail, contactPersonPhoneNo, contactPersonMobileNo, status } = req.body;

    //Mendatory field validations
    let mendatoryFields = [hospitalName, hospitalEmail, hospitalPhoneNo, address, city, state, country, pincode, ownerName, ownerEmail]
    for(let el of mendatoryFields){
      if(!el){
        return res.status(400).json({message:`${el} is required`})
      }
    }

    //Unique field validations
    const isHospitalEmailAlreadyInUse = await pool.promise().query(getByhospitalEmail, [hospitalEmail]);
    if(isHospitalEmailAlreadyInUse[0].length>0){
      return res.status(400).json({message:"Hospital email is already in use"});
    }

    const isHospitalPhoneNoAlreadyInUse = await pool.promise().query(getByhospitalPhoneNo, [hospitalPhoneNo]);
    if(isHospitalPhoneNoAlreadyInUse[0].length>0){
      return res.status(400).json({message:"Hospital phone no is already in use"});
    }

    const isOwnerEmailAlreadyInUse = await pool.promise().query(getByOwnerEmail, [ownerEmail]);
    if(isOwnerEmailAlreadyInUse[0].length>0){
      return res.status(400).json({message:"Owner email is already in use"});
    }

    const isContactapersonEmailAlreadyInUse = await pool.promise().query(getByContactPersonEmail, [contactPersonEmail]);
    if(isContactapersonEmailAlreadyInUse[0].length>0){
      return res.status(400).json({message:"Contact person email is already in use"});
    }

    const isContactPersonPhoneNoAlreadyInUse = await pool.promise().query(getByContactPersonMobileNo, [contactPersonMobileNo]);
    if(isContactPersonPhoneNoAlreadyInUse[0].length>0){
      return res.status(400).json({message:"Contact person phone no is already in use"});
    }
    
    //Correct field validations
    const isValidEmail = emailValidator(hospitalEmail);
    if(!isValidEmail){
      return res.status(400).json({message:"Please enter valid email"})
    }
    const isValidPhoneno = phonenoValidator(hospitalPhoneNo);
    if(!isValidPhoneno){
      return res.status(400).json({message:"Please enter valid hospital phone no"})
    }
    const isValidPinCode = pincodeValidator(pincode);
    if(!isValidPinCode){
      return res.status(400).json({message:"Please enter valid pincode"})
    }


    await pool.promise().query(addHospitalQuery, [hospitalName, hospitalEmail, hospitalPhoneNo, address, city, state, country, pincode, gstNo, ownerName, ownerEmail, contactPersonName, contactPersonEmail, contactPersonPhoneNo, contactPersonMobileNo, status]);

    res.json({ message: "Hospital added successfully" });
  } catch (error) {
    console.log("Error in addHospital controller");
    console.log(error);
    res.status(500).json({message:"Internal server error"})
  }


};

const updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const [existingRecord] = await pool.promise().query('SELECT * FROM hospital WHERE id = ?', [id]);

    if (existingRecord.length === 0) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    // Mandatory field validations (only if the fields are being updated)
    const mandatoryFields = ['hospitalName', 'hospitalEmail', 'hospitalPhoneNo', 'address', 'city', 'state', 'country', 'pincode', 'ownerName', 'ownerEmail'];
    for (let field of mandatoryFields) {
      if (updatedData[field] !== undefined && !updatedData[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    // Unique field validations (only if the fields are being updated)
    if (updatedData.hospitalEmail) {
      const [emailCheck] = await pool.promise().query(getByhospitalEmail, [updatedData.hospitalEmail]);
      if (emailCheck.length > 0 && emailCheck[0].id !== parseInt(id)) {
        return res.status(400).json({ message: "Hospital email is already in use" });
      }
    }

    if (updatedData.hospitalPhoneNo) {
      const [phoneCheck] = await pool.promise().query(getByhospitalPhoneNo, [updatedData.hospitalPhoneNo]);
      if (phoneCheck.length > 0 && phoneCheck[0].id !== parseInt(id)) {
        return res.status(400).json({ message: "Hospital phone no is already in use" });
      }
    }

    if (updatedData.ownerEmail) {
      const [ownerEmailCheck] = await pool.promise().query(getByOwnerEmail, [updatedData.ownerEmail]);
      if (ownerEmailCheck.length > 0 && ownerEmailCheck[0].id !== parseInt(id)) {
        return res.status(400).json({ message: "Owner email is already in use" });
      }
    }

    if (updatedData.contactPersonEmail) {
      const [contactEmailCheck] = await pool.promise().query(getByContactPersonEmail, [updatedData.contactPersonEmail]);
      if (contactEmailCheck.length > 0 && contactEmailCheck[0].id !== parseInt(id)) {
        return res.status(400).json({ message: "Contact person email is already in use" });
      }
    }

    if (updatedData.contactPersonMobileNo) {
      const [contactPhoneCheck] = await pool.promise().query(getByContactPersonMobileNo, [updatedData.contactPersonMobileNo]);
      if (contactPhoneCheck.length > 0 && contactPhoneCheck[0].id !== parseInt(id)) {
        return res.status(400).json({ message: "Contact person phone no is already in use" });
      }
    }

    // Correct field validations (only if the fields are being updated)
    if (updatedData.hospitalEmail && !emailValidator(updatedData.hospitalEmail)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    if (updatedData.hospitalPhoneNo && !phonenoValidator(updatedData.hospitalPhoneNo)) {
      return res.status(400).json({ message: "Please enter a valid hospital phone no" });
    }

    if (updatedData.pincode && !pincodeValidator(updatedData.pincode)) {
      return res.status(400).json({ message: "Please enter a valid pincode" });
    }

    // Dynamic update
    const fieldsToUpdate = [];
    const valuesToUpdate = [];

    Object.keys(updatedData).forEach((key) => {
      if (updatedData[key] !== undefined && updatedData[key] !== existingRecord[0][key]) {
        fieldsToUpdate.push(`${key} = ?`);
        valuesToUpdate.push(updatedData[key]);
      }
    });

    if (fieldsToUpdate.length === 0) {
      return res.status(400).json({ message: 'No changes detected' });
    }

    valuesToUpdate.push(id);

    const updateQuery = `UPDATE hospital SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;

    await pool.promise().query(updateQuery, valuesToUpdate);

    res.json({ message: "Hospital updated successfully" });
  } catch (error) {
    console.log("Error in updateHospital controller");
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllHospitals = async (req, res) => {
  try {
    let { page = 1, limit = 10, sortBy = 'hospitalName', order = 'asc' } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const offset = (page - 1) * limit;

    const query = `SELECT * FROM hospital ORDER BY ${sortBy} ${order.toUpperCase()} LIMIT ? OFFSET ?`;
    
    const [hospitals] = await pool.promise().query(query, [limit, offset]);

    const [totalCountResult] = await pool.promise().query('SELECT COUNT(*) AS total FROM hospital');
    const total = totalCountResult[0].total;

    res.json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalHospitals: total,
      hospitals,
    });
  } catch (error) {
    console.log("Error in getAllHospitals controller");
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the hospital exists
    const [existingRecord] = await pool.promise().query('SELECT * FROM hospitals WHERE id = ?', [id]);

    if (existingRecord.length === 0) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    // Delete the hospital record
    await pool.promise().query('DELETE FROM hospitals WHERE id = ?', [id]);

    res.json({ message: "Hospital deleted successfully" });
  } catch (error) {
    console.log("Error in deleteHospital controller");
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { addHospital, updateHospital, getAllHospitals, deleteHospital };