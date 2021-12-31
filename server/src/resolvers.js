const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      // returns an array of tracks that will be used to populate the home page
      return dataSources.trackAPI.getTracksForHome();
    },
    // Get a single track by id, for the Track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      // returns the author of a track
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, args, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
