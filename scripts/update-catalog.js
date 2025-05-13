import fs from 'fs'
import fetch from 'node-fetch'

const response = await fetch('https://www.mondadori.it/feed/nuovi-libri')
const data = await response.json()

const books = data.books.map(book => ({
  title: book.title,
  coverUrl: book.coverUrl
}))

fs.writeFileSync('public/catalog.json', JSON.stringify(books, null, 2))
console.log('Catalogo aggiornato.')
