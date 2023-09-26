const { classRoom } = require('../models')
const { instructor } = require('../models')
const { course } = require('../models')

const addClass = async (req, res) => {
    const body = req.body;
    const className = body.className;
    const instructorName = body.selectedInstructor;
    const courseName = body.selectedCourse;

    try {
        const previousClassId = await classRoom.max('id');

        
        const idTagValue = previousClassId !== null ? `CLS${1000 + previousClassId}` : 'CLS1000';
        const fullClass = `${idTagValue} ${className}`;
        const instId = await instructor.findOne({
            where: {
                fullIdentification: instructorName
            },
            attributes: ['id']
        })

        const findCourse = await course.findOne({
            where: {
                fullIdentification: courseName
            },
            attributes: ['id']
        })
        await classRoom.create(
            {
                name: className,
                instructorId: instId.id,
                courseId: findCourse.id,
                idTag: idTagValue,
                fullIdentification: fullClass
            }
        )
        res.json({ success: true })
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "error in creating class" }, 500)
    }

}

module.exports = {
    addClass
}