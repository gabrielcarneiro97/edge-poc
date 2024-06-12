import { createClient } from "edgedb";
import { insertMovie } from "./repository/movie/insertMovie.query";
import { insertPerson } from "./repository/movie/insertPerson.query";
import { movieAddCast } from "./repository/movie/movieAddCast.query";

const client = createClient();

await insertMovie(client, { title: "Arrival", year: 2016 });
await insertMovie(client, { title: "Blade Runner 2049", year: 2017 });

await insertPerson(client, { name: "Amy Adams" });
await insertPerson(client, { name: "Jeremy Renner" });
await insertPerson(client, { name: "Ryan Gosling" });
await insertPerson(client, { name: "Harrison Ford" });
await insertPerson(client, { name: "Denis Villeneuve" });

await movieAddCast(client, {
  title: "Arrival",
  personName: "Amy Adams",
  role: "Actress",
});
await movieAddCast(client, {
  title: "Arrival",
  personName: "Jeremy Renner",
  role: "Actor",
});
await movieAddCast(client, {
  title: "Arrival",
  personName: "Denis Villeneuve",
  role: "Director",
});
await movieAddCast(client, {
  title: "Blade Runner 2049",
  personName: "Ryan Gosling",
  role: "Actor",
});
await movieAddCast(client, {
  title: "Blade Runner 2049",
  personName: "Harrison Ford",
  role: "Actor",
});
await movieAddCast(client, {
  title: "Blade Runner 2049",
  personName: "Denis Villeneuve",
  role: "Director",
});
