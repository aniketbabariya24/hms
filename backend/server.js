const express = require('express');

const cors = require('cors');
const { patientRoute } = require('./routes/patient/patient.routes');
const { hospitalRoute } = require('./routes/hospital/hospital.routes');
const { insuranceRoute } = require('./routes/patient/insurance.routes');
const { staffRoute } = require('./routes/hospital/staff.routes');
const { appointmentRoute } = require('./routes/patient/appointment.routes');

const app = express();

const PORT = 8080;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);


app.use('/patient', patientRoute)

app.use('/hospital', hospitalRoute)
app.use('/insurance', insuranceRoute)
app.use('/staff', staffRoute)
app.use('/appointment', appointmentRoute)




app.listen(PORT, ()=>{
    console.log(`server runing at port ${PORT}`);
})