const moment = require('moment');

var posts = require('../../../content/content.json');

posts.forEach(post => {
    post.date = moment(post.date);
	post.html = post.html.replace(/^\t{3}/gm, '');
});

posts.sort((a, b) => { //Sort in reverse chronological order
    return a.date < b.date ? 1 : -1;
});

export default posts;
