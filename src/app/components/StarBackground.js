"use client";
import { useEffect, useRef } from "react";
import MainPage from "./MainPage";

export default function StarBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w = window.innerWidth;
        let h = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.scale(dpr, dpr);

        function resize() {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.scale(dpr, dpr);
        }
        window.addEventListener("resize", resize);

        function hexToRgb(hex) {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `${r}, ${g}, ${b}`;
        }

        let mouseX = 0, mouseY = 0;
        window.addEventListener("mousemove", (e) => {
            mouseX = (e.clientX / w - 0.5) * 2;
            mouseY = (e.clientY / h - 0.5) * 2;
        });

        const starColors = ["#ffffff", "#aaddff", "#ffeedd", "#ffd1dc"];
        const starLayers = [
            { stars: [], speed: 0.3, scale: 1.5 },
            { stars: [], speed: 0.2, scale: 1 },
            { stars: [], speed: 0.1, scale: 0.5 }
        ];
        const totalStars = Math.floor(w * 0.3);

        starLayers.forEach(layer => {
            for (let i = 0; i < totalStars / 3; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const radius = Math.pow(Math.random(), 0.5) * w * 0.5;
                layer.stars.push({
                    angle,
                    radius,
                    z: Math.random() * w,
                    speed: 0.0005 + Math.random() * 0.001,
                    color: starColors[Math.floor(Math.random() * starColors.length)],
                });
            }
        });

        const galaxies = [];
        const galaxyColors = [
            ["#ffccff", "#660066"],
            ["#ccffff", "#003366"],
            ["#ffeecc", "#993300"]
        ];
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * w * 0.4;
            const z = Math.random() * w;
            const [color1, color2] = galaxyColors[Math.floor(Math.random() * galaxyColors.length)];
            galaxies.push({ angle, radius, z, color1, color2, speed: 0.0002 + Math.random() * 0.0005 });
        }

        const nebulas = [];
        const nebulaColors = ["#8844aa", "#3366ff", "#66cc99", "#ff6699"];
        for (let i = 0; i < 3; i++) {
            nebulas.push({
                x: Math.random() * w,
                y: Math.random() * h,
                radius: 100 + Math.random() * 300,
                color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
                baseOpacity: 0.1 + Math.random() * 0.3,
                offset: Math.random() * 10
            });
        }

        const shootingStars = [];

        function createShootingStar() {
            if (shootingStars.length < 2 && Math.random() < 0.01) {
                const length = 200 + Math.random() * 200;
                const speed = 8 + Math.random() * 5;
                const angle = Math.PI * 0.75 + (Math.random() - 0.5) * 0.2;

                shootingStars.push({
                    x: Math.random() * w,
                    y: Math.random() * h * 0.5,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    length,
                    life: 1,
                    fadeRate: 0.015,
                });
            }
        }

        function drawShootingStars() {
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const star = shootingStars[i];

                const endX = star.x - star.vx * star.length / 10;
                const endY = star.y - star.vy * star.length / 10;

                const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
                gradient.addColorStop(0, `rgba(255,255,255,${star.life})`);
                gradient.addColorStop(1, `rgba(255,255,255,0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                star.x += star.vx;
                star.y += star.vy;
                star.life -= star.fadeRate;

                if (
                    star.life <= 0 ||
                    star.x > w + star.length ||
                    star.y > h + star.length
                ) {
                    shootingStars.splice(i, 1);
                }
            }
        }

        let time = 0;
        let lastFrame = 0;

        function animate(now) {
            if (now - lastFrame < 33) {
                requestAnimationFrame(animate);
                return;
            }
            lastFrame = now;
            time += 0.01;

            ctx.fillStyle = "rgba(5, 10, 25, 1)";
            ctx.fillRect(0, 0, w, h);

            nebulas.forEach((n) => {
                const opacity = n.baseOpacity + Math.sin(time + n.offset) * 0.05;
                const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
                gradient.addColorStop(0, `rgba(${hexToRgb(n.color)}, ${opacity})`);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            galaxies.forEach(g => {
                g.angle += g.speed;
                g.z -= 0.2;
                if (g.z <= 1) g.z = w;

                const k = 128.0 / g.z;
                const x = Math.cos(g.angle) * g.radius;
                const y = Math.sin(g.angle) * g.radius;
                const parallaxX = mouseX * 50 * (1 - g.z / w);
                const parallaxY = mouseY * 50 * (1 - g.z / w);

                const px = x * k + w / 2 + parallaxX;
                const py = y * k + h / 2 + parallaxY;
                const radius = (1 - g.z / w) * 80;

                if (px >= 0 && px <= w && py >= 0 && py <= h) {
                    const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius);
                    gradient.addColorStop(0, g.color1);
                    gradient.addColorStop(1, "rgba(0,0,0,0)");
                    ctx.beginPath();
                    ctx.fillStyle = gradient;
                    ctx.globalAlpha = 0.3 + 0.7 * (1 - g.z / w);
                    ctx.arc(px, py, radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }
            });

            starLayers.forEach(layer => {
                layer.stars.forEach((star, i) => {
                    star.angle += star.speed * layer.speed;
                    if (star.angle > Math.PI * 2) star.angle -= Math.PI * 2;
                    star.z -= layer.speed;
                    if (star.z <= 0.1) star.z = w;

                    const k = 128.0 / star.z;
                    const x = Math.cos(star.angle) * star.radius;
                    const y = Math.sin(star.angle) * star.radius;
                    const parallaxX = mouseX * 20 * (1 - star.z / w);
                    const parallaxY = mouseY * 20 * (1 - star.z / w);

                    const px = x * k + w / 2 + parallaxX;
                    const py = y * k + h / 2 + parallaxY;

                    if (px >= 0 && px <= w && py >= 0 && py <= h) {
                        const size = (1 - star.z / w) * 2.5 * layer.scale;
                        const baseOpacity = 0.2 + 0.8 * (1 - star.z / w);
                        const twinkle = 0.5 + 0.5 * Math.sin(time + i);
                        const opacity = baseOpacity * twinkle;

                        ctx.beginPath();
                        ctx.arc(px, py, size, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${opacity})`;
                        ctx.fill();
                    }
                });
            });

            createShootingStar();
            drawShootingStars();

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            />
            <MainPage />
        </div>
    );
}
