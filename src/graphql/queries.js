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
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      first_name
      last_name
      person_id
      external_id
      gender
      party
      eyecolor
      agegroup
      height
      build
      hair
      hairstyle
      facialhair
      ethnicity
      glasses
      dress
      persontype
      image
      uri
      createdAt
      updatedAt
    }
  }
`;
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        person_id
        external_id
        gender
        party
        eyecolor
        agegroup
        height
        build
        hair
        hairstyle
        facialhair
        ethnicity
        glasses
        dress
        persontype
        image
        uri
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
