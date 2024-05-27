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

CREATE TABLE insurance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patientid VARCHAR(255) NOT NULL,
    companyname VARCHAR(255) NOT NULL,
    companyaddress VARCHAR(255) NOT NULL,
    companyphone VARCHAR(20) NOT NULL,
    policyno VARCHAR(50) NOT NULL,
    groupno VARCHAR(50),
    policyholdername VARCHAR(255) NOT NULL,
    policyholderdob DATE NOT NULL,
    holderrelation ENUM('Self', 'Spouse', 'Parent', 'Other') NOT NULL,
    effectivedate DATE NOT NULL,
    expirationdate DATE,
    
    primaryinsurance ENUM('Yes', 'No') NOT NULL,
    secondaryinsurance ENUM('Yes', 'No') NOT NULL,
    plantype ENUM('HMO', 'PPO', 'EPO', 'Other') NOT NULL,
    paymentamount DECIMAL(10, 2) NOT NULL,
    deductibleamount DECIMAL(10, 2) NOT NULL,
    outofpocket DECIMAL(10, 2),
    coveragedetails TEXT NOT NULL,
    
    employername VARCHAR(255),
    employeraddress VARCHAR(255),
    employercontact VARCHAR(20),
    otherinsurance ENUM('Yes', 'No') DEFAULT 'No',
    othercoverage TEXT,
    
    consentsignature VARCHAR(255) NOT NULL,
    consentdate DATE NOT NULL,
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
