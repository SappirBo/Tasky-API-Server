# Tasky - API - Server

The Tasky API serves as a transition point between the Tasky application and the Firebase database, providing endpoints to manage tasks for teams, companies, or individual users. With Tasky, you can efficiently organize and track tasks, enabling seamless collaboration and productivity.

## API Endpoints: Routes Explaind

### User Routes

1. *createUser* - To create new User, route to `/api/users/createUser` (the data of the document will include all the datag you will upload in the additional jason file).
2. *getUser* - In order to get an existing User, route to `/api/users/getUser/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/users/getUser/YOZlUP51j7KNh53R31ob`.
3. *delete User* - In order to delete an existing User, route to `/api/users/deleteUser/:id`. Here the `/:id` is the record number in the firestore.

### Tasks Routes

1. *Create Task* - To create new Task, route to `/api/tasks/createTask` (the data of the document will include all the data you will upload in the additional jason file).
2. *Get Task* - In order to get an existing Task, route to `/api/tasks/getTask/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/tasks/getTask/{NUMBER HERE}`.
3. *Delete Task* - In order to delete an existing Task, route to `/api/tasks/deleteTask/:id`. Here the `/:id` is the record number in the firestore.

## How To Run?
First you Should make sure that you downloaded all the needed dependencies, you can ensure that by running 
the commend `npm i`, which will install all the needed dependencies.
<br/>
<br/>
Then, to run the API-Server, use this command `npm run start`.


## ToDo
1. Add *authController* and *auth-routes*.
2. Add more functions to User and Tasks (Update, multiple deletion).
3. Create a classes in the Tasky repo.




