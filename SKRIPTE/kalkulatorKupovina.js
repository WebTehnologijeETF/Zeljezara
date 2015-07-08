var prices = ['', 34000, 5800, 1800, 1800, 1100, 62400];
var i=0;  
var cell2;

function selectChange(selection) {
	cell2.innerHTML = prices[selection.selectedIndex];
}

function addTable(){
    i++;

	var table=document.getElementById("shopTable");
	{
		var row = table.insertRow(1);
		var cell1= row.insertCell(0);
			cell2= row.insertCell(1);
		var cell3= row.insertCell(2);
		
		cell1.innerHTML= "<select id=\"selectMenu\" " +
			   "onchange=\"selectChange(this)\">" +
			   "<option value=''>Odaberi proizvod:</option>" +
			   "<option value='1'>Lonac za trosku</option>" +
			   "<option value='2'>Kapa za kokile</option>" +
			   "<option value='3'>Livna ploča</option>" +
			   "<option value='4'>Umetak za livnu ploču</option>"+
			   "<option value='5'>Obrađena kokila</option>"+
			   "<option value='6'>Neobrađena kokila</option>"+
			   "</select>";

		cell3.innerHTML= "<input type='text' id='amount' value='' />";
	}
}

function calculate(){
	var table=document.getElementById('shopTable');
	var count = table.getElementsByTagName('tr').length;
	if (count > 0)
	  {
		var total = 0;
		for(var i = 1; i < count; i++)
		  {
			total += table.rows[i].cells[1].innerHTML * table.rows[i].cells[2].children[0].value;
		  }
	  }

	alert(total);
}