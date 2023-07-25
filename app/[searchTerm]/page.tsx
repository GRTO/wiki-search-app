import React from "react";
import getWikiResult from "@/lib/getWikiResult";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResult(props: Props) {
  const {
    params: { searchTerm },
  } = props;

  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  console.log("Data", data);
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <p key={result.pageid}>{JSON.stringify(result)}</p>
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
