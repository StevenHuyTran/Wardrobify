# Wardrobify

Team:

- Person 1 - Which microservice? STEVEN
- Person 2 - Which microservice? Elviza/Shoes



## Design

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.


## Step-by-step Instructions to run project.
0. Throughout these instructions, console commands will be in brackets.
Example: [code goes here, dont include these outer brackets inside the terminal]


1. Open terminal and make a new directory to gitclone
https://gitlab.com/stevenhuytran03/microservice-two-shot.git

## to evaluate the code, proceed through the step-by-step instructions in order, otherwise if you just want to
## get the application up and running to inspect functionality, skip step 2.
2. Cd into that new directory and open Vscode via [code .]

3. Build images via terminal
[docker-compose build]

4. Compose containers via terminal
[docker-compose up]

5. Ensure all containers are running, if containers stop for some reason, you may need to rebuild and recompose.
Use these docker commands in your terminal if neccessary.

5a. Stop all services first.

5b. To clear your containers, use [docker container prune -f]

5c. [docker volume rm pgdata]

[docker volume create pg data]
[docker-compose up]

6. Run [docker exec -it «api-container-name» bash] and replace «api-container-name» with the API service you wish to evaluate.

7. After you get access to the bash, run
[python manage.py makemigrations]
[python manage.py migrate]

8. On your web browser, go to http://localhost:3000/

9. From here you should be able to navigate through the SPA for Wardrobify.

## URLS and PORTS
Use the following urls for Insomnia. Each request should have these respective urls in insomnia.

## Urls for Hats Microservice
UPDATE HAT- PUT REQUEST ============> http://localhost:8090/api/hats/<int:pk>/
DELETE HAT- DELETE REQUEST =========> http://localhost:8090/api/hats/<int:pk>/
DETAIL HAT- GET REQUEST ============> http://localhost:8090/api/hats/<int:pk>/
LIST HATS-  GET REQUEST ============> http://localhost:8090/api/hats/
CREATE HAT- POST REQUEST ============> http://localhost:8090/api/hats/

## Urls for Locations in Monolith
LIST LOCATIONS-  GET REQUEST ========> http://localhost:8100/api/locations/
LOCATION DETAIL- GET REQUEST ========> http://localhost:8100/api/locations/<int:pk>/
UPDATE LOCATION- PUT REQUEST =======> http://localhost:8100/api/locations/<int:pk>/
DELETE LOCATION- DELETE REQUEST =======> http://localhost:8100/api/locations/<int:pk>/
CREATE LOCATION- POST REQUEST =======> http://localhost:8100/api/locations/




## Ports
shoes-api-1 ======> 8080:8000
hats-api-1 =======> 8090:8000












Front End (Hats)
Navigation
[x]Should have a link to an Add a Hat Form View (anywhere)
[x]Should have a link to Show a List of Hats View

Add a Hat Form
[x]Should contain relevant inputs
[x]Should contain a Style Input
[x]Should contain a Color Input
[x]Should contain a Fabric input
[x]Should contain a Picture URL input
[x]Should contain a Location dropdown
[x]On Submit should create a new Hat
[x]No JS console errors
[]Verify state updates after adding hat (hat list updates without manually reloading page) AUTOREFRESH

List All Hats View
Should contain the following info for each record
[x]Style
[x]Fabric
[x]Color
[x]Location

Stretch Goal
[x]Added Hats picture to Hats List
[] Create page for Hat detail.
[] Create dismiss button on succeful submission message.

[x]Delete Hats Button
[x]Delete Hats Button works

Back End
Hats Resource
[x]GET request to API should respond with a list of hats
[x]GET request to API should respond with an appropriate status code
[x]POST request to API should create a new hat resource
[x]POST request to API should respond with an appropriate status code
[x]DELETE request to API should respond with {deleted: true}
[x]DELETE request to API should respond with appropriate status code

Polling Service
[x]It should work and create the appropriate Value Objects for the service
[x]Hat locations should be populated with LocationVOs from hats api, not Locations from wardrobe api
