# Todo List

An application where a user can create a todo-list by adding/updating/deleting items. Items are stored locally on the device so that it persists across multiple user sessions.

### Quick Setup 🚀
- Install NodeJS (LTS)
  - Download the binaries from [their website](https://nodejs.org/en/)
  - If you have multiple NodeJS projects, you can use [nvm](https://github.com/nvm-sh/nvm) (macOS & Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (optional)
    - `nvm i --lts`
- Clone this repository
  - `git clone https://github.com/dapmos/REPOSITORY-NAME.git`
  - `cd REPOSITORY-NAME`
- Install the Required Global Dependencies
  - `npm i -g typescript expo-cli`
- Create a new project
  - `expo init`
  - Choose a name for the app
  - Select `blank (Typescript)` for the template
  - After it is done setting up, `cd` into the directory of the app (should be the name of the app `cd app-name`)
- Install other essential packages
  - `npm install @react-navigation/native`
  - `expo install react-native-screens react-native-safe-area-context`
  - `npm install @react-navigation/native-stack`
  - `expo install @react-native-async-storage/async-storage`
- Build the App and Run Expo
  - `npm run start` or `expo start`
- Expo instructions will appear in the console
