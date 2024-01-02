CREATE TABLE `patient` (
  ID SERIAL PRIMARY KEY,
  patientid VARCHAR(255),
  age INT,
  sex VARCHAR(255),
  height INT, 
  weight DECIMAL(5,2),
  address TEXT,
  bloodgroup VARCHAR(10),
  bloodpressure VARCHAR(20),
  heartrate INT,
  glucoselevel DECIMAL(5,2),
  hemoglobinlevel DECIMAL(5,2),
  doctor VARCHAR(255),
  doctornotes TEXT,
  nursenotes TEXT,
  `STATUS` VARCHAR(20), 
  lastvisit DATE,
  hospital VARCHAR(255)
);

