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
    http://api.backendless.com/v1/data/Task_Management (i think?)
  - application ID: 892747C4-CCC9-E96F-FF91-006B50E61400
  - REST secret key: 30D82F23-700A-52A1-FF7B-1BC275C5F700

#### Getting Started
- Initial State?
- Events?
- Model(s)?
- User Actions/Inputs will occur on each Views?
- What endpoints will I use to access/persist data?

1) First, set up backendless
- Login as a user
- Request data from server
- Save record to db

2) MVC
MODEL
- user: string
- password
- taskName: string
- description: string
- state: boolean
- important: boolean
- due date: string or numbers
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
