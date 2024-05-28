const getAllStaffQuery = `SELECT * FROM staff ORDER BY id DESC`;

const getStaffByIdQuery = 'SELECT * FROM staff WHERE id = ?';

const getAllStaffByHospitalQuery = 'SELECT * FROM staff WHERE hospitalid = ?';


const deleteStaffQuery = 'DELETE FROM staff WHERE id = ?';


module.exports= {getAllStaffQuery, deleteStaffQuery, getStaffByIdQuery, getAllStaffByHospitalQuery}