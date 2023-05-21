const { response } = require("express");
const studentSchema = require("../schema/student_schema.js");

exports.addStudent = async (req, res) => {
    try {
        let dataToStore = await studentSchema.create(req.body);
        dataToStore = dataToStore.toObject();
        res.status(200).json({ "Data": dataToStore });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getD = async (req, res) => {
    try {
        let data = await studentSchema.find();
        res.status(200).json({
            "Size": data.length
            , "Data": data
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getE = async (req, res) => {
    try {
        const query = { dsbda: { $gt: 20 } };

        let data = await studentSchema.find(query);
        res.status(200).json({
            "Data": data
        });

    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getF = async (req, res) => {
    try {
        let id = req.params.id;
        const student = await studentSchema.findOneAndUpdate({ _id: id }, { $inc: { wad: 10, cc: 10, dsbda: 10, cns: 10 } }, { new: true });

        res.status(200).json({
            "Data": student
        });

    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getG = async (req, res) => {
    try {
        const query = {dsbda: { $gt: 25 }, wad: { $gt: 25 },cns: { $gt: 25 },cc: { $gt: 25}};
        const student = await studentSchema.find(query, {name:1});

        res.status(200).json({
            "Data": student
        });

    } catch (error) {
        res.status(500).send(error);
    }
};


exports.getI = async (req, res) => {
    try {
        let id = req.params.id;
        const student = await studentSchema.findByIdAndDelete({ _id: id });

        res.status(200).json({
            "Data": student
        });

    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getJ = async (req, res) => {
    try {
        let data = await studentSchema.find();
        // creating table view for browser
        let html = "<table border=1 style='border-collapse: collapse'>" // style tag is used to avoid double border on table
        // creating headers **BackTick (`) is used for creating multiline string**
        html = html + `<tr>
        <th>Name</th>
        <th>Roll_No</th>
        <th>WAD_Marks</th>
        <th>CC_Marks</th>
        <th>DSBDA_Marks</th>
        <th>CNS_Marks</th>
    </tr>`
        data.map(function (student) {
            html = html + "<tr>"

            html = html + "<td>" + student.name + "</td>"
            html = html + "<td>" + student.rollNo + "</td>"
            html = html + "<td>" + student.wad + "</td>"
            html = html + "<td>" + student.cc + "</td>"
            html = html + "<td>" + student.dsbda + "</td>"
            html = html + "<td>" + student.cns + "</td>"

            html = html + "</tr>"
        })
        html = html + "</table>"
        res.send(html);
    } catch (error) {
        res.status(500).send(error);
    }
};