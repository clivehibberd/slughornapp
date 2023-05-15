/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      externalid
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        externalid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const paramFilterNotes = /* GraphQL */ `
  query MyParameterisedFilter($name: String!) {
    listNotes(filter: { name: { contains: $name } }) {
      nextToken
      items {
        id
        name
        description
        image
        externalid
        createdAt
        updatedAt
      }
    }
  }
`;

export const filterNotes = /* GraphQL */ `
  query MyFirstFilter {
    listNotes(filter: { name: { contains: "PING" } }) {
      nextToken
      items {
        id
        name
        description
        image
        externalid
        createdAt
        updatedAt
      }
    }
  }
`;

export const searchByNameAndExternalId = /* GraphQL */ `
  query SearchByNameAndExternalId ($name: String!, $externalid: String!){
    listNotes(
      filter: {
        name: { contains: $name }
        and: { externalid: { contains: $externalid } }
      }
    ) {
      nextToken
      items {
        id
        name
        description
        image
        externalid
        createdAt
        updatedAt
      }
    }
  }
`;
