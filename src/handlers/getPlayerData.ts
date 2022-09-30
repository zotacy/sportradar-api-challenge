export async function getPlayerData(playerId: string, playerSeason:string){
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