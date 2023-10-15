# calls9-tech-challenge instructions

## Local Development

1. Run `npm ci` to install project dependencies.
2. Create a `.env` file and add the following variables:
   - `REACT_APP_API_URL`: Your API's URL
   - `REACT_APP_API_PREFIX`: API API's prefix
3. Start the development server by running `npm start`.

## Commit Guidelines

When committing your changes, a pre-commit hook will automatically run to check the code style against ESLint and Prettier rules. If any errors are found, you must fix them manually or run `npm run format`.

## Deployment to Firebase Hosting

To deploy your application to Firebase Hosting, follow these steps:

1. Request access to the Firebase project from the developer.
2. Install Firebase CLI tools globally with the command: `npm install -g firebase-tools`.
3. Log in to your Google account with Firebase using `firebase login`.
4. Build your application bundle with `npm run build`.
5. Deploy your application to Firebase Hosting using `npm run deploy`.

Please ensure that you have the necessary permissions and credentials to perform the Firebase deployment steps. If you encounter any issues during deployment, reach out to the developer for assistance.
