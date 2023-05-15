import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'
import { send } from 'process'

dotenv.config()

const server = express()

//CONFIGURAÇÃO TEMPLATE ENGINE
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

//CONFIGURAÇÃO PASTA PUBLICA
server.use(express.static(path.join(__dirname, '../public')))

//ROTAS
server.use(mainRoutes)
server.use((req, res)=>{
    res.send('Página não encontrada!')
})

server.listen(process.env.PORT)
