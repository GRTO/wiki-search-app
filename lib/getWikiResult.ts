export default async function getWikiResult(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: "query",
        generator: "search",
        gsrsearch: searchTerm,

    });
  return null
}
