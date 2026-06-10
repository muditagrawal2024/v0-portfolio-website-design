'use client'

import { ProjectCard } from './ProjectCard'
import { FeaturedProject } from './FeaturedProject'

const projects = [
  {
    title: 'Autonomous Inspection Drone',
    overview: 'Multi-sensor aerial platform for autonomous inspection and environmental monitoring in complex terrain.',
    problem:
      'Traditional inspection methods require manual labor and are limited by human accessibility. Need autonomous platforms that can safely navigate complex environments while gathering reliable data.',
    architecture:
      'Integrated system combining computer vision for obstacle avoidance, embedded flight controller, ML-based anomaly detection, and real-time telemetry processing on edge hardware.',
    keyDecisions:
      'Chose lightweight TensorFlow Lite models for on-device inference to minimize latency and ensure autonomous operation without cloud dependency. Implemented adaptive control loops accounting for sensor noise and environmental dynamics.',
    technologies: ['Computer Vision', 'ROS', 'TensorFlow Lite', 'Embedded Linux', 'Control Theory', 'C++'],
    image: '/project-1-drone.png',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Edge AI Monitoring Platform',
    overview: 'Distributed system for real-time inference, monitoring, and management of edge AI devices at scale.',
    problem:
      'Managing ML models across thousands of edge devices requires coordinating inference, handling model updates, monitoring performance, and managing compute resources efficiently.',
    architecture:
      'Central orchestration server communicating with distributed edge nodes. Each node runs optimized ML inference pipelines with local caching. Hierarchical data aggregation reduces bandwidth while maintaining real-time responsiveness.',
    keyDecisions:
      'Implemented model quantization and pruning for 10x inference speedup. Used gRPC for efficient communication. Built adaptive inference scheduling based on device load and model priority.',
    technologies: ['Python', 'gRPC', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL'],
    image: '/project-2-ai-platform.png',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Smart Robotics Control System',
    overview: 'Multi-joint robotic arm controller with real-time feedback control and vision-guided manipulation.',
    problem:
      'Industrial robotics require precise trajectory control while handling unknown objects and environmental variations. Standard controllers struggle with adaptive tasks requiring visual feedback.',
    architecture:
      'Hierarchical control architecture: high-level task planner, intermediate trajectory generator, low-level joint controllers. Computer vision pipeline guides end-effector positioning with closed-loop feedback.',
    keyDecisions:
      'Implemented model predictive control with learned dynamics models to improve tracking accuracy. Integrated force-torque sensing for compliant manipulation. Used hardware PWM for deterministic real-time performance.',
    technologies: ['C++', 'ROS', 'Computer Vision', 'Control Theory', 'Real-time Linux', 'Embedded Systems'],
    image: '/project-3-robotics.png',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Cyber-Physical Energy Management',
    overview: 'IoT-integrated smart grid system optimizing energy distribution through predictive analytics and control.',
    problem:
      'Traditional grids struggle with renewable energy integration and peak demand management. Need systems that can predict demand patterns and optimize distribution in real-time.',
    architecture:
      'Distributed IoT sensors collect real-time energy data. Central ML pipeline predicts demand patterns 24-48 hours ahead. Control system adjusts load distribution and storage charging based on predictions and current grid state.',
    keyDecisions:
      'Used LSTM networks for demand forecasting achieving 95% accuracy. Implemented distributed control with local decision-making to minimize latency. Integrated with existing grid infrastructure through standardized APIs.',
    technologies: ['Python', 'PyTorch', 'MQTT', 'IoT', 'Real-time Analytics', 'Grid Control Systems'],
    image: '/project-4-energy.png',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Computer Vision Navigation Framework',
    overview: 'Unified pipeline for vision-based localization, mapping, and autonomous navigation in GPS-denied environments.',
    problem:
      'Autonomous systems need reliable localization in environments where GPS is unavailable or unreliable. Visual navigation must be robust to lighting changes and dynamic scenes.',
    architecture:
      'Multi-stage pipeline: feature extraction with ORB-SLAM, loop closure detection with deep learning, uncertainty propagation through particle filtering, real-time path planning on occupancy grid.',
    keyDecisions:
      'Fused ORB-SLAM with deep learning based loop closure for robustness. Implemented uncertainty-aware planning to handle vision ambiguity. Optimized for embedded processors using SIMD acceleration.',
    technologies: ['OpenCV', 'CUDA', 'Deep Learning', 'SLAM', 'C++', 'Embedded Vision'],
    image: '/project-5-vision.png',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Intelligent IoT Infrastructure',
    overview: 'Scalable platform for deploying, managing, and analyzing data from heterogeneous IoT devices across enterprise environments.',
    problem:
      'Enterprises deploy thousands of diverse IoT devices generating massive data streams. Need unified infrastructure for device management, data ingestion, processing, and analytics.',
    architecture:
      'Multi-tier architecture: edge gateways for local processing, stream processing layer for real-time analytics, time-series database for storage, ML inference service for predictive insights.',
    keyDecisions:
      'Chose Apache Kafka for event streaming ensuring exactly-once semantics. Implemented hierarchical data aggregation reducing storage 50% while maintaining query performance. Used containerization for heterogeneous device support.',
    technologies: ['Apache Kafka', 'InfluxDB', 'Python', 'TensorFlow', 'Docker', 'Cloud Infrastructure'],
    image: '/project-6-iot.png',
    githubUrl: 'https://github.com',
  },
]

export function ProjectsSection() {
  const featuredProjects = [projects[0], projects[1]]
  const gridProjects = projects.slice(2)

  return (
    <section id="projects" className="border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-20">
          <div className="mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">02</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Engineering case studies demonstrating integrated systems thinking across hardware, software, machine learning, robotics, and embedded systems.
          </p>
        </div>

        {/* Featured Projects - Alternating Layout */}
        <div className="space-y-0">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={index}
              {...project}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridProjects.map((project, index) => (
              <ProjectCard key={index + 2} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
