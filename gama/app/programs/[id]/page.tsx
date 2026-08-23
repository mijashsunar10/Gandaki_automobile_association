import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { programsData } from '../../components/ProgramsSection/programsData';

// This is required for Next.js static export
export function generateStaticParams() {
  return programsData.map((program) => ({
    id: program.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = programsData.find((p) => p.id === id);
  if (!program) {
    return { title: 'Program Not Found' };
  }
  return {
    title: `${program.title} | GAMA`,
    description: program.desc,
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = programsData.find((p) => p.id === id);

  if (!program) {
    notFound();
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', paddingBottom: '100px' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      {/* HEADER SECTION */}
      <section style={{ background: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <span style={{ 
            display: 'inline-block', 
            background: 'var(--red, #e53935)', 
            padding: '5px 15px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            {program.status}
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: '0 0 20px', fontWeight: 900 }}>
            {program.title}
          </h1>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '25px', 
            flexWrap: 'wrap',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '14px',
            fontWeight: 600
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-calendar-days"></i>
              {program.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-location-dot"></i>
              {program.location}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section style={{ padding: '0 20px', marginTop: '-40px' }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: 'auto', 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}>
          
          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <Image 
              src={program.image}
              alt={program.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={{ padding: '40px 50px' }}>
            <h2 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '20px', fontWeight: 800 }}>
              कार्यक्रमको विवरण
            </h2>
            <div style={{ 
              fontSize: '16px', 
              lineHeight: '1.8', 
              color: '#334155',
              whiteSpace: 'pre-wrap'
            }}>
              {program.fullDesc}
            </div>

            <div style={{ marginTop: '50px', borderTop: '1px solid #e2e8f0', paddingTop: '30px' }}>
              <Link 
                href="/programs" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  color: '#1e3a8a',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '15px'
                }}
              >
                <i className="fa-solid fa-arrow-left"></i> सबै कार्यक्रमहरूमा फर्कनुहोस्
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
