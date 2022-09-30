import { TeamDataResponse, TeamData } from "../handlers/types";

export function mapTeamData(teamData, teamSchedule, teamStandings) {
    const tRecord = teamRecord(teamStandings, teamData.teams[0].id)
    return {
        teamId: teamData.teams[0].id,
        teamName: teamData.teams[0].teamName,
        teamVenue: teamData.teams[0].venue.name,
        gamesPlayed: teamSchedule.totalGames,
        wins: tRecord.leagueRecord.wins,
        losses: tRecord.leagueRecord.wins,
        points: tRecord.goalsScored,
        goalsPerGame: tRecord.goalsScored/teamSchedule.totalGames,
        seasonfirstGameDate: teamSchedule.dates[0].date,
        seasonfirstOpponentName: teamSchedule.dates[0].games[1].teams.team.name
    }
}

export function teamRecord(teamStandings, teamId){
    const teamRecords = teamStandings.records[3].teamsRecords
    let teamRecord = {}
    for (let i=0; i<teamRecords.length; i++){
        if(teamRecords[i].team.id === teamId){
            return teamRecords[i]
        } else {
            throw new Error("no records")
        }
    }
}