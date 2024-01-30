CREATE TABLE `hospital` (
  ID SERIAL PRIMARY KEY,
  hospitalid INT,
  hospitalname VARCHAR(255),
  hospitalemail VARCHAR(255),
  hospitalphoneno VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  pincode INT, 
  gstno VARCHAR(20),
  ownername VARCHAR(100),
  owneremail VARCHAR(100),
  contactpersonname VARCHAR(255),
  contactpersonemail VARCHAR(255),
  contactpersonphoneno VARCHAR(20),
  contactpersonmobileno VARCHAR(20),
  `STATUS` VARCHAR(20)
);


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

