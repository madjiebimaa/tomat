import Header from '@/components/header/Header';
import Timer from '@/components/timer/Timer';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen max-w-2xl mx-auto p-4 bg-red-500">
      <Header />
      <section className="flex flex-col gap-4">
        <Timer />
      </section>
    </main>
  );
}
