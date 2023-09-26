module.exports = (sequelize, DataTypes) => {
  const Student = require("./student");
  const Class = require("./class");
  const Instructor = require("./instructor");
  const MarkList = sequelize.define(
    "markList",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      assessmentName: {
        type: DataTypes.STRING,
      },
      grade: {
        type: DataTypes.STRING,
      },
      instructorId: {
        type: DataTypes.INTEGER,
      },
      studentId: {
        type: DataTypes.INTEGER,
      },
      classId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezTableName: true,
      timestamps: false,
    }
  );

  MarkList.associate = (models) => {
    MarkList.belongsTo(models.instructor, { foreignKey: "instructorId" });
    MarkList.belongsTo(models.student, { foreignKey: "studentId" });
    MarkList.belongsTo(models.classRoom, { foreignKey: "classId" });
  };

  return MarkList;
};
