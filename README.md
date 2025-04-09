
Built by https://www.blackbox.ai

---

```markdown
# Student Queue Dashboard

## Project Overview
The Student Queue Dashboard is a web application designed to provide an interactive interface for students to manage their queue numbers for various administrative offices. The dashboard allows users to log in, select offices, take a queue number, and check the current status of their queue.

## Installation
To run this project locally, follow the steps below:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/student-queue-dashboard.git
    ```
2. Navigate into the project directory:
    ```bash
    cd student-queue-dashboard
    ```
3. Start the server:
    ```bash
    python server.py
    ```

4. Open your web browser and go to `http://localhost:8000` to access the application.

## Usage
- Navigate to `login.html` to enter your Student ID and Password.
- After successfully logging in, you will be redirected to the `dashboard.html` where you can select the office and date to take a queue number.
- The queue status can be checked in `queue-status.html` after taking a number.
- Your student profile can be accessed via `profile.html`.

## Features
- **User Authentication**: Basic login functionality with simulated credential storage.
- **Queue Management**: Select an office and a date to generate a unique queue number.
- **Real-Time Updates**: Check the current status of your queue with updates on current numbers and wait times.
- **User Profile**: View student details and queue history for completed and cancelled requests.

## Dependencies
The application uses the following external libraries:
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- Google Fonts (Poppins)

To include these dependencies, the following lines are added in the HTML files:
```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```

## Project Structure
```plaintext
.
├── index.html         # Redirects to login page
├── login.html         # Login interface for students
├── dashboard.html     # Dashboard for queue management
├── queue-status.html   # Page to show current queue status
├── profile.html       # User profile page displaying student information
├── server.py          # Simple HTTP server for serving the application files
```

## Contributing
If you would like to contribute to this project, please fork the repository and make a pull request with your changes.

## License
This project is open-source and available under the [MIT License](LICENSE).
```