const aspect1 = document.querySelector('#aspect-number-1');
const aspect2 = document.querySelector('#aspect-number-2');
const resolution1 = document.querySelector('#res1');
const resolution2 = document.querySelector('#res2');

aspect1.addEventListener('change', () => calcAspect('a1'));
aspect2.addEventListener('change', () => calcAspect('a2'));
resolution1.addEventListener('change', () => calcAspect('r1'));
resolution2.addEventListener('change', () => calcAspect('r2'));

console.log('hey');

function calcAspect(s) {
	if (resolution1.value === '' && resolution2.value === '') return;

	console.log('Calculating...');
	console.log(`Width: ${resolution1.value}`);
	console.log(`Height: ${resolution2.value}`);
	console.log(`Edited: ${s}`);

	const resolutionNumber =
		s === 'r1' ? parseInt(resolution1.value) : parseInt(resolution2.value);

	const out =
		(resolutionNumber / parseInt(aspect1.value)) * parseInt(aspect2.value);

	if (s === 'r1') {
		resolution2.value = Math.round(out);
	} else {
		resolution1.value = Math.round(out);
	}
}
