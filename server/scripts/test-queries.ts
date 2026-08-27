import { getSkillsQuery } from "../src/queries/skills.queries.ts";
import { runQuery } from "../src/db/query.ts";

const records = await runQuery(getSkillsQuery);

console.table(
    records.map((record) => {
        const skill = record.get("skill");

        return {
            id: skill.properties.id,
            name: skill.properties.name,
            category: skill.properties.category,
        };
    }),
);