import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      length

      author {
        id
        name
        photo
      }
      thumbnail
      modulesCount
      description
      numberOfViews
      modules {
        id
        length
        title
      }
    }
  }
`;

const Track = ({ trackId }) => {
  return <Layout></Layout>;
};

export default Track;
