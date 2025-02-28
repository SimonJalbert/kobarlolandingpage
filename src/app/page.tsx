'use client'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  useEffect(() => {
    // Animation script will be loaded via Script component
  }, []);

  return (
    <>
      <nav>
        <div className="nav-left">
            <div className="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF6B6B"/>
                </svg>
                <span>kobarlo</span>
            </div>
            <div className="nav-links">
                <a href="#">Features</a>
                <a href="#">Showcase</a>
                <a href="#">Pricing</a>
                <a href="#">Templates</a>
                <a href="#">Docs</a>
                <a href="#">Blog</a>
            </div>
        </div>
        <div className="nav-right">
            <a href="#" className="social-link">𝕏</a>
            <a href="#" className="social-link">in</a>
            <a href="#" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <button className="btn-sign-in">Sign in</button>
            <button className="btn-sign-up">Sign up</button>
        </div>
      </nav>

      <main>
        <div className="hero">
            <h1 className="title">Bring your designs to life with AI</h1>
            <p className="subtitle">Watch as our AI transforms static designs into stunning animations. No coding required.</p>
            
            <div className="creative-input">
                <div className="input-container">
                    <textarea placeholder="Describe your animation or paste your design URL..." className="design-input"></textarea>
                    <button className="generate-btn">
                        <span className="btn-text">Generate Magic</span>
                        <div className="btn-particles"></div>
                    </button>
                </div>
            </div>

            <div className="animation-container">
                <div className="animation-stage">
                    {/* Animation content will be populated by JavaScript */}
                </div>
            </div>

            <div className="divider">
                <div className="divider-line"></div>
            </div>
        </div>
      </main>

      <section className="testimonials-section">
        <h2 className="testimonials-title">Loved by thousands of designers</h2>
        <div className="testimonials-grid">
            <div className="testimonial-card">
                <p className="testimonial-text">"I absolutely LOVE how Kobarlo transforms my static designs! As a UI designer, I've always struggled with bringing my mockups to life. Now I can create stunning animations in seconds that perfectly capture my design vision. The way it preserves my design system while adding motion is simply magical."</p>
                <p className="testimonial-author">Sarah J. - Senior UI Designer</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"Kobarlo has revolutionized my design workflow. I can quickly prototype animations and transitions that would have taken hours in After Effects. My clients are blown away by the polished motion designs I can now deliver with minimal effort. It's like having a motion design expert on my team!"</p>
                <p className="testimonial-author">Michael T. - Freelance Designer</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"Of all the design tools I've tried, Kobarlo stands out for its intuitive approach to animation. I can simply describe what I want or upload my Figma designs, and it generates beautiful, on-brand animations that perfectly complement my visual style. It's become an essential part of my design process."</p>
                <p className="testimonial-author">Emma L. - Creative Director</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"As someone who focuses on design systems, I was skeptical about AI-generated animations. But Kobarlo actually respects my design tokens and maintains visual consistency while adding delightful motion. It's helped me create a comprehensive motion language for our entire product suite."</p>
                <p className="testimonial-author">David R. - Design Systems Lead</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"I tried Kobarlo yesterday, and it was amazing. I had to design animated components for our mobile app, and one prompt was enough to generate beautiful micro-interactions. The animations were smooth, purposeful, and enhanced the user experience without being distracting."</p>
                <p className="testimonial-author">Sophia K. - UX Designer</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"I'm always amazed at how Kobarlo can take my static designs and add just the right amount of motion. It somehow understands the intent behind my designs and creates animations that enhance rather than overpower the user experience. It's like it reads my mind!"</p>
                <p className="testimonial-author">Alex W. - Product Designer</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"As a design educator, I've recommended Kobarlo to all my students. It helps them understand motion design principles by seeing their static work transformed with proper easing, timing, and spatial awareness. It's become an invaluable teaching tool in my animation workshops."</p>
                <p className="testimonial-author">Nina P. - Design Educator</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"Kobarlo is hands down the best design animation tool I've ever used. It's like having a motion design expert who understands your aesthetic and can bring your vision to life. For the first time, I can create cohesive animations across our entire product without spending weeks in After Effects."</p>
                <p className="testimonial-author">James L. - Senior Product Designer</p>
            </div>
            
            <div className="testimonial-card">
                <p className="testimonial-text">"Wow, just wow! Kobarlo has completely transformed how I present my design work. Clients used to struggle to visualize how static mockups would translate to interactive experiences. Now I can show them exactly how everything will move and feel. It's been a game-changer for my design business."</p>
                <p className="testimonial-author">Olivia M. - UI/UX Consultant</p>
            </div>
        </div>
      </section>

      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
        strategy="beforeInteractive"
      />
      <Script id="custom-animations" strategy="afterInteractive">
        {`
          // Heart animation
          document.addEventListener('DOMContentLoaded', () => {
            // Heart animation
            const heartAnimation = anime({
                targets: '.heart-animation',
                scale: [0.8, 1],
                opacity: [0, 1],
                rotate: ['-15deg', '0deg'],
                duration: 1000,
                easing: 'spring(1, 80, 10, 0)',
                delay: 300
            });

            // Floating animation for the heart
            anime({
                targets: '.heart-animation',
                translateY: [-5, 5],
                direction: 'alternate',
                loop: true,
                duration: 1500,
                easing: 'easeInOutSine'
            });

            // Staggered text animations for main elements
            const textElements = anime.timeline({
                easing: 'easeOutExpo',
                delay: 1000
            });

            textElements
                .add({
                    targets: '.title',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800
                })
                .add({
                    targets: '.subtitle',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800
                }, '-=600')
                .add({
                    targets: '.creative-input',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800
                }, '-=600');

            // Button hover animation
            const generateBtn = document.querySelector('.generate-btn');
            if (generateBtn) {
                generateBtn.addEventListener('mouseover', () => {
                    anime({
                        targets: '.btn-particles',
                        background: 'linear-gradient(45deg, #FF6B6B, #8B5CF6, #3B82F6, #EC4899)',
                        backgroundSize: '400% 400%',
                        keyframes: [
                            { backgroundPosition: '0% 50%' },
                            { backgroundPosition: '100% 50%' },
                            { backgroundPosition: '0% 50%' }
                        ],
                        duration: 3000,
                        easing: 'easeInOutQuad'
                    });
                });
            }

            // Testimonial cards hover animation
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            testimonialCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    anime({
                        targets: card,
                        translateY: -10,
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
                        duration: 400,
                        easing: 'easeOutQuad'
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    anime({
                        targets: card,
                        translateY: 0,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        duration: 400,
                        easing: 'easeOutQuad'
                    });
                });
            });
          });
        `}
      </Script>
    </>
  )
} 