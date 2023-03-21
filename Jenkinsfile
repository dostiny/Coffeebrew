pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
        SOURCE_CODE_URL = 'https://https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22B305.git'
        RELEASE_BRANCH = 'release-server'
        datasource = 'j8b305.p.ssafy.io'
        dbUser = credentials('dbUser')
        dbPwd = credentials('dbPwd')
        jwt_secret_key = credentials('jwt_secret_key')
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
                sh "docker build -t server ./server"
            }
        }

        stage('Deploy') {
            steps{
                sh "pwd"
                sh "docker run -d -v /jenkins/workspace/b305_coffeebrew_server:/var/jenkins_home/workspace/b305_coffeebrew_server
                -v /var/run/docker.sock:/var/run/docker.sock 
                -v /etc/localtime:/etc/localtime:ro
                -v /usr/share/zoneinfo/Asia/Seoul:/etc/timezone:ro
                -v /logs:/logs
                -p 8081:8081 --name special-b305-coffeebrew-dev-api-1 -u root server"
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