pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        SOURCECODE_JENKINS_CREDENTIAL_ID = 'donghun'
        SOURCE_CODE_URL = 'https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22B305.git'
        RELEASE_BRANCH = 'release-recom-server'
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

        stage('recom server dockerizing') {
            steps {
                sh "pwd"
                sh "cd ./server-recom && docker build -t recom ."
            }
        }

		stage('Deploy') {
            steps{
                sh 'docker stop fastapi && docker rm fastapi'
                sh 'docker run -d -v /var/run/docker.sock:/var/run/docker.sock   -v /jenkins/workspace/b305_coffeebrew_recom_server:/var/jenkins_home/workspace/b305_coffeebrew_recom_server --name fastapi -p 8009:8009 recom'
            }
            post {
                success {
                    echo "Deploy success"
                }

                failure {
                    echo "Deploy failed"
                }
            }		
        }
    }
}
