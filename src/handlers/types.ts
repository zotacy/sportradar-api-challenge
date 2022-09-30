export interface TeamDataResponse {
    teamId: number;
    teamName: string;
    teamVenue: string;
    gamesPlayed: number;
    wins: number;
    losses: number;
    points: number;
    goalsPerGame: number;
    seasonfirstGameDate: string;
    seasonfirstOpponentName: string;
}

export interface PlayerDataResponse {
    playerId: string;
    playername: string;
    currentTeam: string;
    playerAge: string;
    playerNumber: string;
    playerPosition: string;
    isRookie: string;
    assists:number;
    goals: number;
    games: number;
    hits: number;
    points: number;
}
//--------------------------//
export interface TeamData {
    teams: [
        id: number,
        name: string,
        venue: {
            name: string;
        },
        teamName: string
    ]
}

export interface Season {
    seasons: [
		{
			seasonId: string,
			regularSeasonStartDate: string,
			regularSeasonEndDate: string,
			seasonEndDate: string,
        }
    ]
}