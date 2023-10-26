[Login] --(1)--> [Authentication] --(3)--> [Website] --(4)--> [Action] --(5)--> [API Request] --(6)--> [API Service] --(7)--> [Score Update] --(8)--> [Database]

1.Users perform actions on the website, the nature of which is not a primary concern for this module. Examples of actions could include scoring in a game or completing a task.

2.The website sends an API request to the API service to update the user's score.

3.The API service processes the API request, verifying its validity. This includes user authentication and determining the validity of the performed action.

4.If the API request is valid, the API service updates the user's score in the database.

5.The updated score data is stored in the database, making it available for display on the website's score board.


My comments for improvement.

add a socket to be able to display scores realtime to the user