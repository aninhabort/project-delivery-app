module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: {
      field: 'sale_id',
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      field: 'product_id',
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'sales_products',
    timestamp: false,
    underscored: true,
  });

  salesProducts.associate = function (models) {
    models.Sales.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'products',
      through: 'salesProducts',
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sales, {
      foreignKey: 'productId',
      as: 'sales',
      through: 'salesProducts',
      otherKey: 'saleId',
    });
  }
  return salesProducts;
}