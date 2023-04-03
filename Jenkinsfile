pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22B305.git'
        RELEASE_BRANCH = 'release-server'
        datasource = 'j8b305.p.ssafy.io'
        dbUser = credentials('dbUser')
        dbPwd = credentials('dbPwd')
        redisPwd = credentials('redisPwd')
        rest_api_key = credentials('rest_api_key')
        client_secret_key = credentials('client_secret_key')
        jwt_secret_key = credentials('jwt_secret_key')
        clientId = credentials('X-Naver-Client-Id')
        clientSecret = credentials('X-Naver-Client-Secret')
        schema = 'devdb'
    }
    stages {

        stage('clone') {
            steps {
                git url: "$SOURCE_CODE_URL",
                    branch: "$RELEASE_BRANCH",
                    credentialsId: "$SOURCECODE_JENKINS_CREDENTIAL_ID"
                sh "ls -al"
            }
        }
    
        stage('backend dockerizing') {
            steps {
                sh "pwd"
                sh "cd ./server && docker build -t server ."
            }
        }

        stage('Deploy') {
            steps{
                sh "pwd"
                sh "docker-compose up -d --build"
            }
            post {
                success {
                    echo "docker run success"
                }

                failure {
                    echo "docker run failed"
                }
            }        
        }
    }
}
