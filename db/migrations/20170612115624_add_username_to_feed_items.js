exports.up = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.string('username', 200).nullable();
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.table('feed_items', function(t) {
    t.dropColumn('username');
  });
};
