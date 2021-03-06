# SCOIR Technical Interview for Front-End Engineers
This repo contains an exercise intended for Front-End Engineers.

## Instructions
1. Fork this repo.
1. Using technology of your choice, complete [the assignment](./Assignment.md).
1. Update this README with
    * a `How-To` section containing any instructions needed to run/access your system.
    * an `Assumptions` section containing documentation on any assumptions made while interpreting the requirements.
1. Before the deadline, submit a pull request with your solution.

## Expectations
1. Please take no more than 8 hours to work on this exercise. Complete as much as possible and then submit your solution.
1. This exercise is meant to showcase how you work. With consideration to the time limit, do your best to treat it like a production system.


## How To
1. Make sure your computer has Node.js installed.
2. Navigate to the directory.
3. Run 'npm install'.
4. Run 'npm start' the application will run on port 3000.

## Assumptions
1. Any Breed of dog that has a sub-breed the typeahead populates with only combinations in the format 'breed'-'sub-breed'
2. Angular-ui-bootstrap in combination with bootstrap was used to implement the typeahead. 
3. Currently the list for the typeahead is populate with a request to the dogs.ceo domain when the 'appController' is attached to the DOM; 
	if I had more time I would have a prepopulated list and have a worker check dogs.ceo if they have a new breed and update the list