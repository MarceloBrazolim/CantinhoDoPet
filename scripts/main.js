function showMessage(){ //mensagem muito criativa e legal mas temporaria, apenas pro menu não ficar sem função
	alert("yikes");
}

var formNews = document.getElementById("formNovidades"); //link com o rodapé do index.html
formNews.onsubmit = validadeNewsletter;

var txtNomeNews = document.getElementById("inputNome"); //link com nome da newsletter no index
var txtEmailNews = document.getElementById("inputEmail"); //e email
txtNomeNews.onchange = clearAlert; //limpa o alerta caso nome/email forem modificados
txtEmailNews.onchange = clearAlert; // "

function validadeNewsletter(){
	var txtNome = document.getElementById("inputNome");
	var txtEmail = document.getElementById("inputEmail");
	
	if(txtNome.value == "" || txtEmail.value == ""){ //se campo de nome OU email estiverem vazios
	var div = document.getElementById("formNovidadesAlert");
	div.style.display = "block"; //mostra alerta
		return false;
	}
	
	return true;
}

function clearAlert(){
	var div = document.getElementById("formNovidadesAlert");
	div.style.display = "none"; //esconde alerta
}