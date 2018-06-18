exports.up = (knex, Promise) => {
  return knex.schema.createTable('landing', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('sub')
    table.string('start')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('landing')
}
