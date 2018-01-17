const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

/* HEROKU-dependent code */
const port = process.env.PORT || 3000;
/* . */

const data = {
    'home.hbs': {
        pageTitle: 'Home',
        welcomeMessage: 'Portfolio page',
    },
    'about.hbs': {
        pageTitle: 'About me',
    },
    'projects.hbs': {
        pageTitle: 'Projects',
    },
}

hbs.registerPartials(`${__dirname}/views/partials`);
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

let app = express();
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));
app.use((request, response, next) => {
    const now = new Date().toString();
    const log = `${now}: ${request.method} ${request.url}`;
    const log_file = `server.log`;
    console.log(log);
    fs.appendFile(log_file, `${log}\n`, err => { if (err) console.log(`Unable to append to ${log_file}`) });
    next(); // run
});

app.use((request, response, next) => {
    fs.readdir('views', (err, files) => {
        if (err) {
            response.send({ status: 'Invalid path' });
        } else {
            const getFileName = path => {
                return path == '/' ?
                    'home.hbs' :
                    `${path.substr(1)}.hbs`;
            };
            const method = request.method;
            const reqFile = getFileName(request.path);
            const fileList = files.filter(x => x.match(/.hbs/));
            if (fileList.find(x => x === reqFile))
                response.render(reqFile, data[reqFile]);
            else
                response.send({ status: '404' });
        };
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});