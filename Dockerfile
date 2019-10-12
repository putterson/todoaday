FROM openjdk:8-alpine

COPY target/uberjar/todoaday.jar /todoaday/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/todoaday/app.jar"]
