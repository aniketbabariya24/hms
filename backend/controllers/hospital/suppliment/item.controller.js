const { pool } = require("../../../config/db");
const { getAllItemQuery, deleteItemQuery, getItemByIdQuery, getAllItemByHospitalQuery} = require("../../../queries/hospital/suppliment/item.query");

//Add
const addItem = async (req, res) => {
  try {
    const data = req.body;
  
    // Extract keys and values from the data object
    const keys = Object.keys(data);
    const values = Object.values(data);

    // Construct the query
    const query = `
      INSERT INTO item (${keys.join(', ')})
      VALUES (${keys.map(() => '?').join(', ')})
    `;

    // Execute the query
    await pool.promise().query(query, values);

    res.json({ message: "Item added successfully" });
  } catch (error) {
    console.log(error);
  }


};

//Get all
const getAllItem = async (req, res) => {
  try {

    const data = await pool.promise().query(getAllItemQuery);

    // Check if item with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ items: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Get By hospital
const getAllItemByHospital = async (req, res) => {
  try {
    const hospitalid = req.params.hospitalid
    const data = await pool.promise().query(getAllItemByHospitalQuery, [hospitalid]);

    // Check if item with the given ID exists
    if (data.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ item: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Get by id
const getItemByid = async (req, res) => {
  try {
    const id = req.params.id
    const data = await pool.promise().query(getItemByIdQuery, [id]);

    // Check if item with the given ID exists
    if (data[0].length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ item: data[0], dataCount: data[0].length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateItem = async (req, res) => {
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
      UPDATE item
      SET ${setClause}
      WHERE id = ?
    `;

    // Execute the query
    await pool.promise().query(query, values);

    res.json({ message: "Item updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { idarray } = req.body;

    for (let i = 0; i <= idarray.length - 1; i++) {
      await pool.promise().query(deleteItemQuery, [idarray[i]]);
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.log(error);
  }


};

module.exports = { addItem, getAllItem, updateItem, getAllItemByHospital, deleteItem, getItemByid };