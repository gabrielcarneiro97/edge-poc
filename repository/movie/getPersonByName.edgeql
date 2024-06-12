select Person { id, name, appears_in: { id, title, year, @role } } filter .name = <str>$name;
