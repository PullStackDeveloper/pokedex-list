# Pokémon Pokedex List Project

This project is a comprehensive Pokémon Pokedex application built using Ionic, Angular, and NgRx for state management. The project is structured with modularity, scalability, and code readability in mind, drawing inspiration from applications like Spotify and iFood to ensure a seamless user experience. The code structure emphasizes best practices in state management, modular architecture, and clean coding patterns.

## Table of Contents
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Folder Structure Explanation](#folder-structure-explanation)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

---

## Technology Stack

The project utilizes the following technologies and libraries:

- **Ionic**: A cross-platform mobile framework for building responsive UIs.
- **Angular**: A powerful front-end framework, providing structure and high performance.
- **NgRx**: A reactive state management library for handling complex state in Angular applications.
- **TypeScript**: Provides static typing and improves code maintainability.

These choices were made to ensure modular, testable, and scalable development, aligning with best practices and supporting the needs of a modern frontend application.

## Project Structure

The project is organized with a well-defined folder structure to separate concerns and enhance code readability and maintainability.

```plaintext
- src
  - app
    - core
      - models
      - services
    - pages
      - home
      - pokemon-detail
        - state
      - pokemon-list
        - state
    - shared
      - modules
        - pokemon
          - pokemon-card
          - pokemon-list
        - ui-elements
          - pokedex-footer
          - pokedex-header
    - store
      - reducers
      - state
    - app-routing.module.ts
    - app.component.html
    - app.component.scss
    - app.component.ts
    - app.module.ts
  - assets
  - environments
  - theme
  - global.scss
  - index.html
  - main.ts
  - polyfills.ts
  - test.ts
  - zone-flags.ts
- angular.json
- ionic.config.json
- tsconfig.json
```

## Folder Structure Explanation

### `src/app/core`

- **models**: Contains TypeScript interfaces and models that define the shape of Pokémon-related data objects, such as `pokemon.model.ts`, `ability.model.ts`, and `type.model.ts`. These models provide a structured and type-safe way of handling Pokémon data throughout the application.
- **services**: Contains shared services, such as `pokemon.service.ts`, which handle HTTP requests and data manipulation. Services in this folder abstract the logic for data retrieval and provide reusable functions for other components.

### `src/app/pages`

This folder contains all the main page components for the application. Each page has its own subfolder with related files, including the main component, routing module, and styles. Each page also includes its own state management files when necessary.

- **home**: The homepage of the application. It includes `home-routing.module.ts`, `home.module.ts`, and other files specific to the home page.
- **pokemon-detail**: This page displays detailed information about a specific Pokémon. It includes:
  - **state**: A dedicated folder within `pokemon-detail` to manage state using NgRx. It contains actions, effects, selectors, and reducers specific to Pokémon detail data.
- **pokemon-list**: This page lists all Pokémon and includes NgRx state management files under the `state` folder. The structure mirrors the Pokémon detail page to ensure consistency.

### `src/app/shared/modules`

Contains reusable modules and components that can be used across different pages, promoting modularity and code reuse.

- **pokemon**: Houses reusable components specific to Pokémon, such as:
  - **pokemon-card**: A component for displaying individual Pokémon information in a card format.
  - **pokemon-list**: A component for displaying a list of Pokémon.
  - **pokemon-components.module.ts**: A module that bundles all Pokémon-related components, making them available for import into other modules.
- **ui-elements**: Contains general UI components that can be used throughout the app, such as:
  - **pokedex-footer**: A reusable footer component.
  - **pokedex-header**: A header component that accepts a title as an input property, allowing for dynamic titles across different pages.
  - **ui-elements.module.ts**: A module for bundling shared UI components.

### `src/app/store`

The NgRx store configuration and global state management.

- **reducers**: This folder contains the root reducer, combining individual feature reducers to form a global state.
- **state**: Defines the shape of the global application state. Each feature or page can extend this state to manage specific data related to that feature.

### `src/assets`

This folder contains static assets like images and icons used throughout the application.

### `src/environments`

Contains environment-specific configuration files. For example, `environment.ts` for development and `environment.prod.ts` for production. Environment files help manage different settings, such as API endpoints, for various deployment stages.

### `src/theme`

Includes the main styles and variables for Ionic components, such as color and typography customizations. The `variables.scss` file is crucial for theming the application.

### Root Files

- **angular.json**: Angular CLI configuration file, specifying build and serve options.
- **ionic.config.json**: Ionic configuration, which defines Ionic-specific build settings.
- **tsconfig.json**: TypeScript configuration, specifying compiler options and path mappings.

## Features

- **Infinite Scroll**: Allows users to scroll through Pokémon lists without pagination, loading data dynamically as they scroll.
- **Global State Management**: NgRx is used to manage complex state across the app, optimizing performance and ensuring a reactive user experience.
- **Modular Design**: The application is divided into distinct modules and reusable components, making it highly scalable and maintainable.
- **Responsive Design**: Built with Ionic, the application is responsive across different screen sizes and platforms.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd pokemon-pokedex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   ionic serve
   ```

## Usage

- **Home Page**: Displays general information and navigation options.
- **Pokémon List**: Infinite scroll page that loads and displays all Pokémon.
- **Pokémon Detail**: Displays detailed stats and information for selected Pokémon.
- **Header/Footer Components**: Reusable and customizable header and footer used across multiple pages.

---

