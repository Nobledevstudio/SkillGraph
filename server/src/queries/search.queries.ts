export const globalSearchQuery = `
  MATCH (node)
  WHERE
    toLower(coalesce(node.name, '')) CONTAINS toLower($searchTerm)
    OR toLower(coalesce(node.title, '')) CONTAINS toLower($searchTerm)
  RETURN
    labels(node) AS types,
    node
  LIMIT 20
`;