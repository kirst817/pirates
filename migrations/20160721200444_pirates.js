
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table){

    table.increments().primary();
    table.string('name');
    table.string('poison');
    table.string('accessory');
    table.string('image_url');
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pirates')
};
