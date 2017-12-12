export class RandomGenerator {
	static randomInteger () {
		return Math.ceil(Math.random() * 100)
	}

	static randomRange (min, max) {
		min = Number(min.value); max = Number(max.value);
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
}