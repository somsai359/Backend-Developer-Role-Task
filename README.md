High Level Design
<img width="830" alt="Screenshot 2023-12-29 at 3 53 11 AM" src="https://github.com/Somsai0009/Student-Management/assets/88903529/b1f250e4-2009-406e-a8d3-011e86eb5e94">

API Documentation Link: https://docs.google.com/document/d/1voFUIQBYXxECSLLPVEfssR3BR0HwcvPjX02tPXq2i8g/edit?usp=sharing
- cd Backend and Set environment variables in .env
- Create  mongoDB connection url, which you'll use as your MONGO_URL

```
#  ---  Config.env  ---
PORT =8070
MONGO_URL =
```
```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
```

   
##  Key Features


- Admin Login     : localhost:8070/admin/login
- Admin adding Student: localhost:8070/admin/add/student
- All Students    : localhost:8070/admin/get/Students/
- update          : localhost:8070/admin/update/658da56a954b6a29b867ad31
- Delete Student  : localhost:8070/admin/delete/658dbbad54ed6084d7c43bff
- Task assigning  : localhost:8070/admin/task/assign/658da56a954b6a29b867ad31
- Student Login   : localhost:8070/admin/task/assign/658da56a954b6a29b867ad31
- View the task   : localhost:8070/student/tasks/658da56a954b6a29b867ad31
- Update the Task : localhost:8070/student/task/update/658d4da367ace02e7db0f182/658d554be9c007a3c39062d1
<br/>

##  Technologies used

This project was created using the following technologies.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Nodemon](https://www.npmjs.com/package/nodemon) - To monitor changes to the program code that is being developed
####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

