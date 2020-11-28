import * as Colyseus from 'colyseus.js';
import Match from './Match.js';

const client = new Colyseus.Client('ws://localhost:2567');

const m = new Match(document.getElementById('stage'), { onStateChange: function() {} });
m.begin([
    { type: 'water', value: 5 },
    { type: 'earth', value: 9 },
    { type: 'air', value: 10 },
    { type: 'water', value: 5 }
]);

setTimeout(function() {
    m.playCardOther(3);
}, 2000);