const { model } = require("mongoose");
const employe= require('../models/employes');


const EmployeController= {};

EmployeController.getEmployes = async ( req, res) => {
   const empleado= await employe.find();
   res.json(empleado);    
}

 EmployeController.createEmpleado= async(req,res)=>{
     const empleado = new employe(req.body);
     console.log(empleado);
     await empleado.save();
     res.json({
         'status': 'Empleado Guardado'
     });

};

EmployeController.ObtenerEmpleado=async(req,res)=>{
    const empleado = await employe.findById(req.params.id)
    console.log(empleado)
    res.json({
        staus:'API creando empleado'
    })
};

EmployeController.editEmpleado=async(req,res)=>{
     const {id} = req.params;
     const empleado= {
        name: req.body.name,
        posicion : req.body.posicion,
        office: req.body.office,
        salary: req.body.salary
     };
      await employe.findByIdAndUpdate(id,{$set: empleado},{new: true});

    res.json({
        staus:'Empleado Actualizado'
    })
};

EmployeController.eliminarEmpleado= async(req,res)=>{
     await employe.findOneAndRemove(req.params.id);
    res.json({
        staus:'Empleado eliminado'
    })
};

module.exports = EmployeController;