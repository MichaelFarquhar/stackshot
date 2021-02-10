# Sass Boilerplate

Boilerplate for Sass (.scss) styling structure that I use for React projects.

### Requirements

-   Download and place wherever, preferable into a _styles_ directory. Import the main.scss file to App.js.

```javascript
import './styles/main.scss';
```

-   React projects made in create-react-app can use [node-sass](https://www.npmjs.com/package/node-sass). This will compile the sass for us.

```bash
npm install node-sass@^4.14.1
```

---

### Folder Structure

-   **\_base** - Contains default global settings. Includes [normalize.scss](https://github.com/necolas/normalize.css/blob/master/normalize.css)
    -   \_general.scss
    -   \_normalize.scss
-   **\_utils** - Variables and mixins that are used globally.
    -   \_fonts.scss
    -   \_vars.scss
    -   \_breakpoints.scss
    -   \_mixins.scss
-   **\_pages** - Each page will have a seperate stylesheet with specific styles.
    -   \_page.scss
    -   \_home.scss
-   **\_sections** - Sections that are not tied to a specific page.
    -   \_header.scss
    -   \_navbar.scss
    -   \_footer.scss
    -   \_container.scss
-   **\_components** - Styles related to reusable components.
    -   \_buttons.scss
    -   \_forms.scss
    -   \_tables.scss
