<p align="center">
  <img src="./src/assets/dineinFrontend.webp" alt="DineIn Frontend"/>
</p>

# DineIn Frontend Project Setup

Welcome to the DineIn Frontend project! Follow these simple steps to get started.

## Project Initialization

First, clone the repository and navigate into the project directory:

```sh
git clone https://github.com/food-and-pantry-app/Frontend.git
cd Frontend
```

Install the project dependencies:

```sh
npm install
```

## Running the Project

To start the project and view it in the browser, run:

```sh
npm run dev
```

Your project will be available at `http://localhost:5173/`. Vite will automatically open it in your default web browser.

## Setting Up Prettier in VS Code

To ensure consistent formatting across the team, we use Prettier. Here's how to set it up in Visual Studio Code (VS Code).

1. Install the Prettier - Code Formatter extension in VS Code. Go to Extensions (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS), search for "Prettier - Code formatter", and click Install.
2. Enable "Format On Save" by opening Settings (`Ctrl+,` or `Cmd+,` on macOS), searching for "Format On Save", and checking the box.
3. To ensure Prettier formats our project files on save, create or modify the `.vscode/settings.json` file in the project root with the following settings:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  // Include other relevant file types as necessary
}
```

If you encounter any issues with Prettier not running on save, ensure you've restarted VS Code after making changes to the settings.

Happy coding!
