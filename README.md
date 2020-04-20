# GUI Form

In this app the user can:

-   Insert Its details such Name, Role, email and password.
-   Submit its details.
-   Change privacy settings.

### Requiements

-   Show one page of the form at a time.
-   Show the current page position of the form.
-   Validate the input fields upon submission of each page.
-   If there are any validation errors, show an error message in the form
    and block progress.
-   Console.logs the resultant data on the final page.

### Installation

```
git clone https://github.com/Gia1987/tray.io-tech-test
cd tray.io-tech-test
npm run install
npm run start (Please make sure port 3000 is not used when running 'npm run start')
```

### To run the test

```
npm run test
```

### Tech Stack

-   React JS ([https://reactjs.org/](https://reactjs.org/))
-   Redux ([https://redux.js.org/](https://redux.js.org/))
-   Parcel JS (web application bundler [https://parceljs.org/](https://parceljs.org/))
-   HTML, JSX
-   CSS styling
-   ESlint and Prettier
-   Jest (Unit Test)

### Quality Control

I tried to adhere to good coding practices in this project.

-   Descriptive Naming for functions and variables.
-   Separated concerns by structuring code into components.
-   Using ES6 Javascript syntax throughout.
-   Using Hooks according to the new version of React.
-   Small Git commits and good commit descriptions.

### Description

This app has three main components Header, Form and Footer. In Form, are nested several children components that are rendered upon a currentView value. The `currentView` is changed by the submit button present in Form.

-   When `currentView = 'form'` The first component that appears in Form is UserDetails.js, which has four inputs Name, Role, Email, and Password. The validation of those fields is made by `ValidateDetails.js` utils function.
    This function is using a library [validator](https://www.npmjs.com/package/validator) to validate the emals and a regex to validate the passwords.
    All the input values are stored directly in redux, by `singleAction.js` function, passed as prop from the parent component, that takes two args: the type action and the event value.

-   When `currentView = 'privacy'` Form renders the 'Pravicy.js' component which has two checkboxes in order to choose privacy preferences. Also, in this component,
    the input values are stored directly in redux, by `singleAction.js` function, passed as prop from the parent component, that takes two args: the type action and value stored in the state.

-   When `currentView = 'completion'` Form renders a simple success message with a green mark image.

### How you would change the configuration of a certain page?

I would definitely improve the UserDetails view, especially the way it throws the error. Make an error for each case and highlight the field that needs to be updated will be a nice change.
In order to do that I will probably pass an 'error' prop to `ItemInput.js` and also implement a new element like so

```
<span className={error ? 'section-input-error' : 'hidden'}>
      {errorMessage}
</span>
```

just after the input element, and in this way each input has its own error message.

Also, modifying the `validateDetails.js` function in order to return a object like so

```
{
    error: true,
    message: 'Password must be at least 10 characters.'
}
```

and create an error for each case.

### How you would add new pages?

To add a new page I would use `react-router-dom` and define a route in `constant.js` file. After that, in `Index.js`, I will define a route like so `<Route exact path='/new-page' component={newPage} />`. Maybe, make it accessible from `CompletionScreen.js` by adding a button that redirects us to the new page by calling `history.push('/new-page)`.

### How you would implement going back a page?

By implementing a button on the new page calling `history.back()`. Also, I can implement a button in the Form component and simply change the `currentView` to the previous value. Except for `CompletionScreen.js` component because in this case, we supposed to complete the registration.
