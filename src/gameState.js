const gameState = {
    current: "INIT",
    clock: 1,
    wakeTime: -1,
    tick(){
        this.clock++;
        console.log('clock', this.clock);

        return this.clock;
    },
    startGame(){
        console.log('hatching');
        this.current = "HATCHING";
        this.wakeTime = this.clock + 3;
    },
    wake(){
        console.log('awoken');
        this.current = "IDLING";
        this.wakeTime = -1;
    },
    handleUserAction(icon){
        console.log(icon);
    }
};

export default gameState;

