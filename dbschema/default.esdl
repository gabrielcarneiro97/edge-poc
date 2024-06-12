module default {
  type Movie {
    title: str;
    year: int32;
    multi casting: Person {
      role: str;
    }
  }

  type Person {
    name: str;
    appears_in := .<casting[is Movie];
  }
}
