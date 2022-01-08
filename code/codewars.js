const switcher = (x) => x.reduce((a, b) => a + ' ?!abcdefghijklmnopqrstuvwxyz'[29 - b], '');

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'

console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])); // 'btswmdsbd kkw'
