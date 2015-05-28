<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  <body>
    <h1>Novosti</h1>
    <?php
     $veza = new PDO("mysql:dbname=wt8;host=localhost;charset=utf8", "wt8user", "wt8pass");
     $veza->exec("set names utf8");
     $rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from novost order by vrijeme desc");
     if (!$rezultat) {
          $greska = $veza->errorInfo();
          print "SQL greška: " . $greska[2];
          exit();
     }


     foreach ($rezultat as $novost) {	
    	echo "<h1>" . $novost['naslov'] . "</h1>";
        echo "<small>" .$novost['tekst']. "</small>";
    	echo "<p>" .$novost['autor']. "</p>";
    	echo "<small>" . date("d.m.Y. (h:i)", $novost['vrijeme2']) . "</small><br><br>";
}
    ?>
  </body>
</html>