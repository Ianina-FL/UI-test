const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const schedules = sequelize.define(
    'schedules',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      start_time: {
        type: DataTypes.DATE,
      },

      end_time: {
        type: DataTypes.DATE,
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

  schedules.associate = (db) => {
    db.schedules.belongsToMany(db.vendors, {
      as: 'vendors',
      foreignKey: {
        name: 'schedules_vendorsId',
      },
      constraints: false,
      through: 'schedulesVendorsVendors',
    });

    db.schedules.belongsToMany(db.vendors, {
      as: 'vendors_filter',
      foreignKey: {
        name: 'schedules_vendorsId',
      },
      constraints: false,
      through: 'schedulesVendorsVendors',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.schedules.hasMany(db.budgets, {
      as: 'budgets_event',
      foreignKey: {
        name: 'eventId',
      },
      constraints: false,
    });

    //end loop

    db.schedules.belongsTo(db.venues, {
      as: 'venue',
      foreignKey: {
        name: 'venueId',
      },
      constraints: false,
    });

    db.schedules.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.schedules.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return schedules;
};
