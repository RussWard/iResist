const knex = require('../').knex;

module.exports.getFeedByEventId = (eventId, cb) => {
  knex('feed_items').select(['feed_items.event_id', 'feed_items.id', 'feed_items.text', 'feed_items.url', 'feed_items.credibility', 'feed_items.user_id', 'feed_items.username'])
    .innerJoin('events', 'events.id', 'feed_items.event_id')
    .where('events.id', eventId)
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err, null);
    });
};

module.exports.postItem = (item, cb) => {
  knex('feed_items')
    .insert({event_id: Number(item.eventId), text: item.text, url: item.url, credibility: Number(item.credibility), type: item.type, user_id: Number(item.userId), username: item.username})
    .returning('*')
    .then(insertedPost => {
      cb(null, insertedPost);
    })
    .catch(err => {
      cb(err, null);
    });
};


  






