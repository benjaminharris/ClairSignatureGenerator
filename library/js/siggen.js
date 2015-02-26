function generateSig(form){
	var name = toTitleCase(form.yourname.value);
	var jobtitle = toTitleCase(form.jobtitle.value);
	var division = form.division.value;
	var location = form.yourlocation.value;
	var cellphone = numberFormat(form.cellphone.value);
	var officephone = numberFormat(form.officephone.value);
	var directphone = numberFormat(form.directphone.value);
	var email = form.email.value;

	var website;
	var gMaps;

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

	var locations = {'Lititz': 'https://www.google.com/maps/place/Clair+Global/@40.172721,-76.310642,17z/data=!4m6!1m3!3m2!1s0x89c6185a74064885:0xea5c95fa43df511a!2sClair+Global!3m1!1s0x89c6185a74064885:0xea5c95fa43df511a', 
		'Bensalem': 'https://www.google.com/maps/place/Clair+Backline/@40.081645,-74.942416,17z/data=!4m7!1m4!3m3!1s0x89c14ce7c5945183:0xa94d876a2460c78b!2sClair+Backline!3b1!3m1!1s0x89c14ce7c5945183:0xa94d876a2460c78b', 
		'Burbank': 'https://www.google.com/maps/place/3086+N+Lima+St,+Burbank,+CA+91504/@34.206031,-118.346205,17z/data=!4m7!1m4!3m3!1s0x80c295aaaaa8594f:0x7f5e582d1b3e97e2!2s3086+N+Lima+St,+Burbank,+CA+91504!3b1!3m1!1s0x80c295aaaaa8594f:0x7f5e582d1b3e97e2', 
		'Cerritos': 'https://www.google.com/maps/place/Clair+Soundworx/@33.881877,-118.053494,17z/data=!4m6!1m3!3m2!1s0x80dd2cef7e5eac97:0x40d158e958fc93e0!2sClair+Soundworx!3m1!1s0x80dd2cef7e5eac97:0x40d158e958fc93e0', 
		'Nashville': 'https://www.google.com/maps/place/Clair+Brothers+Audio+Systems/@36.209443,-86.745574,17z/data=!4m6!1m3!3m2!1s0x886467fb5d98d7d9:0xe623e82cacbb73d8!2sClair+Brothers+Audio+Systems!3m1!1s0x886467fb5d98d7d9:0xe623e82cacbb73d8', 
		'New York': 'https://www.google.com/maps/place/17+Bertel+Ave,+Mt+Vernon,+NY+10550/@40.898853,-73.823417,17z/data=!4m7!1m4!3m3!1s0x89c28d2342946bb3:0xf6666d53bc5a9bdc!2s17+Bertel+Ave,+Mt+Vernon,+NY+10550!3b1!3m1!1s0x89c28d2342946bb3:0xf6666d53bc5a9bdc', 
		'Van Nuys': 'https://www.google.com/maps/place/Clair+Wireless+%26+Intercom+LLC/@34.209626,-118.475309,17z/data=!4m6!1m3!3m2!1s0x80c2975201091dd3:0xda005e67c0c26748!2sClair+Wireless+%26+Intercom+LLC!3m1!1s0x80c2975201091dd3:0xda005e67c0c26748', 
		'No Location': '#'};

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
		signature = signature + ("<a href='") + gMaps + ("'>") + location + ("</a>");
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

	signature = ("<div class='panel panel-default'><div class='panel-heading'>Signature Preview<br><b>Copy and paste the following signature into your email applications signature settings.</b></div><div class='panel-body sigResult'>") + signature + ("</div></div>");

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