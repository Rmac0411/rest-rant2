const router = rewuire('express').Router()

router.get('/', (req, res)=>{
    res.send('GET /places')
})

module.export= router