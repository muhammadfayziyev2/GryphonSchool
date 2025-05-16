'use client'

import { useEffect, useRef } from "react";
import MainPage from "./MainPage";

export default function StarBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Generate stars
        const stars = Array.from({ length: 120 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.2 + 0.3,
            opacity: Math.random() * 0.6 + 0.4,
            speed: Math.random() * 0.2 + 0.05,
        }));

        function draw() {
            // Gradient background
            const gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                Math.max(width, height) / 1.2
            );
            gradient.addColorStop(0, "#112244");
            gradient.addColorStop(1, "#000b1f");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw and animate stars
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }

        draw();

        // Handle resize
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                }}
            />
            {/* CONTENT */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                }}
            >
                <MainPage/>
            </div>
        </div>
    );
}
