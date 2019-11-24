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

input.onblur = function() {
	if (isNaN(input.value) || input.value < 0 || input.value > 100) {
	input.classList.add('invalid');
	}
};

input.onfocus = function() {
	if (this.classList.contains('invalid')) {
	this.classList.remove('invalid');
	error.innerHTML = "";
	}
};

var node = document.createElement('td');
node.innerHTML = 'Содержимое';
document.getElementById('tabl').getElementsByTagName('tr')[0].appendChild(node);