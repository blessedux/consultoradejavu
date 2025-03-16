'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface SectionParticlesProps {
  particleCount?: number;
  color?: string;
  opacity?: number;
  speed?: number;
  className?: string;
}

const SectionParticles = ({
  particleCount = 50,
  color = 'rgba(255, 255, 255, 0.8)',
  opacity = 0.8,
  speed = 1,
  className = '',
}: SectionParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (!canvas || !container) return;
      // Use window width plus extra width to ensure full coverage
      canvas.width = window.innerWidth + 20; // Add extra width for sidebar coverage
      canvas.height = container.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      opacity: Math.random() * opacity / 2 + opacity / 2, // Vary the opacity
    }));

    const updateParticles = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Make particles wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Use the color parameter with particle's individual opacity
        const particleColor = color.replace(/[\d.]+\)$/g, `${p.opacity})`);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(updateParticles);
    };
    
    updateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, color, opacity, speed]);

  return (
    <div ref={containerRef} className={`absolute top-0 -left-10 right-0 bottom-0 overflow-hidden ${className}`} style={{ width: 'calc(100vw + 10px)' }}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default SectionParticles; 