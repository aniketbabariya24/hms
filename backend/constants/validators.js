// Email Validator
const emailValidator = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Phone Number Validator
const phonenoValidator = (phoneno) => {
    const regex = /^[+]?[0-9]{10,15}$/;
    return regex.test(phoneno);
}

// PIN Code Validator
const pincodeValidator = (pincode) => {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
}

// PAN Number Validator
const panNoValidator = (panno) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return regex.test(panno);
}

// Aadhaar Number Validator
const aadharNoValidator = (aadharno) => {
    const regex = /^[0-9]{12}$/;
    return regex.test(aadharno);
}

// GST Number Validator
const gstNoValidator = (gstno) => {
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return regex.test(gstno);
}

module.exports = {
    emailValidator,
    phonenoValidator,
    pincodeValidator,
    panNoValidator,
    aadharNoValidator,
    gstNoValidator
};
