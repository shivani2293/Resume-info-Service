Steps to run this project

1) Start with cloning 
```
git clone git@github.com:shivani2293/Resume-info-Service.git in your terminal.
```
2) Now cd inside project and then run 
```
npm start
```

3) Your project should be running now.You can test the APIs with the help of postman with below endpoints.
    
    - POST -> to upload resume details
 ```
   {
   "endpoint":"http://localhost:8080/api/resume/uploadResumeDetails",
   "method":"POST",
   "request":{
      "queryParams":{
         
      },
      "body":{
         {
            "name":"nua portre",
            "currentJobTitle":"DBEngineer",
            "currentJobDescription":"DevelopeDB",
            "currentJobCompany":"Capiot"
         }
      }
   },
   "response":{
      "status":"200",
      "body":{
         "OK"
      }
   }
 }
 ```
    
    - GET -> to search resumes by first name or last name
 ```
    {
   "endpoint":"http://localhost:8080/api/resume/getResumeByName/neha+dubey",
   "method":"GET",
   "description":"Returns resumes whose names match the given name",
   "parameters":{
      "name":{
         "description":"Name of the candidate in the format of FirstName+LastName. e.g. john+doe",
         "type":"string",
         "required":true
      }
   },
   "responses":{
      "status":"200",
      "body":{
         {
            "data":[
               {
                  "id":1,
                  "name":"Shivani Dubey",
                  "current_job_title":"Software Engineer",
                  "current_job_desc":"Develop scalable application",
                  "current_job_company":"TCS"
               },
               {
                  "id":2,
                  "name":"Neha Pandey",
                  "current_job_title":"Software Engineer",
                  "current_job_desc":"Data Metrics and Monitoring",
                  "current_job_company":"Infosys"
               }
            ]
         }
      },
      "400":{
         "description":"Bad request if the name is not in the correct format"
      }
   }
   
 ```
    
    - GET -> to search a resume by ID.
 ```
    {
   "endpoint":"http://localhost:8080/api/resume/getResumeById/32",
   "method":"GET",
   "description":"Returns resumes whose id match the passed parameter",
   "parameters":{
      "id":{
         "description":"id of the candidate",
         "type":"string",
         "required":true
      }
   },
   "description":"Returns resume whose id match the given id",
   "response":{
      "status":"200",
      "body":{
         {
            "data":[
               {
                  "id":3,
                  "first_name":"Rigre",
                  "last_name":"John",
                  "current_job_title":"DBEngineer",
                  "current_job_desc":"DevelopeDB",
                  "current_job_company":"Capiot"
               }
            ]
         }
      }
   }
 ```
    
