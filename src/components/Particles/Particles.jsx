import { useEffect, useRef } from "react";
import "../../styles/particles.css";

export function UpsideDownParticles({ visible = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      initParticles();
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 5 + 2.5;

        if (Math.random() > 0.88) this.size *= 2;

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.3 + 0.1;

        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;

        this.wobbleSpeedX = Math.random() * 0.008 + 0.003;
        this.wobbleSpeedY = Math.random() * 0.006 + 0.002;

        this.wobbleAmountX = Math.random() * 2 + 1;
        this.wobbleAmountY = Math.random() * 1.5 + 0.5;

        this.wobbleOffsetX = Math.random() * Math.PI * 2;
        this.wobbleOffsetY = Math.random() * Math.PI * 2;

        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;

        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.5 + 0.15;

        this.life = 0;
        this.maxLife = Math.random() * 400 + 300;

        const gray = Math.floor(Math.random() * 30 + 90);
        this.color = `rgb(${gray},${gray},${gray})`;

        const count = Math.floor(Math.random() * 3) + 3;

        this.vertices = [];

        for (let i = 0; i < count; i++) {
          const a = (i / count) * Math.PI * 2;
          const r = Math.random() * 0.6 + 0.4;

          this.vertices.push({
            x: Math.cos(a) * r,
            y: Math.sin(a) * r,
          });
        }
      }

      update(time) {
        this.life++;

        const wobbleX =
          Math.sin(time * this.wobbleSpeedX + this.wobbleOffsetX) *
          this.wobbleAmountX;

        const wobbleY =
          Math.cos(time * this.wobbleSpeedY + this.wobbleOffsetY) *
          this.wobbleAmountY;

        this.x += this.speedX + wobbleX * 0.05;
        this.y += this.speedY + wobbleY * 0.05;

        this.rotation += this.rotationSpeed;

        const p = this.life / this.maxLife;

        if (p < 0.15) {
          this.opacity = (p / 0.15) * this.maxOpacity;
        } else if (p > 0.7) {
          this.opacity = ((1 - p) / 0.3) * this.maxOpacity;
        } else {
          this.opacity = this.maxOpacity;
        }

        if (this.x < -20) this.x = canvas.width + 10;
        if (this.x > canvas.width + 20) this.x = -10;
        if (this.y < -20) this.y = canvas.height + 10;
        if (this.y > canvas.height + 20) this.y = -10;

        if (this.life > this.maxLife) {
          this.reset();
        }
      }

      draw() {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        ctx.beginPath();

        ctx.moveTo(
          this.vertices[0].x * this.size,
          this.vertices[0].y * this.size,
        );

        for (let i = 1; i < this.vertices.length; i++) {
          ctx.lineTo(
            this.vertices[i].x * this.size,
            this.vertices[i].y * this.size,
          );
        }

        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];

      const count = Math.floor(canvas.width / 25);

      for (let i = 0; i < count; i++) {
        const p = new Particle();
        p.life = Math.random() * p.maxLife * 0.7;
        particles.push(p);
      }
    }

    function animate(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    resize();

    animate(0);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`particles-layer ${visible ? "visible" : ""}`}
    />
  );
}
