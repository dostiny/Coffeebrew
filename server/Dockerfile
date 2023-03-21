FROM openjdk:11-jdk-alpine
RUN echo ${DIR}
ENTRYPOINT ["java","-jar","-Duser.timezone=Asia/Seoul","/var/jenkins_home/workspace/b305_coffeebrew_server/server/target/coffee-0.0.1-SNAPSHOT.jar"]