select Movie { id, title, year, casting: { id, name, @role } } filter .title = <str>$title;
