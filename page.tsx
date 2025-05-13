'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type Book = {
  title: string
  coverUrl: string
}

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('/catalog.json')
      .then(res => res.json())
      .then(setBooks)
  }, [])

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuovi libri</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, i) => (
          <Card key={i} className="flex flex-col items-center">
            <CardContent className="p-4 flex flex-col items-center gap-3">
              <Image
                src={book.coverUrl}
                alt={`Copertina ${book.title}`}
                width={200}
                height={300}
                className="rounded-xl shadow-lg"
              />
              <div className="text-center font-medium">{book.title}</div>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://annas-archive.org/search?q=${encodeURIComponent(book.title)}`,
                    '_blank'
                  )
                }
              >
                Cerca su Anna's Archive
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
