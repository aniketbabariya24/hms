const { pool } = require("../../config/db");
const { addInsuranceQuery, getAllInsuranceQuery, getAllInsuranceByHospitalQuery, updateInsuranceQuery, deleteInsuranceQuery, getInsuranceByIdQuery } = require("../../queries/patient/insurance.query");


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
  

const getAllInsurance = async (req, res) => {
  try {

    const data = await pool.promise().query(getAllInsuranceQuery);

    // Check if patient with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Insurance not found' });
    }

    res.json({ patients: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllInsuranceByHospital = async (req, res) => {
  try {
    const hospitalid = req.params.hospitalid
    const data = await pool.promise().query(getAllInsuranceByHospitalQuery, [hospitalid]);

    // Check if patient with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Insurance not found' });
    }

    res.json({ patient: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getInsuranceByid = async (req, res) => {
  try {
    const id = req.params.id
    const data = await pool.promise().query(getInsuranceByIdQuery, [id]);

    // Check if patient with the given ID exists
    if (data[0].length === 0) {
      return res.status(404).json({ message: 'Insurance not found' });
    }

    res.json({ patient: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

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
  

const deleteInsurance = async (req, res) => {
  try {
    const { idarray } = req.body;

    for (let i = 0; i <= idarray.length - 1; i++) {
      await pool.promise().query(deleteInsuranceQuery, [idarray[i]]);
    }

    res.json({ message: "Insuranceid added successfully" });
  } catch (error) {
    console.log(error);
  }


};

module.exports = { addInsurance, getAllInsurance, updateInsurance, getAllInsuranceByHospital, deleteInsurance, getInsuranceByid };