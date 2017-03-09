exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', function (table) {
    table.increments('id').primary()
    table.string('activity')
    table.string('time')
    table.string('location')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('activities')
}
