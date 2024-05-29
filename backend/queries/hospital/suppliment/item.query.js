const getAllItemQuery = `SELECT * FROM item ORDER BY id DESC`;

const getItemByIdQuery = 'SELECT * FROM item WHERE id = ?';

const getAllItemByHospitalQuery = 'SELECT * FROM item WHERE hospitalid = ?';


const deleteItemQuery = 'DELETE FROM item WHERE id = ?';


module.exports= {getAllItemQuery, deleteItemQuery, getItemByIdQuery, getAllItemByHospitalQuery}