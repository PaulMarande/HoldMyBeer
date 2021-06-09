function getChrono() {
	const text = document.querySelector('.horloge')

	const now = new Date().getTime();
	const contdownDate = new Date('June 9, 2021').getTime();

	const distanceBase = contdownDate - now;

	const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24))
	const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((distanceBase % (1000 * 60)) / (1000))

	text.innerHTML = "<div class='nbr_horloge'>" + days + "</div><div class='text_horloge'>jours</div> <div class='nbr_horloge'>" + hours + "</div><div class='text_horloge' >heures</div><div class='nbr_horloge'>" + minutes + "</div><div class='text_horloge' >minutes</div> <div class='nbr_horloge'>" + seconds + "</div><div class='text_horloge'>secondes</div>"
}


/*Les deux fonctions permettent de calculer combien de tepms il reste avant les dates indiquées en obtenant le nombre de secondes via la fonction getTime*/


function getChrono2() {
	const text = document.querySelector('.horloge2')

	const now = new Date().getTime();
	const contdownDate = new Date('June 19, 2021').getTime();

	const distanceBase = contdownDate - now;

	const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24))
	const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((distanceBase % (1000 * 60)) / (1000))

	text.innerHTML = "<div class='nbr_horloge'>" + days + "</div><div class='text_horloge'>jours</div> <div class='nbr_horloge'>" + hours + "</div><div class='text_horloge' >heures</div><div class='nbr_horloge'>" + minutes + "</div><div class='text_horloge' >minutes</div> <div class='nbr_horloge'>" + seconds + "</div><div class='text_horloge'>secondes</div>"

}

const countDownInterval = setInterval(() => {

	getChrono()
	getChrono2()

}, 1000);

