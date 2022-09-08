$(document).ready(function($) 
{
		
// code for add restuarant enquiry
$("#btn_restaurant_enquiry").click(function(){
	var owner_name=$("#owner_name").val();
	var email_address=$("#email_address").val();
	var mobile_number=$("#mobile_number").val();
	var business_name=$("#business_name").val();
	var address=$("#address").val();
	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	
	var flag=1;
	$("#err_owner_name").html('');
	$("#err_email_address").html('');
	$("#err_mobile_number").html('');
	$("#err_business_name").html('');
	$("#err_address").html('');
	
	if(owner_name=="")
	{
		$("#err_owner_name").html('Enter full name.');
		flag=0;
	}
	if(email_address=="")
	{
		$("#err_email_address").html('Enter email address.');
		flag=0;
	}
	if(email_address!="" && !testEmail.test(email_address))
	{
		$("#err_email_address").html('Please enter valid email address.');
		flag=0;
	}
	if(mobile_number=="")
	{
		$("#err_mobile_number").html("Enter phone number.");
		flag=0;
	}
	if(mobile_number!="" && isNaN(mobile_number))
	{
		$("#err_mobile_number").html('Please enter valid phone number.');
		flag=0;
	}
	if(business_name=="")
	{
		$("#err_business_name").html('Select business type.');
		flag=0;
	}
	if(address=="")
	{
		$("#err_address").html('Enter address.');
		flag=0;
	}
	if(flag==1)
		return true;
	else
		return false;
});	


	// code for add contact delivery enquiry
	$("#btn_delivery_enquiry").click(function()
	{
		var full_name=$("#full_name").val();
		var email_address=$("#email_address").val();
		var mobile_number=$("#mobile_number").val();
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		
		var flag=1;
		$("#err_owner_name").html('');
		$("#err_email_address").html('');
		$("#err_mobile_number").html('');
		
		if(full_name=="")
		{
			$("#err_full_name").html('Enter full name.');
			flag=0;
		}
		if(email_address=="")
		{
			$("#err_email_address").html('Enter email address.');
			flag=0;
		}
		if(email_address!="" && !testEmail.test(email_address))
		{
			$("#err_email_address").html('Please enter valid email address.');
			flag=0;
		}
		if(mobile_number=="")
		{
			$("#err_mobile_number").html("Enter phone number.");
			flag=0;
		}
		if(mobile_number!="" && isNaN(mobile_number))
		{
			$("#err_mobile_number").html('Please enter valid phone number.');
			flag=0;
		}
		if(flag==1)
			return true;
		else
			return false;
	});	

});