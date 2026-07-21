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

<section class="profile-intro" markdown="1">
# About Me

<div class="profile-intro__eyebrow">Agent Safety · LLM Model · Generative Vision · RAG</div>

I am a **third-year undergraduate student majoring in Software Engineering** at the **School of Computer and Information Science, Southwest University**. My research interests focus on **generative vision** and **large language models**, with particular emphasis on **diffusion-based image generation** and **panoramic/scene generation**.

I am currently supervised by **Prof. Xianfeng Han** (<a href="https://scholar.google.com/citations?user=4FaCTFgAAAAJ&hl=en" target="_blank">Google Scholar</a>) and working as a **research intern at The Chinese University of Hong Kong, Shenzhen**. I am actively seeking opportunities for **MPhil programs starting in Fall 2027**. Please feel free to contact me directly via email.

<div class="profile-intro__tags">
  <span>Research Intern @ CUHK-Shenzhen</span>
  <span>MPhil Fall 2027</span>
  <span>Southwest University</span>
</div>
</section>

<section class="home-section home-section--news" markdown="1">
<div class="section-label">Latest</div>

# News

- <span class="news-date">2026.07</span> **NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation** (co-second author) accepted by **WISA (CCF-C)**.
</section>

# Publications

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">WISA (CCF-C)</div>
    <img src="images/ACL.png" alt="NGM-RAG paper thumbnail">
  </div>
  <div class="paper-box-text" markdown="1">

### [NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation](https://github.com/Ziwen-Lii)

Guo Chen, **Ziwen Li**, Maolin Zheng, Qi Cao, Junjie Huang, Tao Jia.

<div class="paper-links">
  <a href="/pdf/ACL.pdf">Project</a>
  <strong><span class="show_paper_citations" data="YOUR_GOOGLE_SCHOLAR_CITATION_KEY"></span></strong>
</div>

We propose NGM-RAG, a unified graph-based RAG framework that adaptively identifies key nodes and relations. It outperforms existing RAG methods on multi-hop QA and long-context summarization with lower retrieval and inference costs.

  </div>
</div>

<section class="home-section manuscripts" markdown="1">
<div class="section-label">In Progress</div>

# Manuscripts Under Review

<div class="manuscript-list">
  <div class="manuscript-item">
    <div>
      <strong>GeoPano: Geometry-Aware Diffusion for Text to 360-Degree Panoramas</strong>
      <span>ACM MM 2026 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>When Extremists Enter LLM Societies: Investigating Extreme Behavior in Multi-Agent Systems</strong>
      <span>EMNLP 2026 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>When Retrieval is Not Enough: Uncertainty-Driven Attacks to Retrieval-Augmented Generation Systems</strong>
      <span>ACM CCS 2026 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>Agent Unlearning</strong>
      <span>AAAI 2027 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>CapClaw</strong>
      <span>AAAI 2027 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>FORESTBENCH</strong>
      <span>KDD 2027 · Under Review</span>
    </div>
  </div>
</div>
</section>

<span class='anchor' id='honors'></span>

# Honors and Awards

<ul class="timeline-list">
  <li><span>2026</span> National-Level Competition, Chinese Collegiate Computing Design Competition, China.</li>
  <li><span>2026</span> Provincial-Level Project, Chongqing Municipal Undergraduate Innovation and Entrepreneurship Training Program, China.</li>
  <li><span>2025</span> Provincial First Prize, National Undergraduate Mathematical Contest in Modeling, China.</li>
  <li><span>2025</span> Honorable Mention, Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling, International.</li>
  <li><span>2025</span> Finalist, Certified Cup International Mathematical Modeling Competition, China.</li>
  <li><span>2025</span> Second-Class Scholarship, Southwest University.</li>
  <li><span>2024</span> Third-Class Scholarship, Southwest University.</li>
</ul>

<span class='anchor' id='experience'></span>

# Education and Experience

<div class="experience-list">
  <div class="experience-item">
    <img class="experience-item__logo" src="/icon/SWU.png" alt="Southwest University logo">
    <div class="experience-item__content">
      <strong>B.Eng. in Software Engineering</strong>
      <span>Southwest University, Chongqing, China · GPA: 3.67 / 5.0</span>
    </div>
    <time>Sep. 2023 - Present</time>
  </div>
  <div class="experience-item">
    <img class="experience-item__logo" src="/icon/CUHKSZ.png" alt="The Chinese University of Hong Kong, Shenzhen logo">
    <div class="experience-item__content">
      <strong>Research Intern</strong>
      <span>The Chinese University of Hong Kong, Shenzhen, Shenzhen, China</span>
    </div>
    <time>Mar. 2026 - Present</time>
  </div>
  <div class="experience-item">
    <img class="experience-item__logo" src="/icon/ASIC.png" alt="Chongqing CAS Automotive Software Innovation Center logo">
    <div class="experience-item__content">
      <strong>Project Leader</strong>
      <span>Chongqing CAS Automotive Software Innovation Center · Indoor autonomous navigation modeling with IsaacSim & ROS; Gazebo simulation and 2D SLAM with Gmapping.</span>
    </div>
    <time>Jun. 2024 - Sep. 2024</time>
  </div>
</div>
