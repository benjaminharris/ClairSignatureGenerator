function generateSig(form){
	var name = toTitleCase(form.yourname.value);
	var jobtitle = toTitleCase(form.jobtitle.value);
	var division = form.division.value;
	var location = form.yourlocation.value;
	var cellphone = numberFormat(form.cellphone.value);
	var officephone = numberFormat(form.officephone.value);
	var directphone = numberFormat(form.directphone.value);
	var email = form.email.value;

	var website

	switch(division) {
    case "CLAIR Global":
        website = "http://www.clairglobal.com";
        break;
    case "CLAIR Broadcast":
        website = "http://clairglobal.com/broadcast";
        break;
    case "CLAIR Backline":
        website = "http://clairbackline.com";
        break;
    case "Pacifico Television Engineering":
        website = "http://pacificobroadcast.com";
        break;
    default:
        website = "http://clairglobal.com";
	} 

	var signature

	if (email != "") {
		signature = ("<a href='mailto:") + email + ("'>") + name + ("</a>");
	} else {
		signature = name;
	}
	if (jobtitle != "") {

		if (name != "") {
			signature = signature + (" | ");
		}
		signature = signature + jobtitle;
	}
	if (name != "" || jobtitle != ""){
		signature = signature + ("<br>");
	}
	signature = signature + ("<a href='") + website + ("'>") + division + ("</a>");

	if (location != "" && location != "No Location") {
		if (division != "") {
			signature = signature + (" | ");
		}
		signature = signature + location;
	}

	signature = signature + ("<br>");

	if (cellphone != "") {
		signature = signature + ("c: ") + cellphone;	
	}
	if (officephone !="") {
		if (cellphone != ""){
			signature = signature + (" | ");
		}
		signature = signature + ("p: ") + officephone;
	}
	if (directphone !="") {
		if (cellphone != "" || officephone != ""){
			signature = signature + (" | ");
		}
		signature = signature + ("d: ") + directphone;
	}

	if (form.legal.checked == true){
		signature = signature + ("<br><br>This email and any attachments may contain privileged and confidential information and are solely for the use of the sender's intended recipient(s). If you received this email in error, please notify the sender by reply email and delete all copies and attachments. Thank you.");
	}

	document.getElementById('result').innerHTML = signature;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function numberFormat(number) {
	number = number.replace(/[^\/\d]/g,'');
	while (number.length > 10) {
		number = number.substr(1);
	}
	if (number != ""){
		number = number.substr(0, 3) + ' ' + number.substr(3, 3) + ' ' + number.substr(6);
		number = "+1 " + number;
	}

	return number;
}