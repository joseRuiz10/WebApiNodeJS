const express= require('express');
const router = express.Router(); 
const employe= require('../controllers/employe.Controller')




router.get('/',employe.getEmployes)

router.post('/',employe.createEmpleado);
router.get('/:id',employe. ObtenerEmpleado);
router.put('/:id',employe. editEmpleado);
router.delete('/:id',employe.eliminarEmpleado);
module.exports = router;