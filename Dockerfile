from openjdk:11
ADD target/jobify-web.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]