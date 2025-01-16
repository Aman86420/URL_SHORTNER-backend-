const express = require('express');
const app = express();
const { router } = require('./routes/url');
const { connectToDatabase, handelGetAnalytics } = require('./connect');
const { default: mongoose } = require('mongoose');
const URL = require('./models/url'); // Import the URL model

const PORT = 8000;


app.use(express.json());

app.use('/url', router);
connectToDatabase().then(() => {
    console.log("connectwd db from index")

});


app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entery = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push:
            {
                viewHistory: { timestamp: Date.now() }
            }
        });
    res.redirect(entery.redirectUrl);
});




app.listen(PORT, () =>
    console.log(`"server is started at port ${PORT} "`)
);


