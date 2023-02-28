module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique:true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    }, {
      tableName: 'users',
      timestamps: false,
    });
    return Users;
};