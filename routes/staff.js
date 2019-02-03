var express = require('express');
var router = express.Router();
var expressValidator=require('express-validator');
var staff=require('../models/staffdb')
var Grv=require('../models/grievancedb');
var Grvtype=require('../models/grvtypedb');
console.log('successful');
var session = require('express-session'); 
var app = express();
var sess;
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  //secure: false,
  auth: {
      user: "gportal33@gmail.com",
      pass: "grievance001"
  }
});
var rand,mailOptions,host,link;
host='localhost:3000';
function requireLogin(req, res, next) {
  console.log(req.session.active)
    if (req.session.active==1&&req.session.type=='staff') { /*if someone is logged in as Student*/ 
      next(); // allow the next route to run                   
    } else {
      // require the user to log in
      res.redirect('/'); // or render a form, etc.
    }
  }
  
router.get('/my-account',requireLogin, function(req, res, next) {
  sess=req.session;
  staff.getinfobyID(sess.user,function(err, user){
   if(err) throw err;
   if(!user){
       console.log("unknown user");
       res.redirect('/unknw');
       return;
   }
   var data={
     title:"staff",
    name: user.name,
    gender:user.gender,
    id:user.id,
    email:user.emailid,
    Desig:user.Desig,
    dep:user.dep,
    mobile:user.mobileno,
     }
res.send(data);
  });  
 });


 router.post('/password_reset',function(req,res,next){
  var cpass=req.body.current_password;
  var  npass=req.body.new_password;
  var npass2=req.body.new_password1;

staff.getinfobyID(req.session.user,function(err, user){
  if(err) throw err;
  if(!user){
      console.log("unknown user");
      res.redirect('/faculty/unknw');
      return;
  }

        staff.comparePassword(cpass, user.password, function(err, isMatch){
            if(err) throw err;
              if(isMatch){

                  var id={ _id:sess.user };
                  //console.log('id is '+sess.user.id);
                  
                staff.update_password(id,npass,function(err){
                   if(err) throw err;
                 else
                 {
                   console.log(' password updated');
                   //res.redirect('/Student/Home')
                 }
                }); 
                }

                else{
                  console.log('password doesnt match');
                  res.redirect('/failed');
                  return;
                }
    });

    })
    
  })
  router.get('/GRV',requireLogin,function(req,res,next){//For finding a particular Grievance information
    console.log('hii'); 
    console.log(req.query.grv_id);
       Grv.grv_findbyid(req.query.grv_id,function(err,result)
    {
        if(err) throw err;
        console.log(result);
        console.log(result.Gtype);
        var wqe={
        info:result
    }
    var data=result
    res.send(data);
        }
    
  );
    });
  
 router.get('/My_Grievances',requireLogin,function(req,res,next){
  console.log('hii'); 
  console.log(req.session.email)
    //console.log(req.query.id)
      Grv.grv_findbyuser(req.session.email,function(err,result)
  {
      if(err) throw err;
      console.log(result);
//      res.render('grievances',
var data={
      info:result
  }
  res.send(data);
      }
  
  );
  });
 router.get('/complaint',requireLogin, function(req, res, next) {
  res.render('post',{title:'staff'});
});
 router.get('/Home',requireLogin, function(req, res, next) {
  res.render('Staff_dash',{title:'staff',verify:sess.ver});
});
  router.get('/err_valid', function(req, res, next) {
    res.render('err_valid',{title:'Faculty_Login'});
  });
  router.get('/logged', function(req, res, next) {
    res.render('logged',{title:'Faculty_Login'});
  });
  router.get('/unknw', function(req, res, next) {
    res.render('unknw',{title:'Faculty_Login'});
  });
  router.get('/pass', function(req, res, next) {
    res.render('pass',{title:'Faculty_Login'});
  });
  router.get('/al', function(req, res, next) {
    res.render('al',{title:'Faculty_Login'});
  });
  router.get('/update',requireLogin, function(req, res, next) {
    res.render('stfupdt',{title:'staff'});
  });
  router.post('/login',function(req,res,next){
    sess=req.session;
    if(!sess.user){
    var id=req.body.id;
    var password=req.body.password;
  
  
    staff.getUserByID(id,function(err, user){
      if(err) throw err;
      if(!user){
          console.log("unknown user");
          //res.redirect('/staff/unknw');
          res.status(500).send('Unauthorized User');
          return;
      }
      if(user.status=='approved')
     {
      staff.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
           console.log('login sucsseful');      
           if(user.status=='verified')
           {sess.ver=1;
           }
           else
           {
             sess.ver=0;
             sess.email=user.emailid;
          }
          sess.user=user._id;
          sess.type="staff";
          sess.active=1;
          //res.redirect('/staff/Home');
          res.send('success');
         
        }
        else{
          console.log('invalid password');
          //res.redirect('/staff/pass');
          res.status(500).send('pass');
          return;
        }
      })}
      else{
        console.log('user not approved by admin');
        //res.redirect('/');
        res.status(500).send('not apprv');
          return;
      }
     });
    }
    else{
      res.status(500).send('some');
    }
    });

    router.post('/update',function(req,res,next){
      var email={ _id: sess.user };
      var newvalues = {$set: 
        {
          
          //name:req.body.name,
          //dep:req.body.dep,
          //Desig:req.body.Desig,
          //gender:req.body.gender,
          //emailid:req.body.email,
          mobileno:req.body.mobile
      } 
    
    };
  
    staff.updateuser(email,newvalues,function(err,isUpdate){
       if(err) throw err;
     else
     {
       console.log(' successfuly update ');
       res.redirect('/staff/Home#!/')
     }
    });
  
    });
  


    router.post('/register', function(req, res, next) {
      sess=req.session;
      if(!sess.user){
    var name=req.body.name;
    var email=req.body.email;
    var gender=req.body.gender;
    var dep=req.body.dep;
    var Desig=req.body.Desig;
    var id=req.body.id;
    var Mobile=req.body.Mobile;
    var password=req.body.password;
    var password2=req.body.password2;
    console.log(req.body.name);
    
    req.checkBody('name','Name field is required').notEmpty();
    req.checkBody('gender','Email field is required').notEmpty();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('dep','username field is required').notEmpty();
    req.checkBody('Desig','username field is required').notEmpty();
    req.checkBody('id','username field is required').notEmpty();
    req.checkBody('Mobile','username field is required').notEmpty();
    req.checkBody('password','password field is required').notEmpty();
    req.checkBody('password2','password do not match').equals(password);
  
    var errors=req.validationErrors();
    if(errors)
    { console.log(errors);
        res.render('err_valid',{
      errors: errors
    });
      console.log('errors in validation');
      
    }
    else{
      staff.getUserByID(email,function(err, user){
        if(err) throw err;
        if(user){
            console.log("Already Registered");
            res.redirect('/al');
            return;
        }
        else{
          var random=Math.floor((Math.random() * 100) + 54);
      var newUser=new staff({
        name: name,//LHS should be same as that of attribute name in DB file and DB
        id: id,
        dep: dep,
        gender: gender,
        Desig: Desig,
        emailid: email,
        mobileno: Mobile,
        password: password,
        rand:random,
        status:"pending",
      }); 
      //console.log('no errors');
    staff.createUser(newUser,function(err,user){
      if(err) throw err;
      console.log(user);
      host=req.get('host');
      link="http://"+req.get('host')+"/staff/verify?rand="+random+"&id="+newUser._id;
      mailOptions={
          to : user.emailid,
          subject : "Please confirm your Email account",
          html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
       if(error){
              console.log(error);
          res.end("error");
       }else{
              console.log("Message sent: " + response.message);
          res.end("sent");
           }
  });

    });
    console.log('success','you are now registered and can login');
  res.redirect('/');

}
      });
    }
  }
  else{
    res.end('someone already logged in');
  }
});




