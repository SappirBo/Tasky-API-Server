const { auth } = require("../db");

/*
  Authenticate a user
*/
const authenticate = async (req, res, next) => {

  try {
    const { token } = req.body;
    console.log('new user try to login: ' + token);
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken) {
      throw new Error('Invalid token');
    }
    console.log('new user logged in: ' + decodedToken.uid);
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'tasky server: Invalid credentials.' + error });
  }
  
};


/*
  Sign up a new user
*/
const signUp = async (req, res, next) => {
  const { email, password } = req.body;
    try {
        console.log('new user try to signup: ' + email, password);
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });
      console.log('new user created: ' + userRecord.uid);
      // send user token to client
      res.status(201).json({ message: 'User created successfully' , uid: userRecord.uid});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong', error: error });
    }
};

module.exports = { authenticate, signUp };