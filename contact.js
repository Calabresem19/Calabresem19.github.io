var PythonShell = require('python-shell');

PythonShell.run('contact.pyc', function (err) {
  if (err) throw err;
  console.log('finished');
});
