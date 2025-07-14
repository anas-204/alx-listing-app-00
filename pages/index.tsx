import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb clone built with Next.js" />
      </Head>

      <header className="border-b p-4">
        <nav className="flex justify-between items-center">
          <div className="text-rose-500 font-bold text-xl">airbnb</div>
          <div className="space-x-4">
            <button className="font-medium">Become a Host</button>
            <button className="bg-rose-500 text-white px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-xl overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Beautiful Place {item}</h3>
                <p className="text-gray-500">$120 night</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}