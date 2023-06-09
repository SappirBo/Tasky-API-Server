# Tasky - API - Server

The Tasky API serves as a transition point between the Tasky application and the Firebase database, providing endpoints to manage tasks for teams, companies, or individual users. With Tasky, you can efficiently organize and track tasks, enabling seamless collaboration and productivity.

Main Tasky repo: [Task](https://github.com/HagaiHen/Final-Project/tree/main/tasky).

## API Endpoints: Routes Explaind

### Auth Routes

1. *authenticate* - To check if an email and password are well knowned in our systems, it will check directly with Firebase authentication. route to `/api/auth/authenticate`, make sure the you sends in the Json the arguments *userEmail* amd *userPassword*. the return is the ref token to this user in firebase.
2. *signUp* - To create a new user in the Firebase authentication system, route to `api/auth/signup` and make sure the you sends in the Json the arguments *Email* amd *Password*. the return is the ref token to this user in firebase.

### Team Routes
1. *Create Team* - If you want to create a new team, route to `/api/team/createTeam`(the data of the document will include all the data you will upload in the additional jason file). _Keep In Mind_, the search for the user in the database will be using the `team_id` -> means that every user that you will create must have this fild in the Json!
2. *Get Team* - if you want to get a team (by the team id), you will have to rioute to `/api/team/getTeam/:id`-> where `/:id` is the team_id of the desired team, for example: `http://localhost:5000/api/team/getTeam/AwVqRHxRrjlI0u5yDlXS`.
3. *Delete Team* - to delete an existing team, route to `/api/team/deleteTeam/:id` where id is the task_id.
4. *Update team* - to update an existing team, route to `/api/team/updateTeam`, the task_id filed will help locate the file we want to change.


### User Routes

1. *createUser* - To create new User, route to `/api/user/createUser` (the data of the document will include all the data you will upload in the additional jason file). _Keep In Mind_, the search for the user in the database will be using the `uid` -> means that every user that you will create must have this fild in the Json!
2. *getUser* - In order to get an existing User, route to `/api/user/getUser/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/user/getUser/YOZlUP51j7KNh53R31ob`.
3. *delete User* - In order to delete an existing User, route to `/api/user/deleteUser/:id`. Here the `/:id` is the record number in the firestore.
4. *Update User* - To update existing user, route to `api/user/updateUser` an the doc ID in the Json you upload as "id":"userId".

### Tasks Routes

1. *Create Task* - To create new Task, route to `/api/task/createTask` (the data of the document will include all the data you will upload in the additional jason file). The task id (`task_id`) will be auto generated by the firebase -> _DONT_ create a filed with this name, since it will be deleted! 
2. *Get Task* - In order to get an existing Task, route to `/api/task/getTask/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/task/getTask/{NUMBER HERE}`.
3. *Delete Task* - In order to delete an existing Task, route to `/api/task/deleteTask/:id`. Here the `/:id` is the record number in the firestore.
4. *Update Task* - To update existing task, route to `api/task/updateTask` an the doc ID in the Json you upload as "id":"taskId".
5. *Get Task By UID* - to find all the tasks related to specific user - route to `api/task/getTaskByUid/:id`, it will send back an array of all the tasks related to the user id (the search in each document is in the taskDoc -> Dependencies -> value -> uid).


### Sprint Routes

1. *Create Sprint* - To create new Sprint, route to `/api/sprint/createSprint` (the data of the document will include all the data you will upload in the additional jason file). The Sprint id (`sprint_id`) will be auto generated by the firebase -> _DONT_ create a filed with this name, since it will be deleted! 
2. *Get Sprint* - In order to get an existing Sprint, route to `/api/sprint/getSprint/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/sprint/getSprint/{NUMBER HERE}`.
3. *Delete Sprint* - In order to delete an existing Sprint, route to `/api/sprint/deleteSprint/:sprint_id`. Here the `/:sprint_id` is the record number in the firestore.
4. *Update Sprint* - To update existing Sprint, route to `api/sprint/updateSprint` an the doc ID in the Json you upload as "id":"sprint_id".

### Event Routes

1. *Create Event* - To create new event, route to `/api/event/createEvent` (the data of the document will include all the data you will upload in the additional jason file). The event id (`event_id`) will be auto generated by the firebase -> _DONT_ create a filed with this name, since it will be deleted! 
2. *Get Event* - In order to get an existing Event, route to `/api/event/getEvent/:id`. Here the `/:id` is the record number in the firestore. for example after running the server try `http://localhost:5000/api/event/getEvent/{NUMBER HERE}`.
3. *Delete Event* - In order to delete an existing Event, route to `/api/event/deleteEvent/:Event_id`. Here the `/:event_id` is the record number in the firestore.
4. *Update Event* - To update existing Event, route to `api/event/updateEvent` an the doc ID in the Json you upload as "id":"event_id".
5. *Get Events By User Id* - To get all the events related to specific user, route to `api/event/getAllEventsByUID/:id`, where `id` represent the required user's user-id. the return type is a list of JSON's with all the events (if there is none such evens -> the list is empty). 


## How To Run?
First you Should make sure that you downloaded all the needed dependencies, you can ensure that by running 
the commend `npm i`, which will install all the needed dependencies.
<br/>
<br/>
Then, to run the API-Server, use this command `npm run start`.


## ToDo
1. Add Teams Table(Create, Get, Update, Delete);
2. Create a classes -> Add MOdel to the API;
3. 




