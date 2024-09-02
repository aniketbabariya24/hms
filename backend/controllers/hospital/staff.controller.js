const { pool } = require("../../config/db");
const { getAllStaffQuery, deleteStaffQuery, getStaffByIdQuery, getAllStaffByHospitalQuery} = require("../../queries/hospital/staff.query");

//Added
const addStaff = async (req, res) => {
  try {
    const data = req.body;
  
    // Extract keys and values from the data object
    const keys = Object.keys(data);
    const values = Object.values(data);

    const query = `
      INSERT INTO staff (${keys.join(', ')})
      VALUES (${keys.map(() => '?').join(', ')})
    `;

    // Execute the query
    await pool.promise().query(query, values);

    res.json({ message: "Staff added successfully" });
  } catch (error) {
    console.log(error);
  }


};

//Get All
const getAllStaff = async (req, res) => {
  try {

    const data = await pool.promise().query(getAllStaffQuery);

    // Check if patient with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    res.json({ patients: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Get By hospital
const getAllStaffByHospital = async (req, res) => {
  try {
    const hospitalid = req.params.hospitalid
    const data = await pool.promise().query(getAllStaffByHospitalQuery, [hospitalid]);

    // Check if patient with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    res.json({ patient: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Get By id
const getStaffByid = async (req, res) => {
  try {
    const id = req.params.id
    const data = await pool.promise().query(getStaffByIdQuery, [id]);

    // Check if patient with the given ID exists
    if (data[0].length === 0) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    res.json({ patient: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Updated
const updateStaff = async (req, res) => {
  try {
    const { id } = req.params; // Get the id from req.params
    const data = req.body; // Get the update data from req.body

    // Extract keys and values from the data object
    const keys = Object.keys(data);
    const values = Object.values(data);

    // Construct the SET clause of the query
    const setClause = keys.map(key => `${key} = ?`).join(', ');

    // Add the id to the end of the values array
    values.push(id);

    // Construct the query
    const query = `
      UPDATE staff
      SET ${setClause}
      WHERE id = ?
    `;

    // Execute the query
    await pool.promise().query(query, values);

    res.json({ message: "Staff updated successfully" });
  } catch (error) {
    console.log(error);
  }


};

//Deleted
const deleteStaff = async (req, res) => {
  try {
    const { idarray } = req.body;

    for (let i = 0; i <= idarray.length - 1; i++) {
      await pool.promise().query(deleteStaffQuery, [idarray[i]]);
    }

    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.log(error);
  }


};

module.exports = { addStaff, getAllStaff, updateStaff, getAllStaffByHospital, deleteStaff, getStaffByid };