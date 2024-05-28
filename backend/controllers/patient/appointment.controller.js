const { pool } = require("../../config/db");
const {  getAllAppointmentQuery, getAppointmentByPatientQuery, deleteAppointmentQuery, getAppointmentByHospitalQuery, getAppointmentByIdQuery } = require("../../queries/patient/appointment.query");

//Added
const addAppointment = async (req, res) => {
    try {
      const data = req.body;
  
      // Extract keys and values from the data object
      const keys = Object.keys(data);
      const values = Object.values(data);
  
      // Construct the query
      const query = `
        INSERT INTO appointment (${keys.join(', ')})
        VALUES (${keys.map(() => '?').join(', ')})
      `;
  
      // Execute the query
      await pool.promise().query(query, values);
  
      res.json({ message: "Appointment added successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding appointment", error: error.message });
    }
  };
  
//get all
const getAllAppointment = async (req, res) => {
  try {

    const data = await pool.promise().query(getAllAppointmentQuery);

    if (data.length === 0) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json({ appointment: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Get appointment by patient
const getAppointmentByPatient = async (req, res) => {
  try {
    const patientid = req.params.patientid
    const data = await pool.promise().query(getAppointmentByPatientQuery, [patientid]);


    if (data.length === 0) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json({ appointment: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Get appointment by hospital
const getAppointmentByHospital = async (req, res) => {
    try {
      const hospitalid = req.params.hospitalid
      const data = await pool.promise().query(getAppointmentByHospitalQuery, [hospitalid]);
  
  
      if (data.length === 0) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
  
      res.json({ appointment: data[0], dataCount: data[0].length });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //By id
const getAppointmentByid = async (req, res) => {
  try {
    const id = req.params.id
    const data = await pool.promise().query(getAppointmentByIdQuery, [id]);

    if (data[0].length === 0) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json({ appointment: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Update
const updateAppointment = async (req, res) => {
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
        UPDATE appointment
        SET ${setClause}
        WHERE id = ?
      `;
  
      // Execute the query
      await pool.promise().query(query, values);
  
      res.json({ message: "Appointment updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error updating appointment", error: error.message });
    }
  };
  
//Delete
const deleteAppointment = async (req, res) => {
  try {
    const { idarray } = req.body;

    for (let i = 0; i <= idarray.length - 1; i++) {
      await pool.promise().query(deleteAppointmentQuery, [idarray[i]]);
    }

    res.json({ message: "Appointmentid deleted successfully" });
  } catch (error) {
    console.log(error);
  }


};

module.exports = { addAppointment, getAllAppointment, updateAppointment, getAppointmentByPatient, deleteAppointment, getAppointmentByid, getAppointmentByHospital};