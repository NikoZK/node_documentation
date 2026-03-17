import { readPage, constructPage } from "./templatingEngine.js"

const frontpage = readPage('./public/pages/frontpage/frontpage.html')
export const frontpagePage = constructPage(frontpage, {
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

const about = readPage('./public/pages/about/about.html')
export const aboutPage = constructPage(about, {
    documentTitle: "Niko's Node.js Documentation | About"
})

const week1 = readPage('./public/pages/documentation/week1.html')
export const week1Page = constructPage(week1, {
    documentTitle: "Niko's Node.js Documentation | Week 1"
})

const week2 = readPage('./public/pages/documentation/week2.html')
export const week2Page = constructPage(week2, {
    documentTitle: "Niko's Node.js Documentation | Week 2"
})

const week3 = readPage('./public/pages/documentation/week3.html')
export const week3Page = constructPage(week3, {
    documentTitle: "Niko's Node.js Documentation | Week 3"
})

const week4 = readPage('./public/pages/documentation/week4.html')
export const week4Page = constructPage(week4, {
    documentTitle: "Niko's Node.js Documentation | Week 4"
})

const week5 = readPage('./public/pages/documentation/week5.html')
export const week5Page = constructPage(week5, {
    documentTitle: "Niko's Node.js Documentation | Week 5"
})

const week6 = readPage('./public/pages/documentation/week6.html')
export const week6Page = constructPage(week6, {
    documentTitle: "Niko's Node.js Documentation | Week 6"
})

const week7 = readPage('./public/pages/documentation/week7.html')
export const week7Page = constructPage(week7, {
    documentTitle: "Niko's Node.js Documentation | Week 7"
})
