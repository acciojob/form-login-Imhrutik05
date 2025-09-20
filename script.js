function getFormvalue() {

	const fnameInput = document.querySelector('input[name="fname"]').value.trim();
	const lnameInput = document.querySelector('input[name="lname"]').value.trim();
	const btn = document.querySelector('input[value="Submit"]'); 

	alert(`${fnameInput} ${lnameInput}`);
}
