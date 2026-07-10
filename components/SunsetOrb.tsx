"use client";

import { useEffect, useRef } from "react";

// A bold, glowing "sundown" orb that flies around the page, slowly rotates,
// and morphs its shape — trailing a soft comet tail. Drawn on its own canvas
// that sits above the molecule background but behind the page content.
export function SunsetOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;

    // Non-null aliases so the hoisted helper functions below type-check.
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const R = 46; // base radius — bold and clearly visible
    const SPEED = 1.3; // px per frame
    const TRAIL_LEN = 26;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let x = 0;
    let y = 0;
    let vx = 0;
    let vy = 0;
    let started = false;
    let t = 0;
    const trail: { x: number; y: number }[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!started) {
        x = width * 0.72;
        y = height * 0.3;
        const angle = Math.PI * 0.8; // head off toward lower-left
        vx = Math.cos(angle) * SPEED;
        vy = Math.sin(angle) * SPEED;
        started = true;
      }
    }

    // The glowing head — a sunset radial gradient on a wobbling, rotating
    // ellipse (this is the "rotating and changing form" part).
    function drawHead() {
      const rx = R * (1 + 0.2 * Math.sin(t * 1.3));
      const ry = R * (1 + 0.2 * Math.cos(t * 1.1));
      const maxR = Math.max(rx, ry);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(t * 0.6);

      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
      g.addColorStop(0, "rgba(255, 226, 150, 0.95)"); // warm core
      g.addColorStop(0.35, "rgba(255, 140, 76, 0.9)"); // orange
      g.addColorStop(0.7, "rgba(254, 81, 128, 0.55)"); // sunset pink
      g.addColorStop(1, "rgba(142, 68, 173, 0)"); // fade to dusk purple
      ctx.fillStyle = g;

      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      t += 0.02;

      // Fly around, bouncing off the edges.
      x += vx;
      y += vy;
      if (x < R) vx = Math.abs(vx);
      else if (x > width - R) vx = -Math.abs(vx);
      if (y < R) vy = Math.abs(vy);
      else if (y > height - R) vy = -Math.abs(vy);

      // Record the trail.
      trail.push({ x, y });
      if (trail.length > TRAIL_LEN) trail.shift();

      // Additive blending makes the sunset colours glow where they overlap.
      ctx.globalCompositeOperation = "lighter";

      // Comet trail — dimmer/smaller toward the tail, shifting to dusk purple.
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        const f = i / trail.length; // 0 = tail, 1 = head
        const rad = R * (0.3 + 0.7 * f);
        const alpha = 0.16 * f;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        g.addColorStop(0, `rgba(255, ${Math.round(120 + 90 * f)}, 90, ${alpha})`);
        g.addColorStop(1, "rgba(142, 68, 173, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }

      drawHead();
      ctx.globalCompositeOperation = "source-over";

      frame = requestAnimationFrame(draw);
    }

    let frame = 0;

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      // Static single frame — a calm sunset orb, no motion.
      drawHead();
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
