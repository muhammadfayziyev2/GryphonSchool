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
        const numStars = 400;
        for (let i = 0; i < numStars; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * w * 0.5;
            stars.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                z: Math.random() * w,
            });
        }

        function animate() {
            ctx.fillStyle = "rgba(5, 10, 25, 1)";
            ctx.fillRect(0, 0, w, h);

            // Animate stars
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                star.z -= 0.5;
                if (star.z <= 0) star.z = w;

                const k = 128.0 / star.z;
                const px = star.x * k + w / 2;
                const py = star.y * k + h / 2;

                if (px >= 0 && px <= w && py >= 0 && py <= h) {
                    const size = (1 - star.z / w) * 2;
                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(255,255,255,0.8)";
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
            
        </div>
    );
}
