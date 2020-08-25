class SingletonWebsocket {
    constructor() {
        this.randomNum = Math.random();
        this.websocket = new WebSocket("ws://127.0.0.1");
    }
}