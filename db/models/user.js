const knex = require('knex')(require('../../knexfile'));

module.exports = (id, cb) => {
  knex.select().from('users').where('id', id)
    .then(data => {
      cb(null, data);
    })
    .catch(e => {
      cb(e, null);
    })
}