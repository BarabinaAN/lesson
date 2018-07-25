var main_popup = document.getElementById("main-popup");
var name = document.getElementById("form");
var submit = document.getElementsByTagName("input");
var age = submit[0];


console.log(name);
console.log(submit);


function checkAge(){
	var bool = age.checked;

	if (bool == true) {
			subMail();
	}
	else alert("Увы, доступ запрещен");

}


function subMail(){
	var subscribe = confirm("Вы уже подбисаны на рассылку наших новостей?");

	if (subscribe == true) {
			alert("Поздравляем! Вы теперь с нами!");
			
			main_popup.style.display = "none";
			main.style.display = "block";
			console.log("пользователю разрешен доступ");
	}
	else alert("Нам очень жаль, некоторые функции сайта вам будут не доступны");

}


submit[2].addEventListener("click", checkAge);
