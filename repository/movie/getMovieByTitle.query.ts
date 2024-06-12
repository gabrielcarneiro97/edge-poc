// GENERATED by @edgedb/generate v0.5.3

import type {Executor} from "edgedb";

export type GetMovieByTitleArgs = {
  readonly "title": string;
};

export type GetMovieByTitleReturns = Array<{
  "id": string;
  "title": string | null;
  "year": number | null;
  "casting": Array<{
    "id": string;
    "name": string | null;
    "@role": string | null;
  }>;
}>;

export function getMovieByTitle(client: Executor, args: GetMovieByTitleArgs): Promise<GetMovieByTitleReturns> {
  return client.query(`\
select Movie { id, title, year, casting: { id, name, @role } } filter .title = <str>$title;`, args);

}
