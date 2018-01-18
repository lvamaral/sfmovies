'use strict';

const Movie = require('../../../models/movie');

exports.create = (payload) => {
  payload = {
    id: payload.id,
    name: payload.title,
    release_year: payload.release_year
  };
  return new Movie().save(payload)
  .then((movie) => new Movie({ id: movie.id }).fetch());
};
