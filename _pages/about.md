---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am an undergraduate student majoring in **Software Engineering** at the School of Computer and Information Science, **Southwest University**.  
My research interests focus on **image generation and embodied intelligence**, particularly **geometry-aware scene reconstruction and visual generation from a single image**.

I am currently engaged in research on diffusion-based generative models and retrieval-augmented generation systems. My work explores integrating **geometric constraints and reinforcement learning** to improve visual consistency and controllability in complex scenes. I am actively seeking research collaboration and graduate study opportunities in computer vision and artificial intelligence.

---

# 🔥 News
- *2025.02*: 🎉 Received **Honorable Mention (H Award)** in the Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM).
- *2025.01*: 🏆 Won **Provincial First Prize** in the National Undergraduate Mathematical Contest in Modeling (Higher Education Press Cup).
- *2024.09*: 🧑‍💻 Led an autonomous navigation and SLAM simulation project at Chongqing CAS Automotive Software Innovation Center.

---

# 📝 Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">ICME (CCF-B)</div>
      <img src='images/ICME.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[GeoPano: Geometry-Aware Diffusion for Text-to-360° Panoramas](#)

**Ziwen Li**, et al.

*Under review at IEEE International Conference on Multimedia & Expo (ICME)*

- Proposed geometry-aware constraints with reinforcement learning-based fine-tuning to mitigate boundary discontinuity and distortion in 360° panorama generation.
- Achieved competitive performance on multiple public panoramic image benchmarks.

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">ACL (CCF-A)</div>
      <img src='images/ACL.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation](#)

Ziwen Li, et al.

*Under review at Annual Meeting of the Association for Computational Linguistics (ACL)*

- Introduced a neural graph matching based RAG framework integrating symbolic retrieval and neural reasoning.
- Demonstrated improved multi-hop question answering accuracy and reduced inference cost on HotpotQA and MultiHop-RAG benchmarks.

  </div>
</div>

---

# 🎖 Honors and Awards
- *2025*: **Provincial First Prize**, National Undergraduate Mathematical Contest in Modeling (Higher Education Press Cup).
- *2025*: **Honorable Mention (H Award)**, Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM).
- *2025*: **Finalist (F Award)**, Certified Cup International Mathematical Modeling Competition.
- *2025*: **Second-Class Scholarship**, Southwest University (University Level).
- *2024*: **Third-Class Scholarship**, Southwest University (University Level).

---

# 📖 Education
- *Sep. 2023 – Present*, **B.Eng. in Software Engineering**, Southwest University, Chongqing, China.  
  GPA: **3.67 / 5.0**

---

# 💻 Internships
- *Jun. 2024 – Sep. 2024*, **Project Leader**, Chongqing CAS Automotive Software Innovation Center, Chongqing, China.  
  - Conducted indoor autonomous navigation modeling using ROS and IsaacSim, achieving synchronized calibration between simulation and real-world motion control.
  - Built Gazebo-based simulation environments with complex obstacles and implemented 2D SLAM using Gmapping, significantly improving navigation accuracy.
