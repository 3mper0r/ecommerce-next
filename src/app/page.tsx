import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-96 flex-col items-center justify-between">
      <h1 className='h-1/4 grid place-content-center'>This is homepage</h1>
      <p className='h-full grid place-content-center'>here items will be listed</p>
    </main>
  )
}
