const express = require("express");
const { addStudent, getD, getE, getF, getI, getJ, getG} = require("../controller/student_controller");
const Router = express.Router();


Router.route('/addStudent').post(addStudent);
Router.route('/getD').get(getD);
Router.route('/getE').get(getE);
Router.route('/getF/:id').patch(getF);
Router.route('/getG').get(getG);
Router.route('/getI/:id').delete(getI);

Router.route('/getJ').get(getJ);


module.exports = Router;