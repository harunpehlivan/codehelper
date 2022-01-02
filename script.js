check();


$("#codeSelect").change(function() {
   console.log("Changed!");
	 check();
});



function copySnippet(id) {
	let data = document.getElementById(id);
	data.select();
	console.log(data)
	document.execCommand('copy');
	copyPopUp();
}

function copyPopUp() {
	document.getElementById('popup').style.display = 'block';
	setTimeout(function(){
		document.getElementById("popup").style.display = 'none';
	}, 2000);
}

function check() {
	var python = document.getElementById('python');
	var ruby = document.getElementById("ruby");
	var js = document.getElementById('js');
	var go = document.getElementById('go');
	var val = document.getElementById('codeSelect').value;
	if (val == 'python') {
		python.style.display = 'block';
		ruby.style.display = 'none';
		js.style.display = 'none';
	} else if (val == 'ruby') {
		python.style.display = 'none';
		ruby.style.display = 'block';
		js.style.display = 'none';
	} else if (val == 'javascript') {
		python.style.display = 'none';
		ruby.style.display = 'none';
		js.style.display = 'block';
	}
}
