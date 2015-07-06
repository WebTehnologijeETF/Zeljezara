function checkForm() {
	
	 var email=document.getElementById("email").value;
	 var name=document.getElementById("name").value;
	 var tel=document.getElementById("tel").value;
	 var firma=document.getElementById("firma").value;
	 //varijable za textarea
	 var message=document.getElementById("message").value;
	 var maxlen = 500;
	 var minlen = 5;
 
	
	//validacija ime i prezime
	if (name == "") {
		document.getElementById("nameError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Niste unijeli ime i prezime</i>";
		return false;
	}
	
	
	if (!name.match(/^[a-zA-Z\s]+$/))
	{
		document.getElementById("nameError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Možete samo unijeti slova i razmak</i>";
		return false;
	}
	else document.getElementById("nameError").innerHTML = "";	
	
	
	
	//validacija emaila
	if (email == "") {
		document.getElementById("emailError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Niste unijeli email</i>";
		return false;
	}
	
	
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
	{
		document.getElementById("emailError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Email mora biti u sljedecem formatu your@email.com</i>";
		return false;
	}
	else document.getElementById("emailError").innerHTML = "";	

	
	
	
	//validacija poruke 
	if (message == "") {
		document.getElementById("messageError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Niste unijeli poruku</i>";
		return false;
	}
	else if(message.length > maxlen) { 
		document.getElementById("messageError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Unijeli ste više od 500 karaktera</i>";
		return false;
	}
	else if(message.length < minlen) { 
		document.getElementById("messageError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Unijeli ste manje od 5 karaktera</i>";
		return false;
	}
	else document.getElementById("messageError").innerHTML = "";	
	
	
	
	//validacija telefonskog broja 
    if(!tel.match(/^\d{9}$/) && tel.length>0)  
    {
		document.getElementById("telError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Tel. broj se mora sastojati od 9 brojeva</i>";
		return false;
	}  
	else document.getElementById("telError").innerHTML = "";
	
	//cross-validacija za broj telefona tj. ako unesemo broj firme moramo unijeti i naziv firme
	if(tel.length==9 && firma.length==0)
	{
		document.getElementById("firmaError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Pošto ste unijeli tel. broj, morati unijeti i ime firme</i>";
		return false;
	}
		
	
	
	//validacija imena firma
	if (!firma.match(/^[a-zA-Z\s]+$/) && firma.length>0)
	{
		document.getElementById("firmaError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Možete samo unijeti slova i razmak</i>";
		return false;
	}
	else document.getElementById("firmaError").innerHTML = "";	
	
	//cross-validacija tj. ako unesemo naziv firme moramo unijeti i broj telefona firme
	if(firma.length>0 && tel.length==0)
	{
		document.getElementById("telError").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>  <i>Pošto ste unijeli ime firme , morati unijeti i tel. broj firme</i>";
		return false;
	}
	
}


