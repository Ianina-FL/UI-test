const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('EventDirector'),
        name: 'Event Director',
        createdAt,
        updatedAt,
      },

      {
        id: getId('EventManager'),
        name: 'Event Manager',
        createdAt,
        updatedAt,
      },

      {
        id: getId('VendorCoordinator'),
        name: 'Vendor Coordinator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('GuestLiaison'),
        name: 'Guest Liaison',
        createdAt,
        updatedAt,
      },

      {
        id: getId('BudgetAnalyst'),
        name: 'Budget Analyst',
        createdAt,
        updatedAt,
      },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'budgets',
      'guests',
      'schedules',
      'vendors',
      'venues',
      'roles',
      'permissions',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('CREATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('READ_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('UPDATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('DELETE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('CREATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('READ_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('UPDATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('CREATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('READ_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('CREATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('READ_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('CREATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('READ_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('UPDATE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('DELETE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('CREATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('READ_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('UPDATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('DELETE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('CREATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('READ_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('UPDATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('DELETE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('CREATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('READ_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('CREATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('READ_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('UPDATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('DELETE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('CREATE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('READ_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('CREATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('READ_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('UPDATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('DELETE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('CREATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('READ_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('UPDATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('DELETE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('CREATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('READ_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('CREATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('READ_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('CREATE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('READ_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('CREATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('READ_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('UPDATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('DELETE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('CREATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('READ_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('UPDATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('CREATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('READ_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('UPDATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('DELETE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('CREATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('READ_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('CREATE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('READ_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('CREATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('READ_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('UPDATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('DELETE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('CREATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('READ_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('UPDATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('CREATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('READ_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('CREATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('READ_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('CREATE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('READ_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventDirector'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EventManager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('VendorCoordinator'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('GuestLiaison'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('BudgetAnalyst'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_BUDGETS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_BUDGETS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_BUDGETS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_BUDGETS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_GUESTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_GUESTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_GUESTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_GUESTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SCHEDULES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_SCHEDULES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_SCHEDULES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_SCHEDULES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_VENDORS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_VENDORS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_VENDORS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_VENDORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_VENUES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_VENUES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_VENUES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_VENUES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'EventDirector',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'EventManager',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
