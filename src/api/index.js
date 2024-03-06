const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./modals/User');
const nodeMailer = require('nodemailer');
const app = express();
const port = '8000';
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose
  .connect('mongodb+srv://Aman:Aman123@cluster0.luq07yi.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(res => console.log('server is connected'))
  .catch(err => console.log('not connected', err));

app.listen(port, () => {
  console.log('server is starting', port);
});
const generateKey = () => {
  const secrateKey = crypto.randomBytes(32).toString('hex');
  return secrateKey;
};

const secrateKey = generateKey();
const sendeVerificationEmail = async (email, verificationToken) => {
  console.log('herrrr');
  const emailTransporter = nodeMailer.createTransport({
    //configure email service
    service: 'email',
    auth: {
      user: 'amanpara135@gmail.com',
      pass: 'hnbd tgoj hvza yuco',
    },
  });
  const mailOptions = {
    from: 'amazon.com',
    to: email,
    text: `click link to Verify the email ${verificationToken}`,
  };
  try {
    await emailTransporter.sendMail(mailOptions);
    console.log('herrrr');
  } catch (err) {
    console.log(err, 'err');
  }
};
//endPoint for to register the user
app.post('/Register', async (req, res) => {
  try {
    const {name, email, password} = req.body;

    //check for existingUser
    const existingUser = await User.findOne({email});
    if (existingUser) {
      console.log(existingUser, 'reddddd', res.status(2));
      res.status(404).json({Message: 'User already Registred'});
    } else {
      //create a new User
      const newUser = new User({name, email, password});
      //genrate verification token
      newUser.verificationToken = crypto.randomBytes(20).toString('hex');
      await newUser.save();
      res.status(200).json({Message: 'User Registerd Successfully'});
    }
  } catch (err) {
    console.log(err, 'reddddd');
    res.status(500).json({Message: 'Error in Registration'});
  }
});
app.get('/verifyEmail', async (req, res) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({verificationToken: token});
    if (!user) {
      return res.status(400).json({Message: 'User not exist'});
    }
    user.verified = true;
    user.verificationToken = null;
    await user.save();
    res.status(200).json({Message: 'user verified successfully'});
  } catch (err) {
    res.status(500).json({Message: 'Email verification failed'});
  }
});
app.post('/Login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
      return res.status(200).json({message: 'Invalid Email or password'});
    } else if (user.password !== password) {
      return res.status(200).json({message: 'Invalid Password'});
    }
    //genrate token
    const token = jwt.sign({userId: user._id}, secrateKey);
    res.status(200).json({token, message: 'LoggedIn Successfully'});
  } catch (err) {
    res.status(500).json({message: 'LogIn Failed'});
  }
});
