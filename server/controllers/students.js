import mongoose from "mongoose"
import Student from "../models/Student.js"

export const getStudents = async function (req, res, next) {
    try {
        const students = await Student.find()
        res.status(200).json({message: "Students successfully find", data: students})
    } catch (err) {
        next(err)
    }
}

export const getStudent = async function (req, res, next) {
    try {
        const student = await Student.findById(req.params.id)
        res.status(200).json({message: "Student successfully find", data: student})
    } catch (err) {
        next(err)
    }
}

export const updateStudent = async function (req, res, next) {
    const id = req.params.id
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(201).json({message: "Student updated successfully", data: updatedStudent})
    } catch (err) {
        next(err)
    }
}

export const deleteStudent = async function (req, res, next) {
    const id = req.params.id
    try {
        await Student.findByIdAndDelete(id)
        res.status(201).json({message: "Student deleted successfully"})
    } catch (err) {
        next(err)
    }
}