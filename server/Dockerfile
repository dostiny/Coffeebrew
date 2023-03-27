FROM openjdk:11
RUN echo ${DIR}
COPY server/build/libs/server-0.0.1-SNAPSHOT.jar server.jar
ENTRYPOINT ["java","-jar","-Duser.timezone=Asia/Seoul","server.jar"]
