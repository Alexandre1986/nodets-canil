import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pets'

export const home = (req:Request, res: Response)=>{
    const list = Pet.getAll()
    const banner = {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    }
    const menu = createMenuObject('all')
    res.render('pages/page', { banner, menu, list})
}

export const dogs = (req:Request, res: Response)=>{
    const list = Pet.getFromType('dog')
    const banner = {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }
    const menu = createMenuObject('dog')
    res.render('pages/page', { banner, menu, list})
}

export const cats = (req:Request, res: Response)=>{
    const list = Pet.getFromType('cat')
    const banner = {
        title: 'Gatos',
        background: 'banner_cat.jpg'
    }
    const menu = createMenuObject('cat')
    res.render('pages/page', { banner, menu, list})
}

export const fishes = (req:Request, res: Response)=>{
    const list = Pet.getFromType('fish')
    const banner = {
        title: 'Peixes',
        background: 'banner_fish.jpg'
    }
    const menu = createMenuObject('fish')
    res.render('pages/page', { banner, menu, list})
}