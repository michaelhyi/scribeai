FROM --platform=linux/amd64 openjdk:17
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]