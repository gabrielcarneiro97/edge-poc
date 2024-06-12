update Movie filter .title = <str>$title set { casting += (select Person { @role := <str>$role } filter .name = <str>$personName) }
