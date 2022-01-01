const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of modules that teaches about a  specific topic"
  type Track {
    "The track's title"
    id: ID!
    "The track's title"
    title: String!
    "The track's description"
    author: Author!
    "The track's image thumbail"
    thumbnail: String
    "The track's length"
    length: Int
    "The total number of track's modules"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The number of times a track has been completed"
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiple modules compose a track"
  type Module {
    "The module's id"
    id: ID!
    "The module's title"
    title: String!
    "The module' length in minutes"
    length: Int
  }

  "An author is The creator of a track"
  type Author {
    "The author's id"
    id: ID!
    "The author's name"
    name: String!
    "The Author's picture url"
    photo: String
  }
`;

module.exports = typeDefs;
