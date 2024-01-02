const express = require('express');

const cors = require('cors');
const { patientroute } = require('./routes/patient/patient.routes');

const app = express();

const PORT = 8080;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);


app.use('/patient', patientroute)

app.listen(PORT, ()=>{
    console.log(`server runing at port ${PORT}`);
})