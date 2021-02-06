# Weekend Planner


| Page | Mobile | Desktop |
| ----- | ------------- | ------------- |
| Search Page| <img width="100%" alt="Screen Shot 2021-01-10 at 9 48 26 PM" src="https://user-images.githubusercontent.com/5474124/104148011-c83f0700-538d-11eb-812c-5aa5d18e1608.png">  | <img width="100%" alt="Screen Shot 2021-01-10 at 9 48 41 PM" src="https://user-images.githubusercontent.com/5474124/104148009-c5441680-538d-11eb-839e-78f5b18a51c3.png">  |
| Checkout Page | <img width="499" alt="Screen Shot 2021-01-10 at 10 22 07 PM" src="https://user-images.githubusercontent.com/5474124/104149121-54ebc400-5392-11eb-93db-e20c4d249caf.png"> | <img width="1440" alt="Screen Shot 2021-01-10 at 10 21 57 PM" src="https://user-images.githubusercontent.com/5474124/104149123-561cf100-5392-11eb-94d1-b2040f59c8df.png"> |



This repo is for a generic "Weekend planner" where you add, remove, and review selected movies you plan on watching in order to fill up your weekend (48 hours). It was done in 4 hours and is by no means complete, but it does have some cool examples of how I like to code in it.

**[View Live on Netlify](https://weekend-planner.netlify.app/)**

## Stack/packages/things to note
- Bootstrapped with [Create React App + typescript](https://facebook.github.io/create-react-app/docs/getting-started).
- [styled-components](https://styled-components.com/) for styles
- [react-use](https://github.com/streamich/react-use) for localStorage hook
- [constate](https://github.com/diegohaz/constate) for context hook
- [canvas-confetti](https://github.com/catdad/canvas-confetti) for fun reasons.
- Components use [Deductive Component Language](https://www.hovalabs.com/blog/deductive-component-language)


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



