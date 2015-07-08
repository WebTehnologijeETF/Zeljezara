function ProvjeriMjesto()
{
	var xmlhttp = new XMLHttpRequest();
	var opcina = document.getElementById("NazivOpcine").value;
	var mjesto = document.getElementById("NazivMjesta").value;
	
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
			var objekat = JSON.parse(xmlhttp.responseText);
			document.getElementById("znak").innerHTML = " ";
			document.getElementById("greska_mjesto").innerHTML = " ";
			
			if(typeof objekat.ok === "undefined" && typeof objekat.greska !== "undefined") {
				document.getElementById("znak").innerHTML = "<img src='IMAGES/warning.png' width='16' height='16'>"; 			
				document.getElementById("greska_mjesto").innerHTML = objekat.greska;
				}
		}
	}

	xmlhttp.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina=" + opcina + "&mjesto=" + mjesto  ,true);
	xmlhttp.send();
}


function Provjeri()
{
	var opcina = document.getElementById("NazivOpcine").value;
	var mjesto = document.getElementById("NazivMjesta").value;
	var greska = document.getElementById("greska_mjesto").innerHTML;
	if(opcina != "" && mjesto != "" && greska === " ") {
		window.alert("Mjesto postoji");
		return true;
	}
	
	else return false;
}