$('#adminlogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn1.id.value;
		var b = document.lgn1.password.value;
		
		if (a=="") {
			document.getElementById("msgerr11").innerHTML="Username Required!";
			
			if (b=="") {
				document.getElementById("msgerr12").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr12").innerHTML="";return false;
			}

		}

		if(a!=""){
			
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr11").innerHTML="Invalid Format!";
				
				if (b=="") {
					document.getElementById("msgerr12").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr12").innerHTML="";return false;
				}

			}
			else{
				document.getElementById("msgerr11").innerHTML="";
				
				if (b=="") {
					document.getElementById("msgerr12").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr12").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/Admin/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr11").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr12").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr12").innerHTML= "Someone Already Logged In!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr32").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/Admin/Home";
				        return false;
				       }
				     }
				   });

				}				
			}
		}

	});


$('#mngmntlogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn2.id.value;
		var b = document.lgn2.password.value;
		if (a=="") {
			document.getElementById("msgerr21").innerHTML="Username Required!";
			if (b=="") {
				document.getElementById("msgerr22").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr22").innerHTML="";return false;
			}

		}
		if(a!=""){
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr21").innerHTML="Invalid Format!";
				if (b=="") {
					document.getElementById("msgerr22").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr22").innerHTML="";return false;
				}
			}
			else{
				document.getElementById("msgerr21").innerHTML="";
				if (b=="") {
					document.getElementById("msgerr22").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr22").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/mngmnt/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr21").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr22").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr22").innerHTML= "Someone Already Logged In!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr32").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/mngmnt/Home";
				        return false;
				       }
				     }
				   });
				}
			}
		}

	});



$('#facultylogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn3.id.value;
		var b = document.lgn3.password.value;
		if (a=="") {
			document.getElementById("msgerr31").innerHTML="Username Required!";
			if (b=="") {
				document.getElementById("msgerr32").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr32").innerHTML="";return false;
			}

		}
		if(a!=""){
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr31").innerHTML="Invalid Format!";
				if (b=="") {
					document.getElementById("msgerr32").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr32").innerHTML="";return false;
				}
			}
			else{
				document.getElementById("msgerr31").innerHTML="";
				if (b=="") {
					document.getElementById("msgerr32").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr32").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/faculty/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr31").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr32").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr32").innerHTML= "Someone Already Logged In!";
				            }
				            else if (error.responseText == 'not apprv') {
				              console.log(error.responseText);
				              document.getElementById("msgerr32").innerHTML= "User Is Not Approved By The Admin Yet!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr32").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/faculty/Home";
				        return false;
				       }
				     }
				   });
				}
			}
		}

	});



$('#memberlogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn4.id.value;
		var b = document.lgn4.password.value;
		if (a=="") {
			document.getElementById("msgerr41").innerHTML="Username Required!";
			if (b=="") {
				document.getElementById("msgerr42").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr42").innerHTML="";return false;
			}

		}
		if(a!=""){
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr41").innerHTML="Invalid Format!";
				if (b=="") {
					document.getElementById("msgerr42").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr42").innerHTML="";return false;
				}
			}
			else{
				document.getElementById("msgerr41").innerHTML="";
				if (b=="") {
					document.getElementById("msgerr42").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr42").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/Members/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr41").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr42").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr42").innerHTML= "Someone Already Logged In!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr42").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/Members/Home";
				        return false;
				       }
				     }
				   });

				}
			}
		}

	});


$('#studentlogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn5.id.value;
		var b = document.lgn5.password.value;
		if (a=="") {
			document.getElementById("msgerr51").innerHTML="Username Required!";
			if (b=="") {
				document.getElementById("msgerr52").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr52").innerHTML="";return false;
			}

		}
		if(a!=""){
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr51").innerHTML="Invalid Format!";
				if (b=="") {
					document.getElementById("msgerr52").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr52").innerHTML="";return false;
				}
			}
			else{
				document.getElementById("msgerr51").innerHTML="";
				if (b=="") {
					document.getElementById("msgerr52").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr52").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/Student/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr51").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr52").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr52").innerHTML= "Someone Already Logged In!";
				            }
				            else if (error.responseText == 'not apprv') {
				              console.log(error.responseText);
				              document.getElementById("msgerr52").innerHTML= "User Is Not Approved By The Admin Yet!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr52").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/Student/Home";
				        return false;
				       }
				     }
				   });

				}
			}
		}

	});



