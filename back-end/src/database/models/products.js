module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    urlImages: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'products',
    timestamp: false,
    underscored: true,
  });
  return Product;
}