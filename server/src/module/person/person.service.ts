import { runQuery } from "../../db/query.ts";
import { getPeopleQuery } from "../../queries/people.queries.ts";


export const getPeople = async () => {
  const records = await runQuery(getPeopleQuery);

  return records.map((record) => ({
    id: record.get("id"),
    name: record.get("name"),
    experienceLevel: record.get("experienceLevel"),
    location: record.get("location"),
  }));
};