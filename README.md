# Weekend Planner


| Page | Mobile | Desktop |
| ----- | ------------- | ------------- |
| Search Page| <img width="100%" alt="Screen Shot 2021-01-10 at 9 48 26 PM" src="https://user-images.githubusercontent.com/5474124/104148011-c83f0700-538d-11eb-812c-5aa5d18e1608.png">  | <img width="100%" alt="Screen Shot 2021-01-10 at 9 48 41 PM" src="https://user-images.githubusercontent.com/5474124/104148009-c5441680-538d-11eb-839e-78f5b18a51c3.png">  |
| Checkout Page | <img width="498" alt="Screen Shot 2021-01-10 at 10 00 53 PM" src="https://user-images.githubusercontent.com/5474124/104148430-75664f00-538f-11eb-8420-4005e857c929.png"> | <img width="1437" alt="Screen Shot 2021-01-10 at 10 01 08 PM" src="https://user-images.githubusercontent.com/5474124/104148443-857e2e80-538f-11eb-9df2-17ab934e95d3.png"> |



This repo is for a generic "Weekend planner" where you add, remove, and review selected movies you plan on watching in order to fill up your weekend (48 hours).

## Stack/packages to note
- Bootstrapped with [Create React App + typescript](https://facebook.github.io/create-react-app/docs/getting-started).
- [styled-components](https://styled-components.com/) for styles
- [react-use](https://github.com/streamich/react-use) for localStorage hook
- [constate](https://github.com/diegohaz/constate) for context hook
- [canvas-confetti](https://github.com/catdad/canvas-confetti) for fun reasons.


## Starting the app

1. add a ``.env`` file to your root that sets your [omdb API key](http://omdbapi.com/apikey.aspx)
    ```
    REACT_APP_OMDB_KEY=YOURKEYGOESHERE
    ```

2. In the project directory, run:
    ```
    yarn start
    ```
    > **Note:** you should be able to add/remove movies by clicking or tab + enter. If you select over 48 hours worth of movies (a weekend's worth) then the Checkout page has a nice surprise.
3. Written test can be run by:
    ```
    jest utils
    ```



