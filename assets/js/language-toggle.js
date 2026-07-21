(function () {
  "use strict";

  var translations = {
    zh: {
      navAbout: "关于",
      navPublications: "论文",
      navHonors: "荣誉",
      navExperience: "经历",
      sidebarBio: "软件工程，西南大学",
      sidebarLocation: "中国重庆",
      sidebarWebsite: "主页",
      sidebarEmail: "邮箱",
      aboutTitle: "关于我",
      profileEyebrow: "智能体安全 · 大语言模型 · 生成式视觉 · 检索增强生成",
      profileIntroOne: "我目前是<strong>西南大学计算机与信息科学学院软件工程专业大三本科生</strong>。我的研究兴趣聚焦于<strong>生成式视觉</strong>与<strong>大语言模型</strong>，尤其关注<strong>基于扩散模型的图像生成</strong>和<strong>全景／场景生成</strong>。",
      profileIntroTwo: "我目前在<strong>韩先峰教授</strong>指导下开展研究（<a href=\"https://scholar.google.com/citations?user=4FaCTFgAAAAJ&amp;hl=en\" target=\"_blank\">Google Scholar</a>），并在<strong>香港中文大学（深圳）担任研究实习生</strong>。我正在积极寻找<strong>2027 年秋季入学的 MPhil 项目</strong>机会，欢迎通过邮箱与我联系。",
      tagIntern: "香港中文大学（深圳）研究实习生",
      tagMphil: "2027 年秋季 MPhil",
      tagSwu: "西南大学",
      newsLabel: "最新动态",
      newsTitle: "新闻",
      newsItem: "<span class=\"news-date\">2026.07</span> <strong>NGM-RAG：基于神经图匹配的检索增强生成</strong>（共同二作）被 <strong>WISA（CCF-C）</strong>录用。",
      publicationsTitle: "论文发表",
      projectLink: "项目",
      paperSummary: "我们提出 NGM-RAG：一个统一的图检索增强生成框架，可自适应识别关键节点与关系。在多跳问答和长文本摘要任务上，它以更低的检索与推理成本优于现有 RAG 方法。",
      manuscriptLabel: "进行中",
      manuscriptsTitle: "在审论文",
      reviewAcm: "ACM MM 2026 · 审稿中",
      reviewEmnlp: "EMNLP 2026 · 审稿中",
      reviewCcs: "ACM CCS 2026 · 审稿中",
      reviewAaaiOne: "AAAI 2027 · 审稿中",
      reviewAaaiTwo: "AAAI 2027 · 审稿中",
      reviewKdd: "KDD 2027 · 审稿中",
      honorsTitle: "荣誉与奖项",
      honorOne: "<span>2026</span> 中国大学生计算机设计大赛国家级竞赛，中国。",
      honorTwo: "<span>2026</span> 重庆市大学生创新创业训练计划省级项目，中国。",
      honorThree: "<span>2025</span> 全国大学生数学建模竞赛省级一等奖，中国。",
      honorFour: "<span>2025</span> 美国大学生数学建模竞赛／交叉学科建模竞赛荣誉提名，国际。",
      honorFive: "<span>2025</span> 认证杯国际数学建模竞赛决赛选手，中国。",
      honorSix: "<span>2025</span> 西南大学二等奖学金。",
      honorSeven: "<span>2024</span> 西南大学三等奖学金。",
      experienceTitle: "教育与经历",
      experienceDegree: "软件工程学士",
      experienceSwu: "西南大学，中国重庆 · GPA：3.67 / 5.0",
      experienceSwuDate: "2023 年 9 月 - 至今",
      experienceIntern: "研究实习生",
      experienceCuhksz: "香港中文大学（深圳），中国深圳",
      experienceCuhkszDate: "2026 年 3 月 - 至今",
      experienceLeader: "项目负责人",
      experienceAsic: "重庆中汽软件创新中心 · 基于 IsaacSim 与 ROS 的室内自主导航建模；使用 Gazebo 仿真与 Gmapping 实现 2D SLAM。",
      experienceAsicDate: "2024 年 6 月 - 2024 年 9 月"
    }
  };

  function safelyReadLanguage() {
    try {
      return window.localStorage.getItem("site-language") || "en";
    } catch (error) {
      return "en";
    }
  }

  function safelyStoreLanguage(language) {
    try {
      window.localStorage.setItem("site-language", language);
    } catch (error) {
      // The switch still works when local storage is unavailable.
    }
  }

  function initialize() {
    var toggle = document.querySelector(".language-toggle");
    if (!toggle) return;

    var originals = new Map();
    document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(function (element) {
      originals.set(element, element.hasAttribute("data-i18n-html") ? element.innerHTML : element.textContent);
    });

    function applyLanguage(language) {
      var chinese = language === "zh";
      var dictionary = translations.zh;

      document.querySelectorAll("[data-i18n]").forEach(function (element) {
        var key = element.getAttribute("data-i18n");
        element.textContent = chinese ? dictionary[key] : originals.get(element);
      });

      document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
        var htmlKey = element.getAttribute("data-i18n-html");
        element.innerHTML = chinese ? dictionary[htmlKey] : originals.get(element);
      });

      document.documentElement.lang = chinese ? "zh-CN" : "en";
      document.body.setAttribute("data-language", language);
      toggle.setAttribute("aria-pressed", chinese ? "true" : "false");
      toggle.setAttribute("aria-label", chinese ? "Switch to English" : "切换至中文");
      toggle.title = chinese ? "Switch to English" : "切换至中文";
      safelyStoreLanguage(language);
    }

    applyLanguage(safelyReadLanguage());
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      applyLanguage(document.body.getAttribute("data-language") === "zh" ? "en" : "zh");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
}());
