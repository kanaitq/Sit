import { seats } from '~/data/seatsData';
import DynamicContentWrapper from '~/components/DynamicContentWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Use client component for dynamic imports */}
          <DynamicContentWrapper seats={seats} />
          
          <footer className="mt-16 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Food Selection App</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
