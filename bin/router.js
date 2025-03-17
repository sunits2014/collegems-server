(
    function () {

        const express = require('express');
        const router = express.Router();
        const package = require('../package.json');

        router.get('/', (req, res) => {
            res.status(200).json({
                name: package.name,
                version: package.version,
                author: package.author,
                status: 'UP'
            })
        })

        module.exports = router;
    }
)()