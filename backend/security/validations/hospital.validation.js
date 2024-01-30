const addHospitalValidationRules = [
    check('hospitalid').isInt().withMessage('Hospital ID must be an integer'),
    check('hospitalname').isLength({ min: 1, max: 255 }).withMessage('Hospital name is required and should not exceed 255 characters'),
    check('hospitalemail').isEmail().withMessage('Invalid hospital email'),
    check('hospitalphoneno').isMobilePhone().withMessage('Invalid hospital phone number'),
    check('address').isLength({ max: 65535 }).withMessage('Address should not exceed 65535 characters'),
    check('city').isLength({ max: 100 }).withMessage('City should not exceed 100 characters'),
    check('state').isLength({ max: 100 }).withMessage('State should not exceed 100 characters'),
    check('country').isLength({ max: 100 }).withMessage('Country should not exceed 100 characters'),
    check('pincode').isInt().withMessage('Invalid pincode'),
    check('gstno').isLength({ max: 20 }).withMessage('GST number should not exceed 20 characters'),
    check('ownername').isLength({ max: 100 }).withMessage('Owner name should not exceed 100 characters'),
    check('owneremail').isEmail().withMessage('Invalid owner email'),
    check('contactpersonname').isLength({ max: 255 }).withMessage('Contact person name should not exceed 255 characters'),
    check('contactpersonemail').isEmail().withMessage('Invalid contact person email'),
    check('contactpersonphoneno').isMobilePhone().withMessage('Invalid contact person phone number'),
    check('contactpersonmobileno').isMobilePhone().withMessage('Invalid contact person mobile number'),
    check('STATUS').isLength({ max: 20 }).withMessage('Status should not exceed 20 characters')
  ];

module.exports= {addHospitalValidationRules}
