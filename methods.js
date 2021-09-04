export default {
    matchTeamLogo(team) {
        switch (team) {
            case "ATL":
                return "bbclub-ATL ATL";
                break;
            case "HOU":
                return "bbclub-HOU";
                break;
            default:
                return "bbclub-mlb";
        }
    }
}