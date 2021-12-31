const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      // returns an array of tracks that will be used to populate the home page
      return dataSources.trackAPI.getTracksForHome();
    },
    // Get a single track by id, for the track page
    track: (_, { trackId }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(trackId);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      // returns the author of a track
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
