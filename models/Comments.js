module.exports = (sequelize, DataTypes) =>{
    const Comments = sequelize.define("Comments",{
        
        commentBody:{
            type: DataTypes.STRING,
            allowNull:false
        },
    });
    return Comments;
};
// This is table for Posts model created 
