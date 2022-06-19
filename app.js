const app = require('./config/express');

const p = app.get('port'),
cb = _ => console.log(`Server running on port ${p}`);

app.listen(p, cb)