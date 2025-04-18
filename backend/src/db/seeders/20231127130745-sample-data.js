const db = require('../models');
const Users = db.users;

const Budgets = db.budgets;

const Guests = db.guests;

const Schedules = db.schedules;

const Vendors = db.vendors;

const Venues = db.venues;

const BudgetsData = [
  {
    name: 'Gala Budget',

    amount: 50000,

    // type code here for "relation_one" field
  },

  {
    name: 'Meeting Budget',

    amount: 15000,

    // type code here for "relation_one" field
  },

  {
    name: 'Wedding Budget',

    amount: 30000,

    // type code here for "relation_one" field
  },

  {
    name: 'Exhibition Budget',

    amount: 10000,

    // type code here for "relation_one" field
  },

  {
    name: 'Fundraiser Budget',

    amount: 25000,

    // type code here for "relation_one" field
  },
];

const GuestsData = [
  {
    name: 'John Doe',

    email: 'john.doe@example.com',

    is_attending: true,

    meal_preference: 'standard',
  },

  {
    name: 'Jane Smith',

    email: 'jane.smith@example.com',

    is_attending: true,

    meal_preference: 'standard',
  },

  {
    name: 'Emily Johnson',

    email: 'emily.johnson@example.com',

    is_attending: true,

    meal_preference: 'vegetarian',
  },

  {
    name: 'Michael Brown',

    email: 'michael.brown@example.com',

    is_attending: true,

    meal_preference: 'standard',
  },

  {
    name: 'Sarah Davis',

    email: 'sarah.davis@example.com',

    is_attending: false,

    meal_preference: 'vegetarian',
  },
];

const SchedulesData = [
  {
    title: 'Annual Gala',

    start_time: new Date('2023-12-15T18:00:00Z'),

    end_time: new Date('2023-12-15T23:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field
  },

  {
    title: 'Corporate Meeting',

    start_time: new Date('2023-11-20T09:00:00Z'),

    end_time: new Date('2023-11-20T17:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field
  },

  {
    title: 'Wedding Reception',

    start_time: new Date('2023-10-10T16:00:00Z'),

    end_time: new Date('2023-10-10T22:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field
  },

  {
    title: 'Art Exhibition',

    start_time: new Date('2023-09-05T10:00:00Z'),

    end_time: new Date('2023-09-05T20:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field
  },

  {
    title: 'Charity Fundraiser',

    start_time: new Date('2023-08-25T19:00:00Z'),

    end_time: new Date('2023-08-25T23:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_many" field
  },
];

const VendorsData = [
  {
    name: 'Gourmet Catering Co.',

    contact_info: 'info@gourmetcatering.com',

    service_type: 'entertainment',

    rating: 4.8,
  },

  {
    name: 'Elegant Decorators',

    contact_info: 'contact@elegantdecor.com',

    service_type: 'catering',

    rating: 4.5,
  },

  {
    name: 'DJ Beats',

    contact_info: 'djbeats@musicmail.com',

    service_type: 'entertainment',

    rating: 4.7,
  },

  {
    name: 'Floral Arrangements Inc.',

    contact_info: 'flowers@floralarrangements.com',

    service_type: 'catering',

    rating: 4.6,
  },

  {
    name: 'Party Planners Ltd.',

    contact_info: 'events@partyplanners.com',

    service_type: 'catering',

    rating: 4.9,
  },
];

const VenuesData = [
  {
    name: 'Grand Ballroom',

    location: 'Downtown Hotel',

    capacity: 500,

    features: 'Stage, AV Equipment, Catering',

    is_booked: true,
  },

  {
    name: 'Rooftop Terrace',

    location: 'City Center',

    capacity: 150,

    features: 'Open Air, Scenic View',

    is_booked: true,
  },

  {
    name: 'Conference Hall A',

    location: 'Convention Center',

    capacity: 300,

    features: 'Projector, Sound System',

    is_booked: false,
  },

  {
    name: 'Garden Pavilion',

    location: 'Botanical Gardens',

    capacity: 200,

    features: 'Outdoor, Floral Decor',

    is_booked: true,
  },

  {
    name: 'Art Gallery',

    location: 'Cultural District',

    capacity: 100,

    features: 'Exhibition Space, Lighting',

    is_booked: false,
  },
];

// Similar logic for "relation_many"

async function associateBudgetWithEvent() {
  const relatedEvent0 = await Schedules.findOne({
    offset: Math.floor(Math.random() * (await Schedules.count())),
  });
  const Budget0 = await Budgets.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Budget0?.setEvent) {
    await Budget0.setEvent(relatedEvent0);
  }

  const relatedEvent1 = await Schedules.findOne({
    offset: Math.floor(Math.random() * (await Schedules.count())),
  });
  const Budget1 = await Budgets.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Budget1?.setEvent) {
    await Budget1.setEvent(relatedEvent1);
  }

  const relatedEvent2 = await Schedules.findOne({
    offset: Math.floor(Math.random() * (await Schedules.count())),
  });
  const Budget2 = await Budgets.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Budget2?.setEvent) {
    await Budget2.setEvent(relatedEvent2);
  }

  const relatedEvent3 = await Schedules.findOne({
    offset: Math.floor(Math.random() * (await Schedules.count())),
  });
  const Budget3 = await Budgets.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Budget3?.setEvent) {
    await Budget3.setEvent(relatedEvent3);
  }

  const relatedEvent4 = await Schedules.findOne({
    offset: Math.floor(Math.random() * (await Schedules.count())),
  });
  const Budget4 = await Budgets.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Budget4?.setEvent) {
    await Budget4.setEvent(relatedEvent4);
  }
}

async function associateScheduleWithVenue() {
  const relatedVenue0 = await Venues.findOne({
    offset: Math.floor(Math.random() * (await Venues.count())),
  });
  const Schedule0 = await Schedules.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Schedule0?.setVenue) {
    await Schedule0.setVenue(relatedVenue0);
  }

  const relatedVenue1 = await Venues.findOne({
    offset: Math.floor(Math.random() * (await Venues.count())),
  });
  const Schedule1 = await Schedules.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Schedule1?.setVenue) {
    await Schedule1.setVenue(relatedVenue1);
  }

  const relatedVenue2 = await Venues.findOne({
    offset: Math.floor(Math.random() * (await Venues.count())),
  });
  const Schedule2 = await Schedules.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Schedule2?.setVenue) {
    await Schedule2.setVenue(relatedVenue2);
  }

  const relatedVenue3 = await Venues.findOne({
    offset: Math.floor(Math.random() * (await Venues.count())),
  });
  const Schedule3 = await Schedules.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Schedule3?.setVenue) {
    await Schedule3.setVenue(relatedVenue3);
  }

  const relatedVenue4 = await Venues.findOne({
    offset: Math.floor(Math.random() * (await Venues.count())),
  });
  const Schedule4 = await Schedules.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Schedule4?.setVenue) {
    await Schedule4.setVenue(relatedVenue4);
  }
}

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Budgets.bulkCreate(BudgetsData);

    await Guests.bulkCreate(GuestsData);

    await Schedules.bulkCreate(SchedulesData);

    await Vendors.bulkCreate(VendorsData);

    await Venues.bulkCreate(VenuesData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateBudgetWithEvent(),

      await associateScheduleWithVenue(),

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('budgets', null, {});

    await queryInterface.bulkDelete('guests', null, {});

    await queryInterface.bulkDelete('schedules', null, {});

    await queryInterface.bulkDelete('vendors', null, {});

    await queryInterface.bulkDelete('venues', null, {});
  },
};
