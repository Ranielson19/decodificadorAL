const criptografar = document.getElementById("Criptografar");
const desencriptar = document.getElementById("Descriptografar");
const copy = document.getElementById("copiar");
const textoInicial = document.getElementById("textoInput");
const textoNenhuma = document.getElementById("textoNenhuma");
const nenhuma = document.getElementById("nenhuma");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")

const remplace = (newvalue) => {
	textoNenhuma.innerHTML = newvalue;
	textoNenhuma.classList.add("modificar");
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Digite seu texto";
	nenhuma.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("ocultar");
}

const reset = () => {
	textoInicial.value = "";
	textoInicial.style.height = "auto";
	textoNenhuma.innerHTML = "";

	textoNenhuma.classList.remove("modificar");
	nenhuma.classList.remove("ocultar");
	textoNenhuma.placeholder = "Nenhuma mensagem encontrada";
	textInfo.classList.remove("ocultar")
	copy.classList.add("ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"],
];

criptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Digite seu texto");
		reset();
	};
});

desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Digite seu texto");
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textoNenhuma;
	texto.select();
	document.execCommand('copy');

	alert("Copiado para a área de transferência");
	reset();
});

textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
