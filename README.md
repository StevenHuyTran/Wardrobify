# Wardrobify

Team:

- Steven Tran - Hats microservice
- Elviza Fallon-Hanify - Shoes microservice

## Design

## Step by Step Installation and getting started

1. Fork the repository https://gitlab.com/stevenhuytran03/microservice-two-shot
2. Select clone with HTTPS, and copy the link
3. Clone the repo using Terminal: git clone "repo-link"
4. Change your directory to the newly cloned repo: cd "repo-name"
5. To open project in VSCODE : code .
6. Run : docker volume create pgdata
   docker-compose build
   docker-compose up
7. If you run docker-compose up and if you're on macOS, you'll see a warning about an
   environment variable named OS being missing. You can safely ignore this.
8. Once docker is up and running, go to http://localhost:3000/ to see the web app.

## Shoes microservice

## Insomnia for Shoes Microservice

1. Use Insomnia to Create a bin to get started:

- POST: http://localhost:8100/api/bins/
- Layout for JSON body: {
  "closet_name": "fill in name here",
  "bin_number": "fill in number",
  "bin_size": "fill in number
  }

2. Checking list of bins:

- GET: http://localhost:8100/api/bins/
- Layout for body: none

3. Checking list of Shoes:

- GET: http://localhost:8080/api/shoes/
- Layout for body: none

4. Creating shoes:

- POST: http://localhost:8080/api/shoes/
- Layout for JSON body: {
  "manufacturer": "fill in manufacturer here",
  "model_name": "fill in model name here",
  "color": "fill in color here",
  "picture_url": "fill in picture adress here",
  "bin": "fill in bin info here"
  }

5. Checking particular shoes details:

- GET: http://localhost:8080/api/shoes/"fill in bin id here"/
- Layout for body: none

6. Delete particular shoes:

- DELETE: http://localhost:8080/api/shoes/"fill in bin id here"/
- Layout for body: none

## Hats microservice

This microservice contains a model called Hat which allows users to add an instance of Hat Model with the following attributes: fabric, style name, color, picture, and the location of the hat in the wardrobe. The location is a value object that is polled from the Wardrobe API that also polls these attributes: closet name, bin number, bin size, and import href. Value Objects are neccessary because they represent a copy of the data represented in the monolith. This allows a way for microservices to access that data without manipulating the original data but still make new instances and model objects of that data.

## URLS and PORTS

Use the following urls for Insomnia. Each request should have these respective endpoints in insomnia.

## RESTful API endpoits: HATS

UPDATE HAT- PUT REQUEST ============> http://localhost:8090/api/hats/<int:pk>/

DELETE HAT- DELETE REQUEST =========> http://localhost:8090/api/hats/<int:pk>/

DETAIL HAT- GET REQUEST ============> http://localhost:8090/api/hats/<int:pk>/

LIST HATS- GET REQUEST ============> http://localhost:8090/api/hats/

CREATE HAT- POST REQUEST ============> http://localhost:8090/api/hats/

## Urls for Locations in Monolith

LIST LOCATIONS- GET REQUEST ========> http://localhost:8100/api/locations/

LOCATION DETAIL- GET REQUEST ========> http://localhost:8100/api/locations/<int:pk>/

UPDATE LOCATION- PUT REQUEST =======> http://localhost:8100/api/locations/<int:pk>/

DELETE LOCATION- DELETE REQUEST =======> http://localhost:8100/api/locations/<int:pk>/

CREATE LOCATION- POST REQUEST =======> http://localhost:8100/api/locations/

## Ports

shoes-api-1 ======> 8080:8000

hats-api-1 =======> 8090:8000

## Back End Sample Data

Copy and Paste the following sample data in Insomnia for Creating a Hat.

For POST REQUEST to Create a Hat.
Json Body:
<br>
{
"fabric": "Denim",
"style_name": "Bucket Hatssss",
"color": "Blue",
"picture_url": "https://i.etsystatic.com/5414543/r/il/85b766/4243226822/il_570xN.4243226822_aj8m.jpg",
"location": "/api/locations/1/"
}

## Check list of functionality

Front End (Hats)
Navigation

- [x] Should have a link to an Add a Hat Form View (anywhere)
- [x] Should have a link to Show a List of Hats View

Add a Hat Form

- [x] Should contain relevant inputs
- [x] Should contain a Style Input
- [x] Should contain a Color Input
- [x] Should contain a Fabric input
- [x] Should contain a Picture URL input
- [x] Should contain a Location dropdown
- [x] On Submit should create a new Hat
- [x] No JS console errors
- [ ] Verify state updates after adding hat (hat list updates without manually reloading page) AUTOREFRESH

List All Hats View
Should contain the following info for each record

- [x] Style
- [x] Fabric
- [x] Color
- [x] Location

Stretch Goal

- [x] Added Hats picture to Hats List
- [ ] Create page for Hat detail.
- [ ] Create dismiss button on succeful submission message.

- [x] Delete Hats Button
- [x] Delete Hats Button works

Back End
Hats Resource

- [x] GET request to API should respond with a list of hats
- [x] GET request to API should respond with an appropriate status code
- [x] POST request to API should create a new hat resource
- [x] POST request to API should respond with an appropriate status code
- [x] DELETE request to API should respond with {deleted: true}
- [x] DELETE request to API should respond with appropriate status code

Polling Service

- [x] It should work and create the appropriate Value Objects for the service
- [x] Hat locations should be populated with LocationVOs from hats api, not Locations from wardrobe api

- Diagram

  ![picture-of-diagram](https://gitlab.com/stevenhuytran03/microservice-two-shot/-/blob/main/Diagram%20Overview.png)
