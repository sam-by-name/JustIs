exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('landing').del()
    .then(() => {
      // Inserts seed entries
      return knex('landing').insert([
        {id: 1, title: 'Just Is', sub: 'In between infinity and you lies me', start: 'Press me'}
      ])
    })
}
