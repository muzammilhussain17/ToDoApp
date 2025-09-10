# ToDo Application

A modern, full-stack task management application built with Spring Boot and Thymeleaf, designed to help you organize and track your daily tasks efficiently.

## 🚀 Features

- **Task Management**: Create, read, update, and delete tasks
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface built with Thymeleaf and Bootstrap
- **Data Persistence**: Secure data storage using Spring Data JPA
- **Developer Friendly**: Built with Spring Boot for easy development and deployment

## 🛠️ Tech Stack

- **Backend**: Spring Boot 3.5.0
- **Frontend**: Thymeleaf, HTML5, CSS3, JavaScript
- **Database**: H2 Database (in-memory)
- **Build Tool**: Maven
- **Java Version**: 17

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6.0 or higher
- Your favorite IDE (IntelliJ IDEA, Eclipse, or VS Code)

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd ToDoApp
   ```

2. **Build the application**
   ```bash
   mvn clean install
   ```

3. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

4. **Access the application**
   Open your browser and navigate to: [http://localhost:8080](http://localhost:8080)

## 🏗️ Project Structure

```
ToDoApp/
├── src/
│   ├── main/
│   │   ├── java/com/application/todoapp/
│   │   │   ├── controller/    # Request handlers
│   │   │   ├── model/         # Entity classes
│   │   │   ├── repository/    # Data access layer
│   │   │   ├── service/       # Business logic
│   │   │   └── TodoAppApplication.java  # Main application class
│   │   └── resources/
│   │       ├── static/        # Static resources (CSS, JS, images)
│   │       ├── templates/     # Thymeleaf templates
│   │       └── application.properties  # Application configuration
│   └── test/                  # Test files
├── .gitignore
├── pom.xml                    # Maven configuration
└── README.md
```

## 🔧 Configuration

Application properties can be configured in `src/main/resources/application.properties`:

```properties
# Server Configuration
server.port=8080

# Database Configuration
spring.datasource.url=jdbc:h2:mem:todoapp
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## 🧪 Testing

Run the test suite using:

```bash
mvn test
```

## 🌐 API Endpoints

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | /              | Show all tasks             |
| POST   | /add           | Add a new task             |
| GET    | /edit/{id}     | Show edit task form        |
| POST   | /update/{id}   | Update an existing task    |
| GET    | /delete/{id}   | Delete a task              |


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Spring Boot](https://spring.io/projects/spring-boot)
- [Thymeleaf](https://www.thymeleaf.org/) for server-side rendering
- [Bootstrap](https://getbootstrap.com/) for responsive design

