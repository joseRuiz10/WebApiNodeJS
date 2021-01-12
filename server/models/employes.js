const mongoose= require('mongoose');
const {Schema} = mongoose;


const EmployesSchema =new Schema({
    name: { type: String, require: true },
    posicion: { type: String, require: true },
    office: { type: String, require: true },
    salary: { type: Number, require: true }
});

mongoose.model('Employe', EmployesSchema);

module.exports= mongoose.model('Employe',EmployesSchema);