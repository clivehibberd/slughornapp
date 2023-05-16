// Temporary Solution for customised queries
// as AppSync overwrites the queries and mutations files

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