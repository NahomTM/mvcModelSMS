module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "course",
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
      tuitionFee: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

  Course.associate = (models) => {
    Course.hasMany(models.student, { foreignKey: "courseId" });
    Course.hasMany(models.classRoom, { foreignKey: "courseId" });
  };

  return Course;
};