$('#parentlogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn6.id.value;
		var b = document.lgn6.password.value;
		if (a=="") {
			document.getElementById("msgerr61").innerHTML="Username Required!";
			if (b=="") {
				document.getElementById("msgerr62").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr62").innerHTML="";return false;
			}

		}
		if(a!=""){
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr61").innerHTML="Invalid Format!";
				if (b=="") {
					document.getElementById("msgerr62").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr62").innerHTML="";return false;
				}
			}
			else{
				document.getElementById("msgerr61").innerHTML="";
				if (b=="") {
					document.getElementById("msgerr62").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr62").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/Parent/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr61").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr62").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr62").innerHTML= "Someone Already Logged In!";
				            }
				            else if (error.responseText == 'not apprv') {
				              console.log(error.responseText);
				              document.getElementById("msgerr62").innerHTML= "User Is Not Approved By The Admin Yet!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr62").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/Parent/Home";
				        return false;
				       }
				     }
				   });

				}
			}
		}

	});



$('#nonteachinglogin').click(function(e) {
		e.preventDefault();
		var a = document.lgn7.id.value;
		var b = document.lgn7.password.value;
		if (a=="") {
			document.getElementById("msgerr71").innerHTML="Username Required!";
			if (b=="") {
				document.getElementById("msgerr72").innerHTML="Password Required!";
				return false;
			}else{
				document.getElementById("msgerr72").innerHTML="";return false;
			}

		}
		if(a!=""){
			if ((a.indexOf('@')==0) || (!isNaN(a)) || (a.charAt(a.length-1)=='@') || (a.charAt(a.length-4)!='.') || (a.charAt(a.length-3)=='.')){
				document.getElementById("msgerr71").innerHTML="Invalid Format!";
				if (b=="") {
					document.getElementById("msgerr72").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr72").innerHTML="";return false;
				}
			}
			else{
				document.getElementById("msgerr71").innerHTML="";
				if (b=="") {
					document.getElementById("msgerr72").innerHTML="Password Required!";
					return false;
				}else{
					document.getElementById("msgerr72").innerHTML="";

					$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      id: a,
				      password: b,
				     },
				     url: 'http://localhost:3000/staff/login', //node.js server is running
				     error: function(error){
				          if(error.responseText == 'Unauthorized User'){
				              console.log(error.responseText);
				              document.getElementById("msgerr71").innerHTML= error.responseText;
				              return false;
				            }
				            else if (error.responseText == 'pass') {
				              console.log(error.responseText);
				              document.getElementById("msgerr72").innerHTML= "Invalid Password";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("msgerr72").innerHTML= "Someone Already Logged In!";
				            }
				            else if (error.responseText == 'not apprv') {
				              console.log(error.responseText);
				              document.getElementById("msgerr72").innerHTML= "User Is Not Approved By The Admin Yet!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("msgerr72").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				       if (data === 'success') { 
				        console.log(data);
				        window.location.href = "http://localhost:3000/staff/Home";
				        return false;
				       }
				     }
				   });

				}
			}
		}

	});



	var a=100;

	$('#password').keyup(function(){
			
			var pwd=$('#password').val();
			var pwdscore=0;

			if (/[a-z]/.test(pwd)) { pwdscore += 25; }
			if (/[A-Z]/.test(pwd)) { pwdscore += 25 ;}
			if (/[\d]/.test(pwd)) { pwdscore += 25 ;}
			if (pwd.length>=8) { pwdscore += 25 ;}
			
			if (pwdscore>0 && pwdscore<=50) {
				$('.strength').text('weak');$('.strength').addClass('red');;$('.strength').removeClass('orange');$('.strength').removeClass('green');
				}
			if (pwdscore>50 && pwdscore<=75) {
				$('.strength').text('good');$('.strength').removeClass('red');;$('.strength').addClass('orange');$('.strength').removeClass('green');
				}
			if (pwdscore>75 && pwdscore<=100) {
				$('.strength').text('strong');$('.strength').removeClass('red');;$('.strength').removeClass('orange');$('.strength').addClass('green');
				}
			
		});

