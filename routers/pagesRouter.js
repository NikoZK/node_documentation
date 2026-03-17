import { Router } from 'express'
import { aboutPage, frontpagePage, week1Page, week2Page, week3Page, week4Page, week5Page, week6Page, week7Page } from '../util/pagesUtil.js'

const router = Router()

router.get('/', (req, res) => {
    res.send(frontpagePage)
})

router.get('/about', (req, res) => {
    res.send(aboutPage)
})

router.get('/week1', (req, res) => {
    res.send(week1Page)
})

router.get('/week2', (req, res) => {
    res.send(week2Page)
})

router.get('/week3', (req, res) => {
    res.send(week3Page)
})

router.get('/week4', (req, res) => {
    res.send(week4Page)
})

router.get('/week5', (req, res) => {
    res.send(week5Page)
})

router.get('/week6', (req, res) => {
    res.send(week6Page)
})

router.get('/week7', (req, res) => {
    res.send(week7Page)
})

export default router