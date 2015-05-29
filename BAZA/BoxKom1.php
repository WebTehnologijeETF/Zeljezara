<?php

 mysql_connect("localhost","wt8user","wt8pass");
 mysql_select_db("wt8");
 
 $autor = $_POST["autor"];
 $email = $_POST["email"];
 $tekst = $_POST["text"];

 $comment_length = strlen($tekst);

 if($comment_length > 100)
 {
     header("location: pristup_bazi.php?error=1");
 }
 else
 {
     mysql_query("INSERT INTO komentar VALUES('','$autor','$email','$tekst')");
     header("location: pristup_bazi.php");
}

?>