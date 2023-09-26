module.exports = (sequelize, DataTypes) => {
  const Course = require("./course");
  const Class = require("./class");
  const Student = sequelize.define(
    "student",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      idTag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
      },
      courseId: {
        type: DataTypes.INTEGER,
      },
      classId: {
        type: DataTypes.INTEGER,
      },
      paymentStatus: {
        type: DataTypes.STRING,
      },
      fullIdentification: {
        type: DataTypes.STRING,
      },
    },

    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Student.associate = (models) => {
    Student.hasMany(models.markList, { foreignKey: "studentId" });
    Student.hasMany(models.attendance, { foreignKey: "studentId" });
    Student.belongsTo(models.course, { foreignKey: "courseId" });
    Student.belongsTo(models.classRoom, { foreignKey: "classId" });
  };


  return Student;
};
