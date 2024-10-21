# React

**How to create react project:**

- [Localhost link](http://localhost:5173/)

``` Bash
npm create vite@latest react-project -- --template react
cd react-project
npm install
npm run dev
```

**How to install tailwind in react project:**

- install Tailwind CSS and its dependencies:
  - `npm install -D tailwindcss postcss autoprefixer vite`
  - `npx tailwindcss init -p`
- Configure Tailwind. In `tailwind.config.js` add
  - `content: ["*"]`
- Add Tailwind CSS directives in `src/index.css`

  ```css
  /* src/index.css */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Import the CSS in your React project. Make sure to import the index.css file into your src/main.jsx - `import './index.css';`

- Run the development server - `npm run dev`
