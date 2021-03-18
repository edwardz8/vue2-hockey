export default {
    matchTeamLogo(team) {
        switch (team) {
            case "ATL":
                return "bbclub-ATL ATL";
                break;
            case "HOU":
                return "bbclub-HOU";
                break;
            case "BOS":
                return "bbclub-BOS BOS";
                break;
            case "CLE":
                return "bbclub-CLE CLE";
                break;
            case "MIL":
                return "bbclub-MIL MIL";
                break;
            case "NYY":
                return "bbclub-NYY NYY";
                break;
            case "TB":
            case "TBR":
                return "bbclub-TB TB";
                break;
            case "BAL":
                return "bbclub-BAL BAL";
                break;
            case "TOR":
                return "bbclub-TOR TOR";
                break;
            case "DET":
                return "bbclub-DET DET";
                break;
            case "KC":
            case "KCR":
                return "bbclub-KC KC";
                break;
            case "MIN":
                return "bbclub-MIN MIN";
                break;
            case "CWS":
            case "CHW":
                return "bbclub-CWS CWS";
                break;
            case "OAK":
                return "bbclub-OAK OAK";
                break;
            case "TX":
                return "bbclub-TEX TEX";
                break;
            case "LAA":
                return "bbclub-LAA LAA";
                break;
            case "SEA":
                return "bbclub-SEA SEA";
                break;
            case "WSH":
            case "WSN":
                return "bbclub-WSH WSH";
                break;
            case "PHI":
                return "bbclub-PHI PHI";
                break;
            case "NYM":
                return "bbclub-NYM NYM";
                break;
            case "MIA":
                return "bbclub-MIA MIA";
                break;
            case "PIT":
                return "bbclub-PIT PIT";
                break;
            case "STL":
                return "bbclub-STL STL";
                break;
            case "CIN":
                return "bbclub-CIN CIN";
                break;
            case "CHI":
            case "CHC":
                return "bbclub-CHC CHC";
                break;
            case "LAD":
                return "bbclub-LAD LAD";
                break;
            case "ARI":
                return "bbclub-ARI ARI";
                break;
            case "COL":
                return "bbclub-COL COL";
                break;
            case "SF":
            case "SFG":
                return "bbclub-SF SF";
                break;
            case "SD":
            case "SDP":
                return "bbclub-SD SD";
                break;
            default:
                return "bbclub-mlb";
        }
    }
}