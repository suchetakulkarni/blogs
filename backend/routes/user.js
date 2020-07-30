const express = require('express');
const router = express.Router();
const { requireSignin, authMiddleware,adminMiddleware} = require('../controllers/auth');
const {read} =require('../controllers/user');
// validators

router.get('/profile',requireSignin,authMiddleware,adminMiddleware, read);
// router.get('/api');

module.exports = router;