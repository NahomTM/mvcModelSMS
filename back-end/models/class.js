// const { Instructor } = require("./Instructor");
// const { Course } = require("./Course");

// module.exports = (sequelize, DataTypes) => {
//   const Class = sequelize.define(
//     "class",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       idTag: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       classIdentification: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       instructorId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: Instructor, // Use the model name as a string
//           key: "id",
//         },
//       },
//       courseId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: Course, // Use the model name as a string
//           key: "id",
//         },
//       },
//       fullIdentification: {
//         type: DataTypes.STRING
//       },
//     },
//     {
//       freezeTableName: true,
//       timestamps: false,
//     }
//   );
//   Instructor.hasMany(Class, { foreignKey: "instructorId" });
//   Class.belongsTo(Instructor, { foreignKey: "instructorId" });
//   Course.hasMany(Class, { foreignKey: "courseId" });
//   Class.belongsTo(Course, { foreignKey: "courseId" });
//   return Class;
// };

module.exports = (sequelize, DataTypes) => {

  const Class = sequelize.define(
    "classRoom",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idTag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullIdentification: {
        type: DataTypes.STRING,
      },
      instructorId: {
        type: DataTypes.INTEGER
      },
      courseId: {
        type: DataTypes.INTEGER
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Class.associate = (models) => {
    Class.hasMany(models.markList, { foreignKey: "classId" });
    Class.hasMany(models.student, { foreignKey: "classId" });
    Class.hasMany(models.attendance, { foreignKey: "classId" });
    Class.belongsTo(models.instructor, { foreignKey: "instructorId" });
    Class.belongsTo(models.course, { foreignKey: "courseId" });
  };


  

  return Class;
};
