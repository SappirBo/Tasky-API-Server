const { auth } = require("../db");
const {createUser} = require("./userController");
/*
  Authenticate a user
*/
const authenticate = async (req, res, next) => {

  try {
    const { token } = req.body;
    console.log('new user try to login');
    const decodedToken = await auth.verifyIdToken(token);
    if (!decodedToken) {
      throw new Error('Invalid token');
    }
    console.log('new user logged in: ' + decodedToken.email);
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.log('new user failed to login' + error);
    res.status(401).json({ message: 'tasky server: Invalid credentials.' + error });
  }
  
};


/*
  Sign up a new user
*/
const signUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
    try {
        console.log('new user try to signup: ' + email, password);
      const userRecord = await auth.createUser({
        email,
        password,
      });
      console.log('new user created: ' + userRecord.uid);
      // send user token to client
      user = { id: userRecord.uid, firstName, lastName, email };
      ret = await createUser(user); // creating user in firestore
      if (!ret.succ) {
        throw new Error(ret.msg);
      }
      res.status(201).json({ message: 'User created successfully' , uid: userRecord.uid});
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error: error });
    }
};

const signUpSession = async (req, res, next) => {// TODO: implement
}

module.exports = { authenticate, signUp };
