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
  Mutation: {
    // increment the number of views for a track
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Views incremented successfully for track ${id}`,
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
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
