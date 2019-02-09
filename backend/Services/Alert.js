const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'gaurav.testblue2@gmail.com',
        pass: 'Gaurav-1995'
    }
});
const notify = ({from,to,subject,text}) => {
	const mailOptions = {
	  from,
	  to,
	  subject,
	  text
	};
	
	return new Promise((resolve,reject)=> {
		transporter.sendMail(mailOptions, function (err, info) {
		   if(err)
		     reject(err);
		   else
		    resolve(info);
		});
	})
}

module.exports = notify;