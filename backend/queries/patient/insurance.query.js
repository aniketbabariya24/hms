
const getAllInsuranceQuery = `SELECT * FROM insurance ORDER BY id`;

const getInsuranceByIdQuery = 'SELECT * FROM insurance WHERE id = ?';

const deleteInsuranceQuery = 'DELETE FROM insurance WHERE id = ?';


module.exports= {getAllInsuranceQuery, deleteInsuranceQuery, getInsuranceByIdQuery}