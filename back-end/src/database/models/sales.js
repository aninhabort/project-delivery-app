module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    sellerId: {
      field: 'seller_id',
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2)
    },
    userId: {
      field: 'user_id',
      foreignKey: true,
      Type: DataTypes.INTEGER,
    },
  }, {
    createdAt: 'sale_date',
    updateAt: false,
    tableName: 'sales',
    underscored: true,
  });

  Sales.associate = function (models) {
    models.Sales.belongsTo(models.User,
    {
        foreignKey: 'user_id', as: 'user',
    }),
    models.Sales.belongsTo(models.User,
    {
      foreignKey: 'seller_id', as: 'seller',
    })
  }

  return Sales;
};