
const {Router} = require("express");
const {addItem, getAllItem, getAllItemByHospital, deleteItem, updateItem, getItemByid} = require("../../../controllers/hospital/suppliment/item.controller");
const itemRoute = Router();

itemRoute.post('/add', addItem)
itemRoute.get('/getall', getAllItem)
itemRoute.get('/getbyhospital/:hospitalid', getAllItemByHospital)
itemRoute.get('/getbyid/:id', getItemByid)
itemRoute.post('/update/:id', updateItem)
itemRoute.post('/delete', deleteItem)

module.exports = {itemRoute};

// Add Item: http://localhost:8080/patient/add