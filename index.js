console.log('Test app will just keep ticking...');

function tick() {
  setTimeout(function() {
    console.log('Ticking....');
    tick();
  }, 10000);
}
tick();


