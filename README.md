# Home.ht Tenant's Registration Form

### A multi-step registration form built with React and Typescript.

#### Installation

1. Clone the repo. In terminal, go to your chosen directory then run `git clone https://github.com/hardingjam/home.ht-registration.git`
2. `cd` into the new folder, and run `nom install` to install dependencies
3. To run the React app, run `npm start`, the app will be available at [localhost:3000](localhost:3000)

#### Features and Choices

-   Animated progress bar helps visualise user progress.
-   Built around small, manageable components with unified styling.
-   Allows users to move through the form and change information at any time whilst preserving existing data in state, by passing parent state-managing functions to each child component as props.
-   Each component validates user information, ensuring no null values. Users may go back and change previous data, but can only proceed once the current step is completed.
-   Includes light client-side email validation, demanding the format xyz@abc.123
-   Responsive, attractive design in keeping with the visual style of Home.
-   keyPress listeners allow fast progression through each stage of registration. Users can hit enter to proceed, as well as using the buttons.

#### Some changes I would like to make...

-   I would have liked to have the back/next buttons contained in a separate component and rendered in App.tsx, rather than repeated in each component.
-   Validity checking for phone numbers. Perhaps a drop-down list of country codes and a corresponding required number of digits in the text field.
-   Using custom elements instead of HTML radio buttons, to allow more attractive styling.
-   Possibly, remove repetition of handleClick and handleKeyPress in each hook. Handle these instead in App.js, leaving only the submit function in each hook.
-   Including mobile compatibility using media queries. Current design is responsive, but not mobile friendly.
