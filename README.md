Steps to run this project

1) Start with cloning 
   ```
   git clone git@github.com:shivani2293/Resume-info-Service.git in your terminal.
   ```
2) Now cd inside project and then run 
   ```
   npm start
   ```

3) Your project should be running now. You can test the APIs with the help of the following OpenAPI specification-
    
   ```YAML   
   openAPI: 3.0.0

   info:
      title: Resume Service API
      version: 1.0.0

   servers:
   - url: http://localhost:8080/

   paths:
   /api/resume/getResumeByName/{name}:
      get:
         description: Get resume by name
         operationId: getResumeByName
         parameters:
         - name: name
            in: path
            description: Name of the person
            required: true
            schema:
               type: string
         responses:
         200:
            description: OK
            content:
               application/json:
               schema:
                  $ref: '#/components/schemas/ResumeList'
         400:
            description: Bad Request
         404:
            description: Not Found
            
   /api/resume/getResumeById/{id}:
      get:
         description: Get resume by ID
         operationId: getResumeById
         parameters:
         - name: id
            in: path
            description: Unique ID of the person
            required: true
            schema:
               type: integer
         responses:
         200:
            description: OK
            content:
               application/json:
               schema:
                  $ref: '#/components/schemas/Resume'
         400:
            description: Bad Request
         404:
            description: Not Found
            
   /api/resume/uploadResumeDetails:
      post:
         description: Upload resume details
         operationId: uploadResumeDetails
         requestBody:
         content:
            application/json:
               schema:
               type: object
               properties:
                  name:
                     type: string
                  currentJobTitle:
                     type: string
                  currentJobDescription:
                     type: string
                  currentJobCompany:
                     type: string
         responses:
         200:
            description: OK
         400:
            description: Bad Request

   components:
   schemas:
      ResumeList:
         type: array
         items:
         $ref: '#/components/schemas/Resume'
      Resume:
         type: object
         properties:
         id:
            type: integer
         name:
            type: string
         current_job_title:
            type: string
         current_job_desc:
            type: string
         current_job_company:
            type: string
   ```