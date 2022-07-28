# Wardrobify

Team:

Jonathan Yoo - Shoes
Joyce Lum - Hats

## Design

The Hat, Shoe, Location, and Bin models are all entities. Hat and Shoe rely on Location and Bin respectively, however Hat and Shoe are each in their own bounded contexts apart from Location and Bin, which are in a bounded context under the main Wardrobe app. This means we have to create congruent value object models of Location and Bin inside of the Hat and Shoe apps respectively. We can do this using a polling method that requests data from the Location and Bin models in the Wardrobe app and writes congruent entries into a LocationVO model in the Hats app and a BinVO model in the Shoes app. After our deliberation, we have found that there are no root aggregates in our SPA, unless you consider the Location and Bin models as root aggregates of their respective VO models.

## Shoes microservice

The Shoes app requires a Shoe model and a BinVO model (which is populated with data from the Bin model in the Wardrobe app) for the Shoe model to reference. As there are not that many fields in the Shoe model, we are listing all fields of the model inside of the list view. This means what would traditionally be our detail view function only needs to process DELETE requests, as the prompt does not ask for update functionality (though we do plan on adding that as a stretch goal). We have two api url paths, one to send the list data of all shoes and one to process the delete request for a specific shoe.

## Hats microservice

When creating the hats microservice, we had to create a Hat model and LocationVO model that siphons data from the wardrobe app using the poller.py within the app folder. That poller.py has a function that retrieves data from the location model using an api call / get method to populate the LocationVO model. It will check every minute if there's new data. For the hats microservice, we also did one singular page for the hats list/detail view and created the delete button in the same row as the hat.


## Personal Stretch Goals
- Update favicon and title to 'Wardrobify'
- Turning the list view into dynamic cards
- Add edit button in list view page
- Ordering list by alphabetical wardrobe name 
- Redirect from form to hat list after successful creation