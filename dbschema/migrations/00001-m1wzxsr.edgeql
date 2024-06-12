CREATE MIGRATION m1wzxsrq7z6iiy77mrqddr3f72wqjh5lgos6abc7bsturnj7f3jnva
    ONTO initial
{
  CREATE TYPE default::Movie {
      CREATE PROPERTY title: std::str;
      CREATE PROPERTY year: std::int32;
  };
  CREATE TYPE default::Person {
      CREATE PROPERTY name: std::str;
  };
  ALTER TYPE default::Movie {
      CREATE MULTI LINK casting: default::Person {
          CREATE PROPERTY role: std::str;
      };
  };
  ALTER TYPE default::Person {
      CREATE LINK appears_in := (.<casting[IS default::Movie]);
  };
};
