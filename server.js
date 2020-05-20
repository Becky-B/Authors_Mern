const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const AllAuthors = require('./server/routes/authors.routes');
AllAuthors(app);

app.listen(8001, () => {
    console.log("You're listening to 8001, now go away")
})