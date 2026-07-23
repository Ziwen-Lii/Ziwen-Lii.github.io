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
<h1 id="about-me" data-i18n="aboutTitle">About Me</h1>

<div class="profile-intro__eyebrow" data-i18n="profileEyebrow">Agent Safety · LLM Model · Generative Vision · RAG</div>

<p data-i18n-html="profileIntroOne">I am a <strong>third-year undergraduate student majoring in Software Engineering</strong> at the <strong>School of Computer and Information Science, Southwest University</strong>. My research interests focus on <strong>generative vision</strong> and <strong>large language models</strong>, with particular emphasis on <strong>diffusion-based image generation</strong> and <strong>panoramic/scene generation</strong>.</p>

<p data-i18n-html="profileIntroTwo">I am currently supervised by <strong>Prof. Xianfeng Han</strong> (<a href="https://scholar.google.com/citations?user=4FaCTFgAAAAJ&amp;hl=en" target="_blank">Google Scholar</a>) and working as a <strong>research intern at The Chinese University of Hong Kong, Shenzhen</strong>. I am actively seeking opportunities for <strong>MPhil programs starting in Fall 2027</strong>. Please feel free to contact me directly via email.</p>

<div class="profile-intro__tags">
  <span data-i18n="tagIntern">Research Intern @ CUHK-Shenzhen</span>
  <span data-i18n="tagMphil">MPhil Fall 2027</span>
  <span data-i18n="tagSwu">Southwest University</span>
</div>
</section>

<section class="home-section home-section--news" markdown="1">
<div class="section-label" data-i18n="newsLabel">Latest</div>

<h1 id="news" data-i18n="newsTitle">News</h1>

<ul>
  <li data-i18n-html="newsItem"><span class="news-date">2026.07</span> <strong>NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation</strong> (co-second author) accepted by <strong>WISA (CCF-C)</strong>.</li>
</ul>
</section>

<h1 id="publications" data-i18n="publicationsTitle">Publications</h1>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">WISA (CCF-C)</div>
    <img src="images/ACL.png" alt="NGM-RAG paper thumbnail">
  </div>
  <div class="paper-box-text" markdown="1">

### [NGM-RAG: Neural Graph Matching based Retrieval-Augmented Generation](https://github.com/Ziwen-Lii)

Guo Chen, **Ziwen Li**, Maolin Zheng, Qi Cao, Junjie Huang, Tao Jia.

<div class="paper-links">
  <a href="/pdf/ACL.pdf" data-i18n="projectLink">Project</a>
  <strong><span class="show_paper_citations" data="YOUR_GOOGLE_SCHOLAR_CITATION_KEY"></span></strong>
</div>

<p data-i18n="paperSummary">We propose NGM-RAG, a unified graph-based RAG framework that adaptively identifies key nodes and relations. It outperforms existing RAG methods on multi-hop QA and long-context summarization with lower retrieval and inference costs.</p>

  </div>
</div>

<section class="home-section manuscripts" markdown="1">
<div class="section-label" data-i18n="manuscriptLabel">In Progress</div>

<h1 id="manuscripts" data-i18n="manuscriptsTitle">Manuscripts Under Review</h1>

<div class="manuscript-list">
  <div class="manuscript-item">
    <div>
      <strong>GeoPano: Geometry-Aware Diffusion for Text to 360-Degree Panoramas</strong>
      <span data-i18n="reviewAcm">ACM MM 2026 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>When Extremists Enter LLM Societies: Investigating Extreme Behavior in Multi-Agent Systems</strong>
      <span data-i18n="reviewEmnlp">EMNLP 2026 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>When Retrieval is Not Enough: Uncertainty-Driven Attacks to Retrieval-Augmented Generation Systems</strong>
      <span data-i18n="reviewCcs">ACM CCS 2026 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>Agent Unlearning</strong>
      <span data-i18n="reviewAaaiOne">AAAI 2027 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>CapClaw</strong>
      <span data-i18n="reviewAaaiTwo">AAAI 2027 · Under Review</span>
    </div>
  </div>
  <div class="manuscript-item">
    <div>
      <strong>FORESTBENCH</strong>
      <span data-i18n="reviewKdd">KDD 2027 · Under Review</span>
    </div>
  </div>
</div>
</section>

<span class='anchor' id='honors'></span>

<h1 data-i18n="honorsTitle">Honors and Awards</h1>

<ul class="timeline-list">
  <li data-i18n-html="honorEmnlpReviewer"><span>2026</span> EMNLP 2027 Outstanding Reviewer.</li>
  <li data-i18n-html="honorOne"><span>2026</span> National-Level Competition, Chinese Collegiate Computing Design Competition, China.</li>
  <li data-i18n-html="honorTwo"><span>2026</span> Provincial-Level Project, Chongqing Municipal Undergraduate Innovation and Entrepreneurship Training Program, China.</li>
  <li data-i18n-html="honorThree"><span>2025</span> Provincial First Prize, National Undergraduate Mathematical Contest in Modeling, China.</li>
  <li data-i18n-html="honorFour"><span>2025</span> Honorable Mention, Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling, International.</li>
  <li data-i18n-html="honorFive"><span>2025</span> Finalist, Certified Cup International Mathematical Modeling Competition, China.</li>
  <li data-i18n-html="honorSix"><span>2025</span> Second-Class Scholarship, Southwest University.</li>
  <li data-i18n-html="honorSeven"><span>2024</span> Third-Class Scholarship, Southwest University.</li>
</ul>

<span class='anchor' id='experience'></span>

<h1 data-i18n="experienceTitle">Education and Experience</h1>

<div class="experience-list">
  <div class="experience-item">
    <img class="experience-item__logo" src="/icon/SWU.png" alt="Southwest University logo" width="44" height="44" loading="lazy">
    <div class="experience-item__content">
      <strong data-i18n="experienceDegree">B.Eng. in Software Engineering</strong>
      <span data-i18n="experienceSwu">Southwest University, Chongqing, China · GPA: 3.67 / 5.0</span>
    </div>
    <time data-i18n="experienceSwuDate">Sep. 2023 - Present</time>
  </div>
  <div class="experience-item">
    <img class="experience-item__logo" src="/icon/CUHKSZ.png" alt="The Chinese University of Hong Kong, Shenzhen logo" width="44" height="44" loading="lazy">
    <div class="experience-item__content">
      <strong data-i18n="experienceIntern">Research Intern</strong>
      <span data-i18n="experienceCuhksz">The Chinese University of Hong Kong, Shenzhen, Shenzhen, China</span>
    </div>
    <time data-i18n="experienceCuhkszDate">Mar. 2026 - Present</time>
  </div>
  <div class="experience-item">
    <img class="experience-item__logo" src="/icon/ASIC.png" alt="Chongqing CAS Automotive Software Innovation Center logo" width="44" height="44" loading="lazy">
    <div class="experience-item__content">
      <strong data-i18n="experienceLeader">Project Leader</strong>
      <span data-i18n="experienceAsic">Chongqing CAS Automotive Software Innovation Center · Indoor autonomous navigation modeling with IsaacSim & ROS; Gazebo simulation and 2D SLAM with Gmapping.</span>
    </div>
    <time data-i18n="experienceAsicDate">Jun. 2024 - Sep. 2024</time>
  </div>
</div>
