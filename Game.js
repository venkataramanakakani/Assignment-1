const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    // Divided into levels 
    lEVEL1:  Symbol("level1"),
    LEVEL2: Symbol("level2"),
    LEVEL3: Symbol("level3"),
    LEVEL4: Symbol("level4"),
    LEVEL5: Symbol("level5"),
    LEVEL6: Symbol("level6"),
    EXIT:Symbol("Exit")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Hi There!! Welcome to Mind Game.In this Game you have Three Stages.You have to give the right Answer to eligible from one  stage to another stage.Please type yes to Continue";        
                this.stateCur = GameState.LEVEL1;
                break;
                //First Stage of the Game
            case GameState.LEVEL1:
                if(sInput.toLowerCase().match("yes")){
                    sReply = " Awesome!! Now You are at First Stage .Pleas answe this Question..1.Berlin is the capital of which country?";
                    this.stateCur = GameState.LEVEL2;
                }else{
                    // lost the First stage
                    sReply ="oops looks your not interestd Better luck Next time?";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.LEVEL2:
                if(sInput.toLowerCase().match("germany")){
                    sReply = "Perfect !! Would like go Another level.Please type yes"; 
                    this.stateCur = GameState.LEVEL3;
                }else{
                    sReply = "oops Wrong Answer"; 
                     this.stateCur = GameState.WELCOMING;

                }
                break;
                // Second stage of the game
            case GameState.LEVEL3:
                if(sInput.toLowerCase().match("yes")){
                    sReply = " Right Choice !! Please answer this question ..Who were the series of books for beginners, first published in 1991 and initially about computer systems and software, explicitly aimed at??";
                    this.stateCur = GameState.LEVEL4;

                }else{
                    sReply = "OOPs Your not interested ,Better luck next time";
                    this.stateCur = GameState.WELCOMING;
                 // Lost of the Second stage
                }
                break;
                case GameState.LEVEL4:
                if(sInput.toLowerCase().match("dummies")){
                    sReply = "Correct!! Would Like to move next level.Please type yes to reach final Stage";
                    this.stateCur = GameState.LEVEL5;

                }else{
                    sReply = "Wrong Answer";
                    this.stateCur = GameState.WELCOMING;
    
                }
                break;
                // Final Stage of the game
                case GameState.LEVEL5:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Which is the longest River in the WORLD??";
                    this.stateCur = GameState.LEVEL6;

                }else{
                    sReply = "Looks Your Not interested Betterluck Next time";
                    this.stateCur = GameState.WELCOMING;
    
                }
                break;
                case GameState.LEVEL6:
                if(sInput.toLowerCase().match("nile")){
                    sReply = " Your Genius!!Congratualation .You won the Game..";
                    this.stateCur = GameState.WELCOMING;

                }else{
                    sReply = "oops Your Failed.Better Luck Next Time";
                    this.stateCur = GameState.WELCOMING;
    
                }
                break;
        }
        return([sReply]);
    }
}
