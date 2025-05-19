"use client";
import { useEffect, useRef } from "react";
import MainPage from "./MainPage";

export default function StarBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w, h;
        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        // Stars
        const stars = [];
        const numStars = 800;
        const starColors = ["#ffffff", "#aaddff", "#ffeedd", "#ffd1dc"];

        for (let i = 0; i < numStars; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.pow(Math.random(), 0.5) * w * 0.5;
            stars.push({
                angle,
                radius,
                z: Math.random() * w,
                speed: 0.0005 + Math.random() * 0.001,
                color: starColors[Math.floor(Math.random() * starColors.length)],
            });
        }

        // Galaxies
        const galaxies = [];
        const galaxyColors = [
            ["#ffccff", "#660066"],
            ["#ccffff", "#003366"],
            ["#ffeecc", "#993300"]
        ];
        const numGalaxies = 10;

        for (let i = 0; i < numGalaxies; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * w * 0.4;
            const z = Math.random() * w;
            const [color1, color2] = galaxyColors[Math.floor(Math.random() * galaxyColors.length)];
            galaxies.push({ angle, radius, z, color1, color2, speed: 0.0002 + Math.random() * 0.0005 });
        }

        let time = 0;

        function hexToRgb(hex) {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `${r}, ${g}, ${b}`;
        }

        function animate() {
            ctx.fillStyle = "rgba(5, 10, 25, 1)";
            ctx.fillRect(0, 0, w, h);
            time += 0.01;

            // Draw galaxies
            galaxies.forEach((g, i) => {
                g.angle += g.speed;
                g.z -= 0.2;
                if (g.z <= 1) g.z = w;

                const k = 128.0 / g.z;
                const x = Math.cos(g.angle) * g.radius;
                const y = Math.sin(g.angle) * g.radius;
                const px = x * k + w / 2;
                const py = y * k + h / 2;
                const radius = (1 - g.z / w) * 80;

                if (px >= 0 && px <= w && py >= 0 && py <= h) {
                    const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius);
                    gradient.addColorStop(0, g.color1);
                    gradient.addColorStop(1, "rgba(0,0,0,0)");

                    ctx.beginPath();
                    ctx.fillStyle = gradient;
                    ctx.globalAlpha = 0.25 + 0.75 * (1 - g.z / w);
                    ctx.arc(px, py, radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }
            });

            // Draw stars
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                star.angle += star.speed;
                if (star.angle > Math.PI * 2) star.angle -= Math.PI * 2;

                star.z -= 0.3;
                if (star.z <= 0.1) star.z = w;

                const k = 128.0 / star.z;
                const x = Math.cos(star.angle) * star.radius;
                const y = Math.sin(star.angle) * star.radius;
                const px = x * k + w / 2;
                const py = y * k + h / 2;

                if (px >= 0 && px <= w && py >= 0 && py <= h) {
                    const size = (1 - star.z / w) * 2.5;
                    const baseOpacity = 0.3 + 0.7 * (1 - star.z / w);
                    const twinkle = 0.5 + 0.5 * Math.sin(time + i);
                    const opacity = baseOpacity * twinkle;

                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.shadowBlur = 5;
                    ctx.shadowColor = star.color;
                    ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${opacity})`;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
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
