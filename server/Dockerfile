FROM openjdk:11
RUN echo ${DIR}
ENTRYPOINT ["java","-jar","-Duser.timezone=Asia/Seoul","/var/jenkins_home/workspace/b305_coffeebrew_server/server/build/libs/server-0.0.1-SNAPSHOT.jar"]