
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Tutorijal 8, Uvod</title>
  </head>
  <body>
    <h1>Komentari</h1>

	<form action="BoxKom1.php" method="POST">
	Autor: <input type="autor" name="autor" ><br>
	Email: <input type="email" name="email"><br>
	Komentar: <textarea name="tekst" cols="50" rows="2"></textarea><br>
	<input type="submit" value="Submit">
	</form>

    <?php
     $veza = new PDO("mysql:dbname=wt8;host=localhost;charset=utf8", "wt8user", "wt8pass");
     $veza->exec("set names utf8");
     $rezultat = $veza->query("select id, novost, tekst,autor, UNIX_TIMESTAMP(vrijeme) vrijeme2, email from komentar where id=".$_GET['novost']." order by vrijeme");
     if (!$rezultat) {
          $greska = $veza->errorInfo();
          print "SQL greška: " . $greska[2];
          exit();
     }

     foreach ($rezultat as $komentar) {
          print date("d.m.Y. (h:i)", $komentar['vrijeme2'])." ".$komentar['autor']." ".$komentar['email']." ".$komentar['tekst']."<br>";  
    
     }
    ?>
  </body>
</html>