//student registration validation...

function stdregval(){
			//e.preventDefault();

			var name = document.stdreg.name.value;
			var email = document.stdreg.email.value;
			var cdate = document.stdreg.cdate.value;
			var id = document.stdreg.id.value;
			var mobile = document.stdreg.Mobile.value;
			var pwd = document.stdreg.password.value;
			var pwd2 = document.stdreg.password2.value;
			var dep = document.stdreg.dep.value;
			var batch = document.stdreg.batch.value;
			var gender = document.stdreg.gender.value;

			if ((name=="") || (email=="") || (cdate=="") || (id=="")  || (mobile=="") || (pwd=="") || (pwd!=pwd2) || (a<=75) || (!isNaN(mobile))) {
					
					if(name==""){
					
						$('#snameerr').text('Username Required!');
					} 
					else{
							if (!isNaN(email)) {
								$('#snameerr').text('Username Must Contain Alphabets!');
							} 
							else{
								$('#nameerr').text('');
							}
						}
				
					if(email==""){
						$('#semailerr').text('Email ID Required!');
					}
					else{
						if ((email.indexOf('@')==0) || (!isNaN(email)) || (email.charAt(email.length-1)=='@') || (email.charAt(email.length-4)!='.') || (email.charAt(email.length-3)=='.')) {
							$('#emailerr').text('Invalid Format!');
						}else{
							$('#emailerr').text('');
						}
					}
					
					if(cdate==""){
						$('#scdateerr').text('Course Completion Date Required!');
					}
					else{
						$('#scdateerr').text('');
					}
					if(id==""){
						$('#siderr').text('College ID Required!');
					}
					else{
						$('#siderr').text('');
					}
					if(mobile==""){
						$('#smoberr').text('Mobile Number Required!');
					}else{
						if (isNaN(mobile)) {
							$('#smoberr').text('Invalid Mobile Number!');
						}
						else{
							$('#moberr').text('');
						}
					}
					if(pwd==""){
						$('#spwderr').text('Password Required!');
					}
					else{
						if(a<=75){
							$('#spwderr').text('Password Not Strong!');
						}
						else{
							$('#spwderr').text('');
						}
					}
					if(pwd!=pwd2){
						$('#spwd2err').text('Passwords Don\'t Match!');
					}
					else{
						$('#spwd2err').text('');
					}
					
					return false;
				
			}
			/*else{

				$.ajax({
				     type: 'post',
				     datatype: "json",
				     data: {
				      
				      name: name,
				      email: email,
				      dep: dep,
				      gender: gender,
				      batch: batch,
				      id: id,
				      cdate: cdate,
				      Mobile: mobile,
				      password: pwd,
				      password2: pwd2,

				     },
				     url: 'http://localhost:3000/Student/register', //node.js server is running

				     error: function(error){
				     	alert('error');
				          if(error.responseText == 'already reg not verified'){
				              console.log(error.responseText);
				              document.getElementById("stderr").innerHTML= "Already Registered With Pending Verification";
				              return false;
				            }
				            else if (error.responseText == 'already reg verified') {
				              console.log(error.responseText);
				              document.getElementById("stderr").innerHTML= "Already Registered! Please Login.";
				            }
				            else if (error.responseText == 'some') {
				              console.log(error.responseText);
				              document.getElementById("stderr").innerHTML= "Someone Already Logged In!";
				            }
				            else{
				            	console.log('Unknown Error');
				            	document.getElementById("stderr").innerHTML= "Unknown Error! Please Try Again.";
				            }
				          },
				     success: function(data) {
				     	alert('suck');
				       if (data === 'success') { 
				        console.log(data);
				        document.getElementById("stderr").innerHTML= "Successfully Registered!";
				        return false;
				       }
				     }
				   });

			}*/
		}