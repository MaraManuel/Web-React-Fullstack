
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        texto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Posts;

}