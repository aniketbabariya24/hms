const { pool } = require("../../config/db");
const {  getAllInsuranceQuery, getInsuranceByPatientQuery, deleteInsuranceQuery, getInsuranceByIdQuery } = require("../../queries/patient/insurance.query");

//Added
const addInsurance = async (req, res) => {
    try {
      const data = req.body;
  
      // Extract keys and values from the data object
      const keys = Object.keys(data);
      const values = Object.values(data);
  
      // Construct the query
      const query = `
        INSERT INTO insurance (${keys.join(', ')})
        VALUES (${keys.map(() => '?').join(', ')})
      `;
  
      // Execute the query
      await pool.promise().query(query, values);
  
      res.json({ message: "Insurance added successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding insurance", error: error.message });
    }
  };
  
//Get all
const getAllInsurance = async (req, res) => {
  try {

    const data = await pool.promise().query(getAllInsuranceQuery);

    if (data.length === 0) {
      return res.status(404).json({ message: 'Insurance not found' });
    }

    res.json({ insurance: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get by patient id
const getInsuranceByPatient = async (req, res) => {
  try {
    const patientid = req.params.patientid
    const data = await pool.promise().query(getInsuranceByPatientQuery, [patientid]);


    if (data.length === 0) {
      return res.status(404).json({ message: 'Insurance not found' });
    }

    res.json({ insurance: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
//Get by id
const getInsuranceByid = async (req, res) => {
  try {
    const id = req.params.id
    const data = await pool.promise().query(getInsuranceByIdQuery, [id]);

    if (data[0].length === 0) {
      return res.status(404).json({ message: 'Insurance not found' });
    }

    res.json({ insurance: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Update
const updateInsurance = async (req, res) => {
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
        UPDATE insurance
        SET ${setClause}
        WHERE id = ?
      `;
  
      // Execute the query
      await pool.promise().query(query, values);
  
      res.json({ message: "Insurance updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error updating insurance", error: error.message });
    }
  };
  
//Delete
const deleteInsurance = async (req, res) => {
  try {
    const { idarray } = req.body;

    for (let i = 0; i <= idarray.length - 1; i++) {
      await pool.promise().query(deleteInsuranceQuery, [idarray[i]]);
    }

    res.json({ message: "Insuranceid deleted successfully" });
  } catch (error) {
    console.log(error);
  }


};

module.exports = { addInsurance, getAllInsurance, updateInsurance, getInsuranceByPatient, deleteInsurance, getInsuranceByid };