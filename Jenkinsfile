pipeline {
    agent any

    environment {
        APP_NAME = "jenkins-demo-app"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out source code from Git repository...'
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests inside Node container...'
                sh '''
                    docker run --rm -v $(pwd):/app -w /app node:18-alpine sh -c "npm install && npm test"
                '''
            }
        }

        stage('Build Image') {
            steps {
                echo "Building Docker image: ${APP_NAME}:${IMAGE_TAG}..."
                sh '''
                    docker build -t ${APP_NAME}:${IMAGE_TAG} .
                    docker tag ${APP_NAME}:${IMAGE_TAG} ${APP_NAME}:latest
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application container...'
                sh '''
                    # Stop and remove existing container if running
                    docker rm -f ${APP_NAME} || true
                    
                    # Run the freshly built container on port 3000
                    docker run -d --name ${APP_NAME} -p 3000:3000 ${APP_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully! Application available on port 3000."
        }
        failure {
            echo "Pipeline run failed. Check console output for debug logs."
        }
    }
}
