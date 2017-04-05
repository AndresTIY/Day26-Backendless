## Day 26 HW, Task Management App with Backendless
### Explorer Mode

#### Explorer Mode
- Use fresh clone of webpack
- Refer to notes and redux chat app to set up store and reducer
- Create a web app that requires user to login in order to use
- Once logged in, user should be able to create a new Task with a form
  - A Task should have a `name`, `description`, `state`, `important`, and `due date` fields
  - 5 Fields Total
  - Create this table on backendless with all the appropriate constraints and types
- A user should be able to see a list of all their tasks in tabular format. User should NOT be able to see any tasks created by another user

#### Backendless
- Need to be able to login as a user
- Need to be able to request data from server
- Need to save a record to the Database
- To make any requests to backendless, I will need these 3 things that need to be stored in the app somewhere
  - backendless endpoint URL:
    http://api.backendless.com/v1/data/task_mgmt(i think?)
  - application ID: 892747C4-CCC9-E96F-FF91-006B50E61400
  - REST secret key: 30D82F23-700A-52A1-FF7B-1BC275C5F700

#### Getting Started
- Initial State?
- Events?
- Model(s)?
- User Actions/Inputs will occur on each Views?
- What endpoints will I use to access/persist data?



##### MVC
MODEL
- user: string noun
- token
- taskName: string noun , falls under what is a task
- description: string
- state: boolean
- important: boolean
- due date: string or numbers
- AJAX CALLS
VIEW
- login view
  - has a username and password input fields, login button
- task page view
  - has task name, description, state, important, due date
- task view
  -

CONTROLLER
- when: user clicks login
- what: user sees task page

Currently Working On
- task view

Questions
- a task should have blah blah and state. what is state in this context?




DATA LOOKS LIKE
```js
{
  {
    "offset": 0,
    "data": [
      {
        "important": true,
        "task": "find meetup events for next week",
        "created": 1491420359000,
        "due_date": 1491670800000,
        "___class": "task_table",
        "description": "look up events going on in austin next week",
        "state": true,
        "complete": false,
        "ownerId": null,
        "updated": null,
        "objectId": "A0A6F1B2-ACB7-38B9-FF2F-8170F9CA7B00",
        "__meta": "{\"relationRemovalIds\":{},\"selectedProperties\":[\"important\",\"task\",\"created\",\"due_date\",\"___class\",\"description\",\"state\",\"complete\",\"ownerId\",\"updated\",\"objectId\"],\"relatedObjects\":{}}"
      },

```
