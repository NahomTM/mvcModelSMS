module.exports = (sequelize, DataTypes) => {
    const Instructor = sequelize.define(
      "instructor",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idTag: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        salary: {
          type: DataTypes.FLOAT,
        },
        fullIdentification: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        timestamps: true,
        createdAt: true,
        updatedAt: false,
      }
    );
    Instructor.associate = (models) => {
        Instructor.hasMany(models.assessment, {foreignKey: "instructorId"})
        Instructor.hasMany(models.markList, { foreignKey: "instructorId" });
        Instructor.hasMany(models.classRoom, { foreignKey: "instructorId" });
    }
    return Instructor;
  };
  