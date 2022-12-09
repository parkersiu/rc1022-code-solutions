select count("actorId") as "total", "name" as "genre"
  from "genres"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa'
  and "lastName" = 'Monroe'
  group by "genres"."name";
