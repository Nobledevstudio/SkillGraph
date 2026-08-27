export const getPeopleQuery = `
  MATCH (person:Person)

  RETURN
    person.id AS id,
    person.name AS name,
    person.experienceLevel AS experienceLevel,
    person.location AS location

  ORDER BY person.name
`;