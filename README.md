# sportradar-api-challenge
Coding exercise for Sportradar

## Structure
SportRadar-Api-Challenge is built to return a csv file containing team data and player data determined by teamId, playerId, and season respectively.

Makes calls to following API endpoint to retrieve information.
TeamData
`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?season=${teamSeason}`
`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}&season=${teamSeason}`
`https://statsapi.web.nhl.com/api/v1/standings?teamId=${teamId}&season=${teamSeason}`

PlayerData
`https://statsapi.web.nhl.com/api/v1/people/${playerId}?season=${playerSeason}`
`https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?season=${playerSeason}&stats=statsSingleSeason`

## Methodology
 My standard methodology would be to have seperate files for the different functionality. This makes it easier for testing and keeping a project modular, flexible, and scalable. 

 I also typically take a TDD approach, however I decided to start by getting the functionality first in this case and then to go back and add tests (due to time constraints).

## Running
Run the file locally using "Run" in your IDE (or F5).

## Issues/ Things to improve
I ran into 2 main issues during this challenge. The first being that I was having a difficult time getting the scripts to run from seperate files. I spent too much time trying to resolve this and ended up just comining the functions into a single script on the main index.html page. This led to the second issue being time, having spent too much time on 1 issue and with the balance of other things, I was not able to spend as much time to get this challenge where I would like it to be (achieving MVP, setting up tests, having the file organization alligned with my original goal).

I went down a path using the html file for testing purposes, and fell into a rabbit hole trying to figure out a particular way to do the challenge.

1. Running local: Typically this would be set up for an actual local file to run
2. File Structure: I only moved the getTeamData info into the main index.html, however I would've liked to have kept it seperate. Would more closely represent the PlayerData structure, with a main file calling the 2 seperate functions.
3. Testing: Did not write any test (time constraints)
4. Refactoring: There are a few spots that could be improved for clarity/simplification.
