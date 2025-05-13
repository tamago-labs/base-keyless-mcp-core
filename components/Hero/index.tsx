"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Wallet, Code, Zap, Command, Infinity, Banknote, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {


  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left content */}
          <div className="w-full z-20 lg:w-3/5 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-to-Base Without<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Compromising Keys
              </span>
            </h1>
            <p className="text-sm md:text-lg text-blue-100/80 mb-8 max-w-xl">
              Specialized MCP service extending AgentKit to enable AI assistants to interact with the Base blockchain while keeping your private keys safe
            </p>
            <div className="flex flex-row gap-4 mb-16 text-sm md:text-base">
              <Link href="/dashboard">
                <button className="px-7 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 hidden lg:flex w-4 h-4" />
                </button>
              </Link>
              <Link href="https://github.com/tamago-labs/base-mcp-client" target="_blank">
                <button className="px-7 py-3 bg-blue-800/40 hover:bg-blue-700/50 rounded-lg font-medium text-blue-200 transition flex items-center justify-center border border-blue-700/40 cursor-pointer">
                  Documentation
                </button>
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Wallet className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-100">Keep Your Keys Safe</h3>
                  <p className="text-sm text-blue-200/70">No private key exposure to AI assistants</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Command className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-100">AgentKit Integration</h3>
                  <p className="text-sm text-blue-200/70">Extends Base AgentKit capabilities</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-100">Secure Transactions</h3>
                  <p className="text-sm text-blue-200/70">Approval with Metamask or Coinbase Wallet when transacting</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-100">Seamless Start</h3>
                  <p className="text-sm text-blue-200/70">Simply connect your preferred wallet to receive a unique access key</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex opacity-60 lg:opacity-100 mt-[-800px] lg:mt-0 lg:w-2/5">
            <BlockchainPortal />
          </div>
        </div>
      </div>


      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl"></div>
      </div>

    </>
  );
}

