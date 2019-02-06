const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride=require('method-override');
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/User');

mongoose.connect(
 'mongodb://gaurav:Gaurav-1995@ds123465.mlab.com:23465/tyroo-task'
  );

const app = express();

app.use(bodyParser.json());
app.use(flash());

//passport config
app.use(require('express-session')({
	secret:'no one can do it better',
	resave:false,
	saveUninitialised:false
}));

app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	res.locals.error=req.flash('error');
	res.locals.success=req.flash('success');
	next();
});

app.post('/login',passport.authenticate("local",
{
	successRedirect:'/campaigns',
	failureRedirect:'/login'
}),function(req,res){

});

app.get('/logout',function(req,res){
	req.logout();
	req.flash('success','you are logged out');
	res.redirect('/confessions');
});

function isLoggedIn(req,res,next)
{
	if(req.isAuthenticated()){
		return next();
	}
	else{
		req.flash('error','please login First!!');
		res.redirect('/login')
	}
}

app.post('Campaign',(req,res)=>{
  res.send("campaign added");
})

app.get('Campaign',(req,res)=>{
  res.send("campaigns");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
