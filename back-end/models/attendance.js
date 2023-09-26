module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    "attendance",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      attendanceValue: {
        type: DataTypes.STRING,
      },
      classId: {
        type: DataTypes.INTEGER,
      },
      studentId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timastamps: true,
      createdAt: true,
      updatedAt: false,
    }
  );

  Attendance.associate = (models) => {
    Attendance.belongsTo(models.student, { foreignKey: "studentId" });
    Attendance.belongsTo(models.classRoom, { foreignKey: "classId" });
  };
  return Attendance;
};
