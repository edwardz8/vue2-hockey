export default {
    matchPlayerImage(player) {
        switch (player) {
            case "Auston Matthews":
                return require("./src/assets/Auston_Matthews.svg");
                break;
            case "Connor McDavid":
                return require("./src/assets/Connor_Mcdavid.svg");
                break;
            case "Alex Ovechkin":
                return require("./src/assets/ovi.svg");
                break;
            case "William Nylander":
                return require("./src/assets/William_Nylander.svg");
                break;
            case "John Tavares":
                return require("./src/assets/John_Tavares.svg");
                break;
            case "Johnny Gaudreau":
                return require("./src/assets/johnny_g.svg");
                break;
            case "Sidney Crosby":
                return require("./src/assets/crosby.svg");
                break;
            case "Sean Monahan":
                return require("./src/assets/Sean Monahan.svg");
                break;
            case "Conner McDavid":
                return require("./src/assets/Connor_Mcdavid.svg");
                break;
            case "Conner McDavid":
                return require("./src/assets/Connor_Mcdavid.svg");
                break;
            case "Carey Price":
                return require("./src/assets/Carey_Price.svg");
                break;
            default:
                return require("./src/assets/Skates-Retro-Pink-2.svg");
        }
    }
}