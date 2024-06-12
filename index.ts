import { createClient } from "edgedb";
import { getMovieByTitle } from "./repository/movie/getMovieByTitle.query";
import { getPersonByName } from "./repository/movie/getPersonByName.query";

const client = createClient();

const arrival = await getMovieByTitle(client, { title: "Arrival" });
console.log(arrival);

const bladeRunner2049 = await getMovieByTitle(client, {
  title: "Blade Runner 2049",
});
console.log(bladeRunner2049);

const denisVilleneuve = await getPersonByName(client, {
  name: "Denis Villeneuve",
});
console.log(denisVilleneuve);

const ryanGosling = await getPersonByName(client, { name: "Ryan Gosling" });
console.log(ryanGosling);

const harrisonFord = await getPersonByName(client, {
  name: "Harrison Ford",
});
console.log(harrisonFord);

const amyAdams = await getPersonByName(client, { name: "Amy Adams" });
console.log(amyAdams);

const jeremyRenner = await getPersonByName(client, { name: "Jeremy Renner" });
console.log(jeremyRenner);
