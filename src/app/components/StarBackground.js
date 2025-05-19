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

        // Galaxy stars setup
        const stars = [];
        const numStars = 800;
        for (let i = 0; i < numStars; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.pow(Math.random(), 0.5) * w * 0.5; // closer to center
            stars.push({
                angle,
                radius,
                z: Math.random() * w,
                speed: 0.0005 + Math.random() * 0.001, // for rotation
            });
        }

        let time = 0;

        function animate() {
            ctx.fillStyle = "rgba(5, 10, 25, 1)";
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                // Spiral rotation
                star.angle += star.speed;
                if (star.angle > Math.PI * 2) star.angle -= Math.PI * 2;

                // 3D perspective
                star.z -= 0.3;
                if (star.z <= 0.1) star.z = w;

                const k = 128.0 / star.z;
                const x = Math.cos(star.angle) * star.radius;
                const y = Math.sin(star.angle) * star.radius;
                const px = x * k + w / 2;
                const py = y * k + h / 2;

                if (px >= 0 && px <= w && py >= 0 && py <= h) {
                    const size = (1 - star.z / w) * 2.5;
                    const opacity = 0.3 + 0.7 * (1 - star.z / w);
                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.fill();
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
