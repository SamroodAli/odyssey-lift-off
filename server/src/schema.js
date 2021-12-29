const { gql } = require('apollo-server');

const typeDefs = gql`
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
`

module.exports = typeDefs;