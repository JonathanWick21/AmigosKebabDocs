// src/pages/index.js
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero hero--primary" style={{ backgroundColor: '#e11d48', padding: '4rem 0' }}>
      <div className="container text--center">
        <h1 className="hero__title" style={{ color: 'white' }}>
          Manual de Usuario - Amigos Kebab
        </h1>
        <p className="hero__subtitle" style={{ color: 'white' }}>
          Guía técnica y de usuario para el catálogo de productos accesible.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Documentación de Amigos Kebab">
      <HomepageHeader />
      <main>
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
          <p>Bienvenido al portal de documentación. Aquí encontrarás los manuales de uso de nuestros componentes.</p>
        </section>
      </main>
    </Layout>
  );
}