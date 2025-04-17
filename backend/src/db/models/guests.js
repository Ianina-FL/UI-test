const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const guests = sequelize.define(
    'guests',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      email: {
        type: DataTypes.TEXT,
      },

      is_attending: {
        type: DataTypes.BOOLEAN,

        allowNull: false,
        defaultValue: false,
      },

      meal_preference: {
        type: DataTypes.ENUM,

        values: ['standard', 'vegetarian'],
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  guests.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.guests.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.guests.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return guests;
};
