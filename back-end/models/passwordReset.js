module.exports = (sequelize, DataTypes) => {
  const PasswordReset = sequelize.define(
    "paswordReset",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resetToken: {
        type: DataTypes.STRING,
      },
      active: {
        type: DataTypes.BOOLEAN,
      },
    },

    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: false,
    }
  );

  return PasswordReset;
};
