const { auth } = require("../db");

/**
 * Authenticates a user by signing in with their email and password.
 * If successful, it returns the user's unique identifier (UID) as a JSON string.
 * If there is an error during authentication, an error message is sent as a response.
 */
const authenticate = async (req, res, next) => {
  let uid = (
    await auth
      .signInWithEmailAndPassword(req.body.userEmail, req.body.userPassword)
      .catch((error) => {
        res.send({ error: `error while signing in, ${error}` });
      })
    );
  if(uid){
    uid = uid.user.uid
    await auth.signOut();
    res.send(JSON.stringify(uid));
  }
};


/**
 * Creates a new user account by signing up with the provided email and password.
 * If successful, it returns the newly created user's unique identifier (UID) as a JSON string.
 * If there is an error during the signup process, an error message is logged and sent as a response.
 */
const signUp = async (req, res, next) => {
  const email = req.body.Email;
  const password = req.body.Password;
  await auth.createUserWithEmailAndPassword(email, password).then((user) => {
      userId = user.user.uid;
    }).catch((error) => {
      console.log(error.message);
      res.send({ error: error.message });
    });
  const resMsg = "[Server] signUp: new User signed up: " + email + ", " + password; 
  console.log(resMsg);
  res.send(JSON.stringify(userId));
};

module.exports = { authenticate, signUp };