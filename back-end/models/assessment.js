module.exports = (sequelize, DataTypes) => {
    const Assessment = sequelize.define('assessment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        assessmentName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        outOf: {
            type: DataTypes.INTEGER
        },
        instructorId: {
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Assessment.associate = (models) => {
        Assessment.belongsTo(models.instructor, {foreignKey: "instructorId"})
    }
    return Assessment
}