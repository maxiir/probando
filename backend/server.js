import express, { Router } from 'express';
import router from './routes/routes.js';
import {config} from 'dotenv';
import cors from 'cors'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import morgan from 'morgan'
config()

const App = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

App.use(cors())
App.use(express.json())
App.use(router)
App.use(morgan('dev'))
App.set('port', process.env.PORT || 3200)
App.set(express.static(join(__dirname,'public')))

if (process.env.STATE==='production'){
    App.use(express.static(join(__dirname,'../frontend/dist')))
    App.get('*',(req,res)=>{
        const index = join(__dirname,'../frontend/dist/index.html')
        res.sendFile(index)
    })
}else{
    App.get('/',(req,res)=>{
        res.send('server running...')
    })
}


export default App;