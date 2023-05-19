const config = require('./config');
const admin = require('firebase-admin');
admin.initializeApp({credential: admin.credential.cert(config.firebaseAdminConfig),});
const db = admin.firestore();
const auth = admin.auth();
module.exports = {db,auth,admin};
