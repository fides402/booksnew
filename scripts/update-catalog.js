import fs from 'fs'

const books = [
  {
    title: "Il nuovo romanzo italiano",
    coverUrl: "https://www.lettura.it/images/nuovo-romanzo.jpg"
  },
  {
    title: "The Latest Crime Thriller",
    coverUrl: "https://www.thetimes.co.uk/images/latest-thriller.jpg"
  }
]

fs.mkdirSync('public', { recursive: true })
fs.writeFileSync('public/catalog.json', JSON.stringify(books, null, 2))
console.log(`Catalogo aggiornato con ${books.length} libri.`)
