/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Imports
import '../sass/main.scss';
import { secret } from './secret';
import { RandomGenerator } from './RandomGenerator';
import Example from '../vue/Example.vue';

window.secret = secret;

window.$ = window.jQuery = require('jquery');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
window.Vue = require('vue/dist/vue.js');
var app = new Vue({
	el: '#app',
	components: {Example},
	data: {
		message: 'Hello world. Welcome to the Vue!'
	}
});

// Variables
const outputTxt      = document.querySelector('#outputTxt');
const btnRdmInt      = document.querySelector('#randomInt');
const btnRdmRange    = document.querySelector('#randomRange');
let min              = document.querySelector('#min');
let max              = document.querySelector('#max');
let classRange       = document.getElementsByClassName('nRanges');
// Methods
const outputRdmInt   = () => {
	outputTxt.textContent = RandomGenerator.randomInteger();
};
const outputRdmRange = () => {
	outputTxt.textContent = RandomGenerator.randomRange(min, max);
};

$(document).ready(function () {
	// Event Listeners
	secret.button.addEventListener('click', secret.toggleState);
	btnRdmInt.addEventListener('click', outputRdmInt);
	btnRdmRange.addEventListener('click', outputRdmRange);
	min.addEventListener('blur', () => {
		min.value = document.querySelector('#min').value;
	});
	max.addEventListener('blur', () => {
		max.value = document.querySelector('#max').value;
	});
});