const { check } = require('express-validator');

const addHospitalValidationRules = [
    check('hospitalid').notEmpty().withMessage('Hospital ID is required')
    .isInt().withMessage('Hospital ID must be an integer'),

    check('hospitalname').notEmpty().withMessage('Hospital name is required')
    .isLength({ min: 1, max: 255 }).withMessage('Hospital name should not exceed 255 characters'),
    
    check('hospitalemail').notEmpty().withMessage('Hospital email is required')
    .isEmail().withMessage('Invalid hospital email'),
    
    check('hospitalphoneno').notEmpty().withMessage('Hospital phone number is required')
    .isMobilePhone().withMessage('Invalid hospital phone number'),
    
    check('address').notEmpty().withMessage('Address is required')
    .isLength({ max: 65535 }).withMessage('Address should not exceed 65535 characters'),
    
    check('city').notEmpty().withMessage('City is required')
    .isLength({ max: 100 }).withMessage('City should not exceed 100 characters'),
    
    check('state').notEmpty().withMessage('State is required')
    .isLength({ max: 100 }).withMessage('State should not exceed 100 characters'),
    
    check('country').notEmpty().withMessage('Country is required')
    .isLength({ max: 100 }).withMessage('Country should not exceed 100 characters'),
    
    check('pincode').notEmpty().withMessage('Pincode is required')
    .isInt().withMessage('Invalid pincode'),
    
    check('gstno').isLength({ max: 20 }).withMessage('GST number should not exceed 20 characters'),
    
    check('ownername').isLength({ max: 100 }).withMessage('Owner name should not exceed 100 characters'),
    
    check('owneremail').isEmail().withMessage('Invalid owner email'),
    
    check('contactpersonname').notEmpty().withMessage('Contact person name is required')
    .isLength({ max: 255 }).withMessage('Contact person name should not exceed 255 characters'),
    
    check('contactpersonemail').notEmpty().withMessage('Contact person email is required')
    .isEmail().withMessage('Invalid contact person email'),
    
    check('contactpersonphoneno').notEmpty().withMessage('Contact person phone number is required')
    .isMobilePhone().withMessage('Invalid contact person phone number'),
    
    check('contactpersonmobileno').isMobilePhone().withMessage('Invalid contact person mobile number'),
    
    check('STATUS').notEmpty().withMessage('Status is required')
    .isLength({ max: 20 }).withMessage('Status should not exceed 20 characters')
  ];

  

module.exports= {addHospitalValidationRules}
