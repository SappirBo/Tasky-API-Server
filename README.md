# Tasky-API - Server

### routs explaind
1. To create new User, route to `/api/users/createUser` (the data of the document will include all the datag you will upload in the additional jason file).
2. In order to get an existing User, route to `/api/users/getUser/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/users/getUser/YOZlUP51j7KNh53R31ob`.
3. 

### How To Run?
First you Should make sure that you downloaded all the needed dependencies, you can ensure that by running 
the commend `npm i`, which will install all the needed dependencies.
<br/>
<br/>
Then, to run the API-Server, use this command `npm run start`.



