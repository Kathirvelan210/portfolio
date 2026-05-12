# Stage 1: Build frontend
FROM node:20-alpine AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend and embed frontend static files
FROM maven:3.9.9-eclipse-temurin-17 AS backend-build
WORKDIR /workspace
COPY backend/pom.xml ./backend/
COPY backend/src ./backend/src
COPY --from=frontend-build /frontend/dist ./backend/src/main/resources/static
RUN mvn -f backend/pom.xml package -DskipTests

# Stage 3: Final runtime image
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=backend-build /workspace/backend/target/backend-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
