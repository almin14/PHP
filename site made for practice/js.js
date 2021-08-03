$(document).ready(function(){
	
	 $("#login").click(function(){
		$("#ewar").hide();
		$("#epass").hide();
		var email = $("#email").val();
		var password = $("#password").val();
		var lowerCaseLetters = /[a-z]/g;
		var numbers = /[0-9]/g;
		var special = /[!,@,#,$,%,^,<,&,*,]/g;
		
		if (email==''||password=='') 
		{
			$("#ewar").show();
			$("#epass").show();
		}
		else if (password.length<8) 
		{
			$("#epass").show();
		}
		else if (!password.match(lowerCaseLetters)) 
		{
			$("#epass").show();
		}
		else if (!password.match(numbers)) 
		{
			$("#epass").show();
		}
		else if (!password.match(special)) 
		{
			$("#epass").show();
		}
		
	});

	 $("#register").click(function(){
	 	$("#ewar").hide();
		$("#epass").hide();
		$("#fn").hide();
		$("#ln").hide();
		$("#rpass").hide();
		$("#cpass").hide();
		$("#edob").hide();
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var rpassword = $("#rpassword").val();
		var cpassword = $("#cpassword").val();
		var dob = $("#dob").val();
		var lowerCaseLetters = /[a-z]/g;
		var numbers = /[0-9]/g;
		var special = /[!,@,#,$,%,^,<,&,*,]/g;
		
		if (fname==''||lname==''||rpassword==''||cpassword==''||dob=='') 
		{
			$("#fn").show();
			$("#ln").show();
			$("#rpass").show();
			$("#cpass").show();
			$("#edob").show();
		}
		else if (rpassword.length<8) 
		{
			$("#rpass").show();
		}
		else if (!rpassword.match(lowerCaseLetters)) 
		{
			$("#rpass").show();
		}
		else if (!rpassword.match(numbers)) 
		{
			$("#rpass").show();
		}
		else if (!rpassword.match(special)) 
		{
			$("#rpass").show();
		}
		else if (!rpassword.match(cpassword)) 
		{
			$("#c1pass").show();
		}

	});
});