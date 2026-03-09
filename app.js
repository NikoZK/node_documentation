    import express from 'express'
    import path from 'path'
    const app = express()

    app.use(express.json())
    app.use(express.static('public'))

    // ===================== Pages =====================

    app.get('/', (req, res) => {
        res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'))
    })

    app.get('/about', (req, res) => {
        res.sendFile(path.resolve('public/pages/about/about.html'))
    })

    app.get('/week1', (req, res) => {
        res.sendFile(path.resolve('public/pages/documentation/week1.html'))
    })

    
    const PORT = process.env.PORT || 8080

    const server = app.listen(PORT, (error) => {
        if (error) {
            console.log("Error starting the server")
        }
        console.log("Server is running on port", server.address().port, "The enviroment is:", process.env.NODE_ENV)
    })