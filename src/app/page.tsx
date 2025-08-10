import Link from 'next/link';
export default function Home() {
  return (
    <div>

      <main className="flex flex-col items-center justify-center max-w-5xl mx-auto h-dvh">

        <div className='flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2:xl'>
          <h1>Mo&apos;s Computer<br />Repair Shop</h1>
          <address>555 Gateway Lane<br />
            Hayward, CA 94545</address>
          <p>Open Daily: 9am - 5pm</p>
          <Link href="tel:5555555555" className="hover:underline">555-555-5555</Link>
        </div>
      </main>


    </div>
  );
}
