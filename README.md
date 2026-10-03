# jenkins-cicd-pipeline
Elevate Daily Task 2
# Jenkins CI/CD Pipeline (Elevate Labs Task 2)

## Objective
Set up an automated CI/CD pipeline using Jenkins to build, test, and deploy a containerized Node.js web application.

## Pipeline Architecture
- **Checkout Code:** Fetches the latest source code from GitHub upon manual trigger or polling.
- **Build Image:** Packages the application and dependencies into a Docker container image tagged with the Jenkins build number and `latest`.
- **Test:** Executes automated unit tests (`npm test`) inside the newly built Docker container.
- **Deploy:** Stops and removes legacy instances, then spins up the new container mapped to host port 3000.

## Deliverables
- **Declarative Pipeline:** `Jenkinsfile`
- **Application Source:** `server.js`, `test.js`, `package.json`
- **Container Definition:** `Dockerfile`
- **Repository:** https://github.com/aswinnns66/jenkins-cicd-pipeline

## Verification
- Successful execution across all pipeline stages in the Jenkins Stage View.
- Live container access confirmed on port 3000.
