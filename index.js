$(document).ready(function()  {

// Create a function that will be called when the user clicks on the button element you added to your HTML.
$( "#button" ).click(function()	{

var balance = $( "#balance").val();
var apr = $( "#apr").val();
var term = $( "#term").val();
var period = $( "#period").val();


// This function should grab the values entered by the user from the input elements and the select element.
    
    
// The function should then calculate the monthly payment as follows (we can break this formula into 4 'buckets' for readability):

 	// monthlyInterestRate = (interestRate / 100) / period
    var monthlyInterestRate = (apr / 100) / period;  

    // number of payments numberOfPayments = loanTerm * period
    var numberOfPayments = term * period;     

    // compounded interest rate compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

    // interest quotient interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation monthlyPayment = loanBalance * interestQuotient
    var monthlyPayment = (balance * interestQuotient);


 //Using jQuery to grab info from HTML within html tags using as string. 

$("#futureoutput").text("Your monthly payment would be $ " + Math.round(monthlyPayment) +".00");





	});

});


