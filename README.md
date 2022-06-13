# Todo List Practice

An application where a user can create a todo-list by adding/updating/deleting items. Items should be stored locally on the device so that it persists across multiple user sessions.

### Quick Setup 🚀
- Install NodeJS (LTS)
  - You can easily download the binaries from [their website](https://nodejs.org/en/)
  - If you have multiple NodeJS projects, you can use [nvm](https://github.com/nvm-sh/nvm) (macOS & Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (optional)
    - `nvm i --lts`
- Clone this repository (windows users might need to [install git](https://git-scm.com/))
  - `git clone https://github.com/dapmos/REPOSITORY-NAME.git`
  - `cd REPOSITORY-NAME`
- Install the Required Global Dependencies
  - `npm i -g typescript expo-cli`
- Create a new project
  - `expo init`
  - Choose a name for your app
  - Select `blank (Typescript)` for the template
  - After it is done setting up, `cd` into the directory of the app (should be the name of the app `cd app-name`)
- Install other essential packages
  - `npm install @react-navigation/native`
  - `expo install react-native-screens react-native-safe-area-context`
  - `npm install @react-navigation/native-stack`
  - `expo install @react-native-async-storage/async-storage`
- Build the App and Run Expo
  - `npm run start` or `expo start`
- Congratulations! you may now select a platform and connect to the app! 🎉
  - Expo instructions will appear in the console

> P.S. Don't confuse `nvm` with `npm` they're different tools!

### Helpful Links
- Navigation
  - [Getting Started](https://reactnavigation.org/docs/getting-started)
  - [Stack Navigation](https://reactnavigation.org/docs/hello-react-navigation)
  - [Moving Between Screens](https://reactnavigation.org/docs/navigating)
- Async Storage
  - [Documentation](https://react-native-async-storage.github.io/async-storage/docs/usage/)
