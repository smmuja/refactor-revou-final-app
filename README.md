# InovHub

Social media app to connect between entrepreneurs, investors, and customers to foster innovation

## About

Refactor RevoU Final App Project.

- Initial project front end : https://github.com/smmuja/revou-final-project-frontend
- Backend : https://github.com/DewaSRY/Revou-Final-Project
- Latest version on branch [rebase-full](https://github.com/smmuja/refactor-revou-final-app/tree/rebase-full)

## Path and Features

### Public

- Register new account : http://localhost:5173/register
- Login : http://localhost:5173/login
- All business list : http://localhost:5173/business
- All product list : http://localhost:5173/product
  ![Preview](public/docs/inovhub-homepage.png)

### Protected (Need login)

- Profile Detail

  - http://localhost:5173/profile
    ![Profile](/public/docs/profile-detail.jpeg)

- Business Add page

  - http://localhost:5173/business/add
  - http://localhost:5173/business/:business-name/edit
    ![Business Add](/public/docs/business-add.jpeg)

- Product Add

  - http://localhost:5173/product/add

- Business detail page
  - http://localhost:5173/businesses/:id
    ![Business Detail](/public/docs/business-detail-1.jpeg)
    ![Business Detail](/public/docs/business-detail-no-product.jpeg)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
