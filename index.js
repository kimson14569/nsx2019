const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'))

app.get('/api/getlist', (req,res) => {
    res.json(['a','b','c'])
})
app.get('/', (req, res) => {
    res.render('index', {
        user: {
            name: 'Sonk'
        },
        users: ['apple','samsung','sony']
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))