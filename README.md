# Campr
A web app for reserving campsites.

https://campr-app.herokuapp.com/

![Campr Logo](https://github.com/taylorjosephgriffin/Campr/blob/master/screenshots/campr-logo-readme.gif?raw=true)

## Technologies Used

- Javascript
- React.js
- HTML5
- CSS3
- Express
- MongoDB
- Reactstrap
- SendGrid API V3

## Key Features

### View Campground List

![Campground List View](https://github.com/taylorjosephgriffin/Campr/blob/deploy-to-heroku/screenshots/campground-list.gif?raw=true)

### View Campsite Details

![Campground Details View](https://github.com/taylorjosephgriffin/Campr/blob/deploy-to-heroku/screenshots/campground-details-view.gif?raw=true)

### View Campsite List and Create a Reservation

![Campsite List and Create Reservation](https://github.com/taylorjosephgriffin/Campr/blob/deploy-to-heroku/screenshots/campsite-list-confirmation-view.gif?raw=true)

### Enter Payment Information and Complete a Reservation

![Create Order](https://user-images.githubusercontent.com/23637586/43985391-fed6d094-9cbb-11e8-8ed4-a814c70d71d8.gif?raw=true)

### Receive email confirmation using the SendGrid API. 

![Email Confirmation](https://user-images.githubusercontent.com/23637586/44109469-feaddfd8-9fb1-11e8-9f5e-94e8a0ffd07a.jpeg?raw=true)

### Plan your trip using various trip planning tools.

## Calculate the estimated fuel cost for your trip. 

![Fuel Cost Calculator](https://user-images.githubusercontent.com/23637586/44241984-18ddb600-a17c-11e8-8f45-6cc9d0efff74.gif?raw=true)

## Installation

### System Requirements
- Node.js v10
- NPM v6
- Mongodb v4

### Getting Started

Clone the repository
```
git clone https://github.com/taylorjosephgriffin/Campr`
```

Navigate to repo folder
```
cd campr
```

Install dependencies
```
npm install
```

Create a `.env` file in the project root. Example:

```
MONGODB_URI=mongodb://localhost:27017/campr
PORT=3000
```

Automatically run/restart server with `nodemon` and live reload page on update with `browser-sync`
```
npm run watch
```

Run without `nodemon` and `browser-sync`
```
npm run build
npm run start
```

## Current Features:

* User can view a list of campgrounds.
* User can view details of a campground.
* User can see a list of campsites for the selected campground.
* User can filter search results by amenities and price.
* User can create a reservation.
* User can view a pending reservation.
* User can edit a pending reservation.
* User can delete a pending reservation.
* User can pay for a reservation.
* User can receive order confirmation via email using the SendGrid API.
* User can calculate their fuel cost.

## Roadmap:

* User can leave a review for a specific campground.
* User can filter campgrounds by proximity.
* User can save a campground to a list of favorites. 
* User can create a packing list. 
* User can create a trip itinerary.
* Convert entire project to using Reactstrap components. 

## Contributing

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine.
3. **Commit** changes to your own branch.
4. **Push** your work back up to your fork.
5. Submit a **Pull request** so that your changes can be reviewed. 