const BlockchainPortal = () => {
  const canvasRef: any = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Center of portal
    const centerX = width / 2;
    const centerY = height / 2;

    // Portal parameters
    const portalRadius = Math.min(width, height) * 0.3;
    const portalLayers = 5;
    const portalRotationSpeed = 0.3;

    // Particle parameters
    const particles: any = [];
    const particleCount = 80;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * portalRadius * 1.5;

      particles.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        size: 1 + Math.random() * 3,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: 210 + Math.random() * 30,
        opacity: 0.3 + Math.random() * 0.7,
        trail: []
      });
    }

    // Create blocks
    const blocks: any = [];
    const blockCount = 12;

    for (let i = 0; i < blockCount; i++) {
      // Random angle but with some clustering
      const baseAngle = (i * Math.PI * 2) / blockCount;
      const angle = baseAngle + (Math.random() - 0.5) * 0.5;

      // Distance from center that changes over time
      const radiusBase = portalRadius * 0.8 + Math.random() * portalRadius * 0.4;

      blocks.push({
        x: centerX + Math.cos(angle) * radiusBase,
        y: centerY + Math.sin(angle) * radiusBase,
        width: 15 + Math.random() * 10,
        height: 15 + Math.random() * 10,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        orbitSpeed: 0.2 + Math.random() * 0.1,
        orbitRadius: radiusBase,
        orbitAngle: angle,
        color: `hsl(${210 + Math.random() * 30}, 80%, ${50 + Math.random() * 20}%)`,
        connections: []
      });
    }

    // Establish connections between nearby blocks
    blocks.forEach((block: any, i: number) => {
      blocks.forEach((otherBlock: any, j: number) => {
        if (i !== j) {
          const dx = block.x - otherBlock.x;
          const dy = block.y - otherBlock.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < portalRadius * 0.7) {
            block.connections.push(j);
          }
        }
      });
    });

    // Animation loop
    let animationId: any;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Current time in seconds
      const time = Date.now() / 1000;

      // Draw portal
      for (let i = 0; i < portalLayers; i++) {
        const radius = portalRadius * (1 - i / portalLayers);
        const rotationOffset = time * portalRotationSpeed * (i % 2 === 0 ? 1 : -1);
        const opacity = 0.1 - (i / portalLayers) * 0.08;

        ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw portal details
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotationOffset);

        for (let j = 0; j < 8; j++) {
          const segmentAngle = (Math.PI * 2) / 8;

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(radius * Math.cos(j * segmentAngle), radius * Math.sin(j * segmentAngle));
          ctx.stroke();
        }

        ctx.restore();
      }

      // Draw portal center glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, portalRadius * 0.5
      );
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.3)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, portalRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw blocks
      blocks.forEach((block: any, index: number) => {
        // Update orbit position
        block.orbitAngle += block.orbitSpeed / 100;
        block.x = centerX + Math.cos(block.orbitAngle) * block.orbitRadius;
        block.y = centerY + Math.sin(block.orbitAngle) * block.orbitRadius;

        // Update rotation
        block.angle += block.rotationSpeed;

        // Draw connections to other blocks
        block.connections.forEach((connectionIndex: any) => {
          const otherBlock = blocks[connectionIndex];
          const dx = otherBlock.x - block.x;
          const dy = otherBlock.y - block.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const opacity = 0.5 - (distance / (portalRadius * 0.7)) * 0.5;

          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(block.x, block.y);
          ctx.lineTo(otherBlock.x, otherBlock.y);
          ctx.stroke();

          // Draw data packet traveling along the connection
          const packetProgress = (time * 0.5 + index * 0.1 + connectionIndex * 0.2) % 1;
          const packetX = block.x + dx * packetProgress;
          const packetY = block.y + dy * packetProgress;

          ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.beginPath();
          ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw block
        ctx.save();
        ctx.translate(block.x, block.y);
        ctx.rotate(block.angle);

        // Block glow
        const blockGlow = ctx.createRadialGradient(
          0, 0, 0,
          0, 0, Math.max(block.width, block.height)
        );
        blockGlow.addColorStop(0, block.color.replace(')', ', 0.5)').replace('hsl', 'hsla'));
        blockGlow.addColorStop(1, block.color.replace(')', ', 0)').replace('hsl', 'hsla'));

        ctx.fillStyle = blockGlow;
        ctx.fillRect(-block.width * 1.5, -block.height * 1.5, block.width * 3, block.height * 3);

        // Block body
        ctx.fillStyle = block.color;
        ctx.fillRect(-block.width / 2, -block.height / 2, block.width, block.height);

        // Block details
        // ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        // ctx.lineWidth = 1;
        // ctx.strokeRect(-block.width / 4, -block.height / 4, block.width / 2, block.height / 2);

        ctx.restore();
      });

      // Update and draw particles
      particles.forEach((particle: any) => {
        // Move towards center with some randomness
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > portalRadius * 1.5) {
          // Pull back towards portal if too far
          particle.speedX += dx / distance * 0.01;
          particle.speedY += dy / distance * 0.01;
        } else if (distance < portalRadius * 0.2) {
          // Push away if too close to center
          particle.speedX -= dx / distance * 0.05;
          particle.speedY -= dy / distance * 0.05;
        } else {
          // Random movement with slight attraction to portal
          particle.speedX = particle.speedX * 0.99 + (Math.random() - 0.5) * 0.1 + dx / distance * 0.001;
          particle.speedY = particle.speedY * 0.99 + (Math.random() - 0.5) * 0.1 + dy / distance * 0.001;
        }

        // Limit speed
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > 0.7) {
          particle.speedX = (particle.speedX / speed) * 0.7;
          particle.speedY = (particle.speedY / speed) * 0.7;
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 5) {
          particle.trail.shift();
        }

        // Draw trail
        if (particle.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);

          for (let i = 1; i < particle.trail.length; i++) {
            ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
          }

          ctx.strokeStyle = `hsla(${particle.hue}, 80%, 60%, ${particle.opacity * 0.5})`;
          ctx.lineWidth = particle.size / 2;
          ctx.stroke();
        }

        // Draw particle
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="w-full h-full"
    />
  );
};