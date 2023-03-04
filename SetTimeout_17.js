console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

function task(message) {
    console.log(message);
}

console.log('Done!');
