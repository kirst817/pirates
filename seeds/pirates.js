
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pirates').del()
    .then(function () {
      return Promise.all([

        // Inserts seed entries
        knex('pirates').insert({name: 'Anne Bonney', poison: 'Rum', accessory: 'hot temper', image_url: 'http://previews.123rf.com/images/clairev/clairev1004/clairev100400013/6839749-Pretty-pirate-girl-with-parrot-illustration--Stock-Vector-cartoon.jpg'}),
        knex('pirates').insert({name: 'One Eyed Willie', poison: 'Whiskey', accessory: 'eye patch', image_url: 'http://images.clipartpanda.com/pirate-clip-art-pirate.gif'}),
        knex('pirates').insert({name: 'Blackbeard', poison: 'Rum', accessory: 'peg leg', image_url: 'http://www.piratecharters.org/pirate_skull_and_bones.png'})

      ]);
    });
};
