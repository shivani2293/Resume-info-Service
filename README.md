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
    http://localhost:8080/api/resume/uploadResumeDetails 
    ```
    
    - GET -> to search resumes by first name or last name
    ```
    http://localhost:8080/api/resume/getResumeByName/neha dubey
    ```
    
    - GET -> to search a resume by ID.
    ```
    http://localhost:8080/api/resume/getResumeById/32 
    ```
    
