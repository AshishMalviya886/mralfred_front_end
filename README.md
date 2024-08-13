# Mralfred Angular Project

This project is an Angular application with features including CRUD operations, pagination, and authentication. This README provides information on how to set up and run the project on your local machine.

## Prerequisites

1. **Node.js and npm**: Ensure that Node.js and npm (Node Package Manager) are installed. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Angular CLI**: If you don't have Angular CLI installed, you need to install it globally. You can do this by running:
    ```bash
    npm install -g @angular/cli
    ```

## Setting Up the Project

Follow these steps to set up and run the project:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AshishMalviya886/mralfred_front_end.git
    cd mralfred_front_end
    ```

2. **Install Dependencies**:
    Install the necessary npm packages using the following command:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:
   update your backend api URL src/environment/environment.ts
    ```plaintext
    apiURL=<Your api URL>
    ```

4. **Build the Project**:
    To build the project for production, run:
    ```bash
    ng build --prod
    ```

5. **Run the Project**:
    To start the development server, run:
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200` in your browser to view the application.
