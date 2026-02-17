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

I am an undergraduate student majoring in **Software Engineering** at the School of Computer and Information Science, **Southwest University** (Chongqing, China). My work centers on **generative vision** and **LLM systems**, with particular interests in **diffusion-based image generation**, **panorama/scene generation**, and **embodied intelligence**.

Currently, I focus on geometry-aware generation for 360° panoramas and efficient retrieval-augmented generation for multi-hop reasoning. I enjoy building end-to-end research prototypes—from modeling and training to evaluation and deployment—aiming for reliable, scalable AI systems.

My research interest includes computer vision and large language model systems. I have ongoing submissions to international AI conferences. You can also use google scholar badge <a href='https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).

# 🔥 News
- *2026.02*: &nbsp;📝 **GeoPano: Geometry-Aware Diffusion for Text to 360-degree Panoramas** (first author) — under review at **ICME (CCF-B)**.
- *2026.02*: &nbsp;📝 **NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation** (co-first author) — under review at **ACL (CCF-A)**.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME (CCF-B)</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GeoPano: Geometry-Aware Diffusion for Text to 360-degree Panoramas](https://github.com/Ziwen-Lii)

**Ziwen Li**, et al.

[**Project**](https://github.com/Ziwen-Lii) <strong><span class='show_paper_citations' data='YOUR_GOOGLE_SCHOLAR_CITATION_KEY'></span></strong>
- We study diffusion-based panorama generation and introduce geometry-aware constraints with reinforcement learning-based fine-tuning to reduce boundary discontinuity and distortion in 360° views, achieving competitive results on public panorama benchmarks.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME (CCF-B)</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation](https://github.com/Ziwen-Lii) , Ziwen Li, et al., **ACL (CCF-A), Under Review**

**Ziwen Li**, et al.

[**Project**](https://github.com/Ziwen-Lii) <strong><span class='show_paper_citations' data='YOUR_GOOGLE_SCHOLAR_CITATION_KEY'></span></strong>
- We study diffusion-based panorama generation and introduce geometry-aware constraints with reinforcement learning-based fine-tuning to reduce boundary discontinuity and distortion in 360° views, achieving competitive results on public panorama benchmarks.
</div>
</div>

# 🎖 Honors and Awards
- *2025* Provincial First Prize, National Undergraduate Mathematical Contest in Modeling (Higher Education Press Cup), China.
- *2025* Honorable Mention (H Award), Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM), International.
- *2025* Finalist (F Award), Certified Cup International Mathematical Modeling Competition, China.
- *2025* Second-Class Scholarship, Southwest University (University Level).
- *2024* Third-Class Scholarship, Southwest University (University Level).

# 📖 Educations
- *Sep. 2023 - Present*, B.Eng. in Software Engineering, Southwest University, Chongqing, China. (GPA: 3.67 / 5.0)

# 💬 Invited Talks
- *2026.02*, Panorama Generation & Geometry-Aware Diffusion (available upon request).
- *2026.02*, Retrieval-Augmented Generation with Neural Graph Matching (available upon request).  \| [\[video\]](https://github.com/)

# 💻 Internships
- *Jun. 2024 - Sep. 2024*, [Chongqing CAS Automotive Software Innovation Center](https://github.com/), Chongqing, China.  
  Project Leader — Indoor autonomous navigation modeling with IsaacSim & ROS; Gazebo simulation and 2D SLAM with Gmapping to improve navigation accuracy in complex indoor environments.
