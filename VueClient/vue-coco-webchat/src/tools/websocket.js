const socket = new WebSocket("ws://111.230.171.152:4002/ws");
const random = Math.random();

socket.onopen = function (evt) {
    console.log('网络连接已打开 ...');
    console.log(evt);

    var msg = {
        action: 'join',
        msg: '8888',
        nick: '江小白'
    };
    socket.send(JSON.stringify(msg));
};

socket.onmessage = function (evt) {
    console.log('收到消息: ' + evt.data);
};

socket.onclose = function (evt) {
    console.log('连接已关闭.');
    console.log(evt);
};

export default {
    socket,
    random
};