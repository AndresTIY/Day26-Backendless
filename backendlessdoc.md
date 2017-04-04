## User Login

Request Headers
  Method: Post
  url = /<version name>/users/login
  apiEndPointUrl: http://api.backendless.com/v1/data/Task_Management/
  loginUrl = http://api.backendless.com/v1/data/Task_Management/users/login
  var requestHeadersObj =
  {
    application-id: "892747C4-CCC9-E96F-FF91-006B50E61400",
    secret-key: "30D82F23-700A-52A1-FF7B-1BC275C5F700",
    Content-Type: "application/json",
    application-type: "REST"
  }

Request Body:
{
  "login": value,
  "password": value
}
login key must contain the value for the property marked as identity
Response Body:
{
  "objectId": value,
  "user-token": value
}
The "objectId" property is a unique identifier assigned by Backendless to the user account
The "user-token" value identifies the user session initiated by the Login operation. Both of these values ("objectId" and "user-token") are required for Updating User Properties.

Maintaining User session
user-token value returned from login must be used in the subsequent requests to B.endless in order to maintain user session. The value uniquely ids both the user and the session on the server and is used to enforce security policy, apply user and roles permissions and track usage analytics. for all requests made after the login, the user token value must be sent in the HTTP header:
"user-token": value

Validating User Login
login operation provides a way to persist the user-token on the client side so it can be used when the application is restarted. this helps in streamlining the user experience since the user of the application does not need to login again. however, when app restarts, it needs to check if the underlying user token, and hence the user session are still valid. this can be accomplished with this api
Method : Getting
URL: https://api.backendless.com/<version>/users/isvalidusertoken/<userToken>
URL: http://api.backendless.com/v1/data/Task_Management/users/isvalidusertoken/<userToken>

## Request Data From Server

B.endless supports multiple basic search operations. these include finding an object by ID, finding first or last object in the collection, or retrieving entire persisted collection

Retrieving Data Objects
Method: GET
URL:
- Find by ID: https://api.backendless.com/<version>/data/<table-name>/<object-id>
- Find first: https://api.backendless.com/<version>/data/<table-name>/first
- Find last: https://api.backendless.com/<version>/data/<table-name>/last
- Basic Find/Retrieving Coll: https://api.backendless.com/<version>/data/<table-name>

## Saving Data To Server
Saving Data Objects, this operation persists an object in a table. if the table does not exist, it's automatically created. in this case, b.endless creates a column for every provided obj property
Method: POST
URL: https://api.backendless.com/<version>/data/<table-name>
