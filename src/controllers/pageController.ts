import {Request, Response} from 'express'

export const home = (req:Request, res: Response)=>{
    const name = 'Alexandre'
    res.render('pages/home', {name})
}

export const dogs = (req:Request, res: Response)=>{
    
}

export const cats = (req:Request, res: Response)=>{
    
}

export const fishes = (req:Request, res: Response)=>{
   
}