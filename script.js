$('.picker').datetimepicker({
	timepicker: false,
	datepicker: true,
	format: 'Y-m-d',
	value: 'moment'
})

function agreeForm(f) {
if (f.agree.checked) f.submit.disabled = 0 
else f.submit.disabled = 1
}

var numbers = Array.from(document.querySelectorAll(".num"));

numbers.forEach(function(input) {
	input.onblur = function(event) {
		if (isNaN(input.value) || input.value < 0 || input.value > 100) {
		input.classList.add('invalid');
		input.value = 0;
		event.stopImmediatePropagation();
		}
	};
})

numbers.forEach(function(input) {
input.onfocus = function() {
	if (this.classList.contains('invalid')) {
	this.classList.remove('invalid');
	// error.innerHTML = "";
	}
};
})

var node = document.createElement('td');
node.innerHTML = 'Содержимое';
document.getElementById('tabl').getElementsByTagName('tr')[0].appendChild(node);

var total1 = document.getElementById('total1');
var total2 = document.getElementById('total2');
var matches1 = Array.from(document.querySelectorAll(".average1"));
var matches2 = Array.from(document.querySelectorAll(".average2"));

matches1.forEach(function(mean) {
	mean.onchange = function() {
		var sum = matches1.reduce((cur, elem) => +cur + +elem.value, 0);
		total1.innerHTML = sum / matches1.length;
	}
});

matches2.forEach(function(mean) {
	mean.onchange = function() {
		var sum = matches2.reduce((cur, elem) => +cur + +elem.value, 0);
		total2.innerHTML = sum / matches2.length;
	}
});
