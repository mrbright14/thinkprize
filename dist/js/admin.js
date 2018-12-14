$(document).ready(function(){

	console.log('check');




	$('input[name="daterange"]').daterangepicker({
	    "singleDatePicker": true,
	    "startDate": "04/20/2018",
	    "endDate": "04/26/2018"
	}, function(start, end, label) {
	  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});

			