router.get('/verify',function(req,res){
  console.log(req.protocol+"://"+req.get('host'));
console.log('id is '+req.query.id);
  if((req.protocol+"://"+req.get('host'))==("http://"+host))
  {
      console.log("Domain is matched. Information is from Authentic email");
      //console.log("random no is " +sess.user.rand);  
      staff.getinfobyID(req.query.id,function(err, user){
        if(err) throw err;
        if(!user){
            console.log("unknown user");
            res.redirect('/faculty/unknw');
            return;
        }
  
      
        console.log('value of random is '+user.rand);
      if(req.query.rand== user.rand)
      {
          console.log("email is verified");
          res.end("<h1>Email "+user.emailid+" is been Successfully verified");
        var id={_id:user._id}
          var newvalues={$set:
        {
           status:"verified"
        }};
        staff.updateuser(id,newvalues,function(err){
           if(err) throw err;
        });
        }
      else
      {
          console.log("email is not verified");
          res.end("<h1>Bad Request</h1>");
      }});
  }
  else
  {
      res.end("<h1>Request is from unknown source");
  }
  });
  router.get('/grievance_type',requireLogin,function(req,res,next){
    console.log('hiitype'); 
    console.log(req.session.email)
      //console.log(req.query.id)
        Grvtype.grvtype_find(function(err,result)
    {
        if(err) throw err;
        console.log(result);
      
    res.send(result);
    //)
        }
    
    );
    });
    router.get('/grievance_type',requireLogin,function(req,res,next){
      console.log('hiitype'); 
      console.log(req.session.email)
        //console.log(req.query.id)
          Grvtype.grvtype_find(function(err,result)
      {
          if(err) throw err;
          console.log(result);
        
      res.send(result);
      //)
          }
      
      );
      });



module.exports = router;