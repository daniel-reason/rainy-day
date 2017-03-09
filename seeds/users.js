exports.seed = function (knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        knex('activities').insert({id: 99901, activity: 'Running', time: '30 mins'}),
        knex('activities').insert({id: 99902, activity: 'Read a book', time: '45 mins'}),

      ]);
    });
};
