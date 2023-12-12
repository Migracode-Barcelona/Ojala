# ¡Ojalá! webapp

Welcome to the "Ojalá" frontend repo that contains its code and resources.
The project is a Single Page Application built with React, a Bootstrap custom UI, Express.js and PostgreSQL.
Serves as the online presence for the “¡Ojalá!” phone app.

We welcome contributions from the community. Whether it's fixing a bug, improving the user interface, or adding new features, you can help shape the future of "Ojalá." Please refer to our Contributing Guidelines for more details.

## About Ojalá

"Ojalá" is a free phone app to learn Spanish that fits the language needs of people on the move on arrival in Spain. Includes minority languages like Wolof and Darija.

## Visit the deployed webapp
Click the link 👉[Ojala](https://ojala.migracode.org/).

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- A code editor of your choice (e.g., Visual Studio Code).
- Create an `.env` file in the `ojala-react-app` directory. The backend will run in the port `3001`, you must specify the port adding the following value to the `.env` file:
```env
REACT_APP_API_URL=http://localhost:3001
```

### Installation

1. Open your favourite terminal app and clone this repository:
   ```bash
   git clone https://github.com/armincano/ojala-frontend.git
   ```
2. Navigate to the root directory of the local cloned repo, then:
   ```bash
   cd ojala-react-app
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

### Usage

- To start the development server and view the landing page, run the following command from the `ojala-react-app` directory:

```bash
 npm start
```
- To access the admin dashboard, use the URL http://localhost:3000/admin-login
- Use the username `ojala3@mail.com` and password `12345` to login the admin dashboard.

> [!IMPORTANT]   
> Safari browser is not supported.

> [!NOTE]   
> Remember to also run the backend repo with the postgreSQL database running. Read the backend readme 🤓.

## Contributing Guidelines

If you'd like to contribute to the development of the Ojalá landing page, please follow these guidelines:

- Fork this repository.
- Checkout to `main` branch.
- Create a new branch for your feature or bug fix: `git checkout -b feat/feat-name`. Replace `feat-name` with yours.
- Make your changes.
- Test your changes to ensure they work as expected.
- Commit your changes: `git commit -m "Add feat/fix"`
- Push your branch: `git push origin feature/feat-name`
- Create a Pull Request to the `main` branch of this repository.

## License:

This project is ?????????

## Contact:

For any inquiries or feedback, feel free to reach out to us at ?????????.
