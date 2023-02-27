module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProduct', {
    saleId: {
      field: 'sale_id',
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTERGER,
    },
    productId: {
      field: 'product_id',
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTERGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTERGER,
    }
  }, {
    tableName: 'sales_products',
    timestamp: false,
    underscored: true,
  });

  salesProducts.associate = function (models) {
    models.salesProducts.BelongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'products',
      otherKey: 'productId',
    });
    models.salesProducts.BelongsToMany(models.Sale, {
      foreignKey: 'productId',
      as: 'products',
      otherKey: 'saleId',
    });
  }
  return salesProducts;
}