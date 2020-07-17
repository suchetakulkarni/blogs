const {check} =require('express-validator');

exports.userSignupValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required'),
	check('email')
		.isEmail()
		.withMessage('must be a valid email eaddress'),
	check('password')
		.isLength({min: 6})
		.withMessage('minimum length of 6')

];

exports.userSigninValidator = [
	check('email')
		.isEmail()
		.withMessage('must be a valid email eaddress'),
	check('password')
		.isLength({min: 6})
		.withMessage('minimum length of 6')

];