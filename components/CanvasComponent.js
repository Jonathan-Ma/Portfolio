import { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // Function to resize the canvas based on its container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();

    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.random() * this.effect.canvasWidth / 4;
        this.y = this.effect.canvasHeight;
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap / 1.2;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = 0.8;
        this.ease = 0.08;
      }
      draw() {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
      }
      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }

    class Effect {
      constructor(context, canvasWidth, canvasHeight) {
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.textX = this.canvasWidth / 2;
        this.textY = this.canvasHeight / 2;
        this.fontSize = this.canvasWidth * 0.15;

        this.particles = [];
        this.gap = 6;
        this.mouse = {
          radius: 10000,
          x: 0,
          y: 0,
        };
        canvas.addEventListener('mousemove', this.handleMouseMove);
      }

      handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      };

      wrapText(text) {
        const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
        gradient.addColorStop(0.3, 'dimgray');
        gradient.addColorStop(0.5, 'gray');
        gradient.addColorStop(0.7, 'lightgray');
        this.context.fillStyle = gradient;
        this.context.font = 'bold ' + this.fontSize + 'px sans-serif';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText(text, this.textX, this.textY);
        this.convertToParticles();
      }

      convertToParticles() {
        this.particles = [];
        const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;

        for (let y = 0; y < this.canvasHeight; y += this.gap) {
          for (let x = 0; x < this.canvasWidth; x += this.gap) {
            const index = (y * this.canvasWidth + x) * 4;
            const alpha = pixels[index + 3];
            if (alpha > 0) {
              const gray = Math.round(('red' + 'green' + 'blue') / 3); // assuming red, green, and blue are equal for gray
              const color = `rgb(${gray}, ${gray}, ${gray})`;
              this.particles.push(new Particle(this, x, y, color));
            }
          }
        }
      }

      render() {
        this.particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }
      resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.textX = this.canvasWidth / 2;
        this.textY = this.canvasHeight / 2;
      }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.wrapText('Projects');
    effect.render();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      canvas.removeEventListener('mousemove', effect.handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="projects"></canvas>;
};

export default CanvasComponent;
