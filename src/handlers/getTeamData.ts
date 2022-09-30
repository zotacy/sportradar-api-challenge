import { mapTeamData } from "../mappers/teamData.map"
import { convertToCSV } from "../utils"
import { Season } from "./types"

export default class TeamDataHandler {
    constructor(teamId, teamSeason){
        const teamData = getTeamData(teamId, teamSeason)
        const schedule = getSchedule(teamId, teamSeason)
        const standings = getStandings(teamId, teamSeason)

        const response = mapTeamData(teamData, schedule, standings)
        return convertToCSV(response)
    }
    
}

async function getTeamData(teamId: string, teamSeason:string){
    if (!teamId || !teamSeason){
        if(teamSeason.length !==8){
            alert(`season should be formatted as a 8-digit back-to-back years`)
            return
        }
        alert("Please enter both teamId and season")
        return;
    }
    const teamEndpoint = new URL(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?season=${teamSeason}`)
    const response = await fetch(teamEndpoint);
    if (response.status === 404) {
        alert(`Inputs were not valid`)
        return
    }
    const teamData = await response.json()
    console.log(teamData)
    return teamData
}

async function getSchedule(teamId: string, teamSeason:string) {
    const seasonsEndpoint = new URL(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamSeason}`)
    const seasonData: Season = await (await fetch(seasonsEndpoint)).json();
    console.log(seasonData)

    const scheduleEndpoint = new URL(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}&startDate=${seasonData.seasons[0].regularSeasonStartDate}&endDate=${seasonData.seasons[0].regularSeasonEndDate}`)
    const schedule = await (await fetch(scheduleEndpoint)).json();
    console.log(schedule)
    return schedule
}

async function getStandings(teamId: string, teamSeason:string) {
    const standingsEndpoint = new URL(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}&season=${teamSeason}`)
    const standings = await (await fetch(standingsEndpoint)).json();
    console.log(standings)
    return standings
}