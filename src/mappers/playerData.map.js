"use strict";
exports.__esModule = true;
exports.mapPlayerData = void 0;
//toDo: add type
function mapPlayerData(playerData, playerStats) {
    var player = playerData.people[0];
    var stats = playerStats.stats[0].splits[0].stat;
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
        points: stats.points
    };
}
exports.mapPlayerData = mapPlayerData;
