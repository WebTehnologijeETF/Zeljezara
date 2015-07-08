function otvori_stranicu(stranica){
	
    var ajax = new XMLHttpRequest;

    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            document.open();
            document.write(ajax.responseText);
            document.close();
        }
		if (ajax.readyState == 4 && ajax.status == 404){
			document.open();
            document.write("Greska: nepoznat URL");
            document.close();
		}
    }
    ajax.open("GET", stranica, true);
    ajax.send();
}
