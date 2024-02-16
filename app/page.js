"use client"
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HamburgerMenu from './components/hamburgermenu';
import OverlayMenu from './components/overlaymenu';
import HeroImage from './components/HeroImage';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <OverlayMenu />}
      <HeroImage />
    </main>
  );
}
