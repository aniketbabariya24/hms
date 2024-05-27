const getAllInsuranceQuery = `SELECT * FROM insurance ORDER BY id DESC`;

const getInsuranceByIdQuery = 'SELECT * FROM insurance WHERE id = ?';

const getInsuranceByPatientQuery = 'SELECT * FROM insurance WHERE patientid = ?';


const deleteInsuranceQuery = 'DELETE FROM insurance WHERE id = ?';


module.exports= {getAllInsuranceQuery, deleteInsuranceQuery, getInsuranceByIdQuery, getInsuranceByPatientQuery}