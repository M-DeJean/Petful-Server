# Petful Server

[Live App](https://petful-client.m-dejean.vercel.app/)

Petful is an app that helps provide loving homes to animals in need. The Petful Adoption Center operates on a first-come, first-serve basis. The person in the front of the line will have the option to adopt one of our cats or dogs who have been at our center the longest. 

## API

`/api/dogs`
- GET - retreives a queue of all dogs
- DELETE - removes the first dog and person from the front of the queue

`/api/cats`
- GET - retreives a queue of all cats
- DELETE - removes the first cat and person from the front of the queue

`/api/people`
- GET - retreives a queue of all people
- DELETE - removes the first person from the front of the queue
- POST - adds a new person to the queue

## STACK

* JavaScript
* Node
* React
* Express
* HTML
* CSS
