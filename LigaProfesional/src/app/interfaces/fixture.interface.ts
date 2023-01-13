export interface Fixture{
        match_id:string,
        country_id:string,
        country_name:string,
        league_id:string,
        league_name:string,
        match_date:string,
        match_status:string,
        match_time:string,
        match_hometeam_id:string,
        match_hometeam_name:string,
        match_hometeam_score:string,
        match_awayteam_name:string,
        match_awayteam_id:string,
        match_awayteam_score:string,
        match_hometeam_halftime_score:string,
        match_awayteam_halftime_score:string,
        match_hometeam_extra_score:string,
        match_awayteam_extra_score:string,
        match_hometeam_penalty_score:string,
        match_awayteam_penalty_score:string,
        match_hometeam_ft_score:string,
        match_awayteam_ft_score:string,
        match_hometeam_system:string,
        match_awayteam_system:string,
        match_live:string,
        match_round:string,
        match_stadium:string,
        match_referee:string,
        team_home_badge:string,
        team_away_badge:string,
        league_logo:string,
        country_logo:string,
        league_year:string,
        fk_stage_key:string,
        stage_name:string,
        goalscorer: [],
        cards: [],
        substitutions: {
            home: [],
            away: []
        },
        lineup: {
           home: {
              starting_lineups: [],
              substitutes: [],
               coach: [],
                missing_players: []
            },
            away: {
               starting_lineups: [],
               substitutes: [],
               coach: [],
                missing_players: []
            }
        },
        statistics: [],
        statistics_1half: []
}