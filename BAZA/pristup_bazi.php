<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Tutorijal 8, Uvod</title>
  </head>
  <body>
   
    <?php
    if(isset($_GET['novost'])){
      $veza = new PDO("mysql:dbname=wt8;host=localhost;charset=utf8", "wt8user", "wt8pass");
      $veza->exec("set names utf8");
      $rezultat1 = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from novost where id=".$_GET['novost']." order by vrijeme desc");
      while ($novost = $rezultat1->fetch(PDO::FETCH_ASSOC)) {
	    echo "<h1>" . $novost['naslov'] . "</h1>";
	    echo "<small>" .$novost['tekst']. "</small>";
	    echo "<p>" .$novost['autor']. "</p>";
	    echo "<small>" . date("d.m.Y. (h:i)", $novost['vrijeme2']) . "</small><br>";
         
      $rezultat2 = $veza->query("select id,text, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, email from komentar where novost = ".$_GET['novost']);
      echo '<br>Komentari:<br>';
 
      while ($komentar = $rezultat2->fetch(PDO::FETCH_ASSOC)) {
             echo "string";
             echo '<b>'.$komentar['autor'].':</b> '.$komentar['text'].'<br>'.$komentar['email'].'<br><small>'.date("d.m.Y. (h:i)", $komentar['vrijeme2']).'</small><br>';                      
          }
        }
      }
   
    else{
     $veza = new PDO("mysql:dbname=wt8;host=localhost;charset=utf8", "wt8user", "wt8pass");
     $veza->exec("set names utf8");
     $rezultat1 = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from novost order by vrijeme");
     while ($novost = $rezultat1->fetch(PDO::FETCH_ASSOC)) {
	    echo "<h1>" . $novost['naslov'] . "</h1>";
	    echo "<small>" .$novost['tekst']. "</small>";
	    echo "<p>" .$novost['autor']. "</p>";
	    echo "<small>" . date("d.m.Y. (h:i)", $novost['vrijeme2']) . "</small><br>";
         

          $rezultat2 = $veza->prepare("select count(*) from komentar where novost = ?");
          $broj_komentara = 0;
            if ($rezultat2->execute(array($novost['id']))) {
                while ($row = $rezultat2->fetch()) {
                  $broj_komentara = $row['count(*)'];
                }
            }
          if($broj_komentara == 0)
            print '<br>Nema komentara';
 
          else
          print '<small><a href="komentari.php?novost='.$novost['id'].'">' .$broj_komentara.'</a>  komentara</small>';
     }}
    ?>
 
  </body>
