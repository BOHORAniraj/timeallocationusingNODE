#not to do backend apo
tihs is the backend api for our not to do react app

# how to use

-clone the project
-run 'npm install'
-make sure to have 'nodemon'
insall globally in your system,if you donot have then run 'npm i -g nodemon'

# API Endpoints

-all the api endpoint will follow the 'rootUrl/api/v1

| #   | API | Method | Description                                                                                |
| --- | --- | ------ | ------------------------------------------------------------------------------------------ |
| 1.  | `/` | GET    | fetch single task if @id param is provided other wise fetch all the tasks list from server |
| 2.  | `/` | POST   | ADD new ticket in tthe database                                                            |
