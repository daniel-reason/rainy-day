exports.seed = function (knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        knex('activities').insert({activity: 'Practice Mindfulness', time: '5 mins', location: 'out'}),
        knex('activities').insert({activity: 'People Watch', time: '5 mins', location: 'out'}),
        knex('activities').insert({activity: 'Walk the Dog, if You Have a Dog. Otherwise Borrow Dog.', time: '10 mins', location: 'out'}),
        knex('activities').insert({activity: 'Look at Tree and Listen to Birds', time: '10 mins', location: 'out'}),
        knex('activities').insert({activity: 'Busk for Money', time: '15 mins', location: 'out'}),
        knex('activities').insert({activity: 'Go Window Shopping', time: '15 mins', location: 'out'}),
        knex('activities').insert({activity: 'Walk Around the Block', time: '30 mins', location: 'out'}),
        knex('activities').insert({activity: 'Go Running', time: '30 mins', location: 'out'}),
        knex('activities').insert({activity: 'Prolonged Nudie Dash', time: '45 mins', location: 'out'}),
        knex('activities').insert({activity: 'Go for a Drive', time: '45 mins', location: 'out'}),
        knex('activities').insert({activity: 'Ride a Horse', time: '60 mins', location: 'out'}),
        knex('activities').insert({activity: 'Dig a Big Hole', time: '60 mins', location: 'out'}),

        knex('activities').insert({activity: 'Draw Something', time: '5 mins', location: 'in'}),
        knex('activities').insert({activity: 'Practice Mindfulness', time: '5 mins', location: 'in'}),
        knex('activities').insert({activity: 'Play Guitar', time: '10 mins', location: 'in'}),
        knex('activities').insert({activity: 'Work on Cat Tinder', time: '10 mins', location: 'in'}),
        knex('activities').insert({activity: 'Brush Hair or Beard', time: '15 mins', location: 'in'}),
        knex('activities').insert({activity: 'Learn Chinese', time: '15 mins', location: 'in'}),
        knex('activities').insert({activity: 'Practice Coding', time: '30 mins', location: 'in'}),
        knex('activities').insert({activity: 'Read a book', time: '30 mins', location: 'in'}),
        knex('activities').insert({activity: 'Eat at a Cafe', time: '45 mins', location: 'in'}),
        knex('activities').insert({activity: 'Read a book', time: '45 mins', location: 'in'}),
        knex('activities').insert({activity: 'Bake a Cake', time: '60 mins', location: 'in'}),
      ]);
    });
};
