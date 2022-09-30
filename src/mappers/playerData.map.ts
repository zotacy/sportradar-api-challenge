//toDo: add type
export function mapPlayerData(playerData, playerStats): any {
    const player = playerData.people[0]
    const stats = playerStats.stats[0].splits[0].stat
    return {
        playerId: player.id,
        playername: player.fullName,
        currentTeam: player.currentTeam.name,
        playerAge: player.currentAge,
        playerNumber: player.primaryNumber,
        playerPosition: player.primaryposition.name,
        isRookie: player.rookie,
        assists: stats.assists,
        goals: stats.goals,
        games: stats.games,
        hits: stats.hits,
        points: stats.points,
    }
}