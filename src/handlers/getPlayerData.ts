import { mapPlayerData } from "../mappers/playerData.map"
import { convertToCSV } from "../utils"

export default class PlayerData {
    constructor(playerId, playerSeason){
        const playerData = getPlayerData(playerId, playerSeason)
        const playerStats = getPlayerStats(playerId, playerSeason)
        
        const playerDataResponse = mapPlayerData(playerData, playerStats)
        return convertToCSV(playerDataResponse)
    }
}

export async function getPlayerData(playerId, playerSeason){
    if (!playerId || !playerSeason){
        if(playerSeason.length !==8){
            alert(`season should be formatted as a 8-digit year`)
            return
        }
        alert("Please enter both teamId and season")
        return;
    }
    const playerEndpoint = new URL(`https://statsapi.web.nhl.com/api/v1/people/${playerId}?season=${playerSeason}`)
    const response = await fetch(playerEndpoint);
    if (response.status === 404) {
        alert(`Inputs were not valid`)
        return
    }
    const playerData = await response.json()
    console.log(playerData)
}

async function getPlayerStats(playerId, playerSeason) {
    const playerStatsEndpoint = new URL(`https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?season=${playerSeason}&stats=statsSingleSeason`)
    const playerStats = await (await fetch(playerStatsEndpoint)).json();
    console.log(playerStats)
    return playerStats
}
