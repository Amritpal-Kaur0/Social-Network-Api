const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoute =require('./thoughtRoutes')

router.use('/users', userRoutes);
router.use('/thought', thoughtRoute);

module.exports = router;
