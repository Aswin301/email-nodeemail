const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'aswin0034@gmail.com',
		pass: 'ycyrwzgbeuwsyzze'
	}
});

let mailDetails = {
	from: 'aswin0034@gmail.com',
	to: 'sumithra6287@gmail.com',
	subject: 'Just Checking on You',
	text: 'Hi Sumithra, Hope you are doing well Regards,Aswin'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});
