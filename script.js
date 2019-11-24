var total1 = document.getElementById('total1');
var total2 = document.getElementById('total2');
var matches1 = Array.from(document.querySelectorAll(".average1"));
var matches2 = Array.from(document.querySelectorAll(".average2"));

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
		}
	};
})

function createInput(attrs) { 
	const input = document.createElement('input'); 
	attrs.forEach((item) => { 
		input.setAttribute(item.name, item.value) 
	}); 
	return input; 
} 

but.onclick = function() {
	var d1 = document.getElementById('last'); 

	var inputDate = createInput([ 
		{ 
			name: 'type', 
			value: 'text' 
		}, 
		{ 
			name: 'class', 
			value: 'form-control datetimepicker-input picker' 
		} 
	]) 
		
	var inputAverage1 = createInput([ 
		{ 
			name: 'type', 
			value: 'text' 
		}, 
		{ 
			name: 'class', 
			value: 'form-control average1 num' 
		} 
	]) 
		
	matches1.push(inputAverage1) 
		
	inputAverage1.onchange = function() { 
		var sum = matches1.reduce((cur, elem) => +cur + +elem.value, 0); 
		total1.innerHTML = sum / matches1.length; 
	} 
		
	inputAverage1.onblur = function (event) { 
		if (isNaN(inputAverage1.value) || inputAverage1.value < 0 || inputAverage1.value > 100) { 
			inputAverage1.classList.add('invalid'); 
			inputAverage1.value = 0; 
			event.stopImmediatePropagation(); 
		} 
	}; 
		
	inputAverage1.onfocus = function() { 
		if (this.classList.contains('invalid')) { 
			this.classList.remove('invalid'); 
		} 
	}; 
		
	var inputAverage2 = createInput([ 
		{ 
			name: 'type', 
			value: 'text' 
		}, 
		{ 
			name: 'class', 
			value: 'form-control average2 num' 
		} 
	]) 
		
	matches2.push(inputAverage2) 
		
	inputAverage2.onchange = function() { 
		var sum = matches2.reduce((cur, elem) => +cur + +elem.value, 0); 
		total2.innerHTML = sum / matches2.length; 
	} 
		
	inputAverage2.onblur = function(event) { 
		if (isNaN(inputAverage2.value) || inputAverage2.value < 0 || inputAverage2.value > 100) { 
			inputAverage2.classList.add('invalid'); 
			inputAverage2.value = 0; 
			event.stopImmediatePropagation(); 
		} 
	}; 
		
	inputAverage2.onfocus = function () { 
		if (this.classList.contains('invalid')) { 
			this.classList.remove('invalid'); 
		} 
	}; 

	d1.insertAdjacentHTML('beforebegin', `<tr class="fo">
	<td class="blank blank1">
	</td>
	<td class="blank">
		<input class="form-control" type="text">
	</td>
	<td class="blank blank3">
	</td>
	<td class="blank blank4">
	</td>
	<td class="check">
		<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">Pt. tolerated treatment well
		</div>
		<form class="form-inline">
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" name="agree" onclick="agreeForm(this.form)">Pt. c/o after use of
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOptions" value="option2">Scoliosis Table
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOptions" value="option3">Chair
			</div>
			<input class="form-control" type="text" name="submit" disabled>
		</form>
		<form class="form-inline">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" name="agree" onclick="agreeForm(this.form)">
				<label class="form-check-label" for="defaultCheck2">
					Stopped treatment prematurely due to
				</label>
			</div>
			<input class="form-control" type="text" name="submit" disabled>	
		</form>				
	</td>
	</tr>`);

	var blank1 = Array.from(document.querySelectorAll('.blank1')); 
	blank1[blank1.length - 1].appendChild(inputDate) 
	$('.picker').datetimepicker({ 
		timepicker: false, 
		datepicker: true, 
		format: 'Y-m-d', 
		value: 'moment' 
	}) 
	
	var blank3 = Array.from(document.querySelectorAll('.blank3')); 
	blank3[blank3.length - 1].appendChild(inputAverage1) 
	
	var blank4 = Array.from(document.querySelectorAll('.blank4')); 
	blank4[blank4.length - 1].appendChild(inputAverage2) 
};

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

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});