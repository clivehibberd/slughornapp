/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
      haircolor
      hairstyle
      facialhair
      ethnicity
      glasses
      dress
      persontype
      image
      uri
      constituency
      createdAt
      updatedAt
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
      haircolor
      hairstyle
      facialhair
      ethnicity
      glasses
      dress
      persontype
      image
      uri
      constituency
      createdAt
      updatedAt
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
      haircolor
      hairstyle
      facialhair
      ethnicity
      glasses
      dress
      persontype
      image
      uri
      constituency
      createdAt
      updatedAt
    }
  }
`;
