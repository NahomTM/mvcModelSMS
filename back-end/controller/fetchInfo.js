const { course } = require('../models')
const { instructor } = require('../models')

const findCourse = async (req, res, next) => {

    const courseList = await course.findAll({
        attributes: ['fullIdentification']
    })

    if(!courseList){
        res.json({success: false, msg: "No class found"})
    }
    else{
        res.json(courseList)
    }
}

const findInstructor = async (req, res, next) => {
    const instructorList = await instructor.findAll({
        attributes: ['fullIdentification'],
       
    })

    if(!instructorList){
        res.json({success: false, msg: "No class found"})
    }
    else{
        res.json(instructorList)
    }
}

module.exports = {
    findCourse,
    findInstructor
}