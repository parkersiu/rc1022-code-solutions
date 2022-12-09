select "countries"."name" as "countryName",
  count("countryId") as "total"
  from "countries"
  join "cities" using ("countryId")
  group by "countryId"
  order by "countryName";
