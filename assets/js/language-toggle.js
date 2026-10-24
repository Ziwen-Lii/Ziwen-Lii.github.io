(function () {
  "use strict";

  var translations = {
    zh: {
      navAbout: "关于",
      navPublications: "论文",
      navHonors: "荣誉",
      navExperience: "经历",
      navCommunity: "社区贡献",
      sidebarBio: "软件工程，西南大学",
      sidebarLocation: "中国重庆",
      sidebarWebsite: "主页",
      sidebarEmail: "邮箱",
      aboutTitle: "关于我",
      profileEyebrow: "大语言模型智能体 · 智能体安全 · 生成式视觉",
      profileIntroOne: "我目前是<strong>西南大学计算机与信息科学学院软件工程专业大四本科生</strong>。我的研究聚焦于<strong>大语言模型智能体（LLM Agents）</strong>、<strong>智能体安全</strong>与<strong>生成式视觉</strong>。具体而言，我关注大语言模型智能体如何推理、协作与交互，以及如何评估并提升这些系统的安全性与可靠性。同时，我也探索利用生成式模型进行视觉内容创作。",
      profileIntroTwo: "我目前在<strong>韩先峰教授</strong>指导下开展研究（<a href=\"https://scholar.google.com/citations?user=4FaCTFgAAAAJ&amp;hl=en\" target=\"_blank\">Google Scholar</a>）。同时，我在<strong>香港中文大学（深圳）担任研究实习生</strong>，所在团队由<strong>李海洲教授（IEEE Fellow）</strong>（<a href=\"https://scholar.google.com/citations?user=z8_x7C8AAAAJ&amp;hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">Google Scholar</a>）领导。我的实习研究接受<strong>新加坡国立大学（NUS）博士后研究员 Xueyi Zhang 博士</strong>（<a href=\"https://scholar.google.com/citations?user=-hFq7VAAAAAJ&amp;hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">Google Scholar</a>）的指导。我正在积极寻找<strong>2027 年秋季入学的 MPhil 项目</strong>机会，欢迎通过邮箱与我联系。",
      tagIntern: "香港中文大学（深圳）研究实习生",
      tagMphil: "2027 年秋季 MPhil",
      tagSwu: "西南大学",
      publicationsTitle: "论文发表",
      preprintVenue: "arXiv 预印本 · 2026",
      examSummary: "我们提出 EXAM，一个可配置的极端智能体建模与注入框架，并在四类社会模拟场景中研究其对大语言模型智能体社会的影响。",
      forestbenchSummary: "我们提出 ForestBench，一个统一的协作图评测基准，包含来自七个公开数据集的 844 个问题。它通过经过验证的参考森林评估多智能体协作，无需额外的大语言模型推理。",
      projectLink: "项目",
      paperSummary: "我们提出 NGM-RAG：一个统一的图检索增强生成框架，可自适应识别关键节点与关系。在多跳问答和长文本摘要任务上，它以更低的检索与推理成本优于现有 RAG 方法。",
      manuscriptLabel: "进行中",
      manuscriptsTitle: "在审论文",
      reviewAcm: "AAAI 第二阶段",
      reviewAaaiOne: "AAAI 第二阶段",
      reviewAaaiTwo: "WWW 2027 · 审稿中",
      honorsTitle: "荣誉与奖项",
      honorEmnlpReviewer: "<span>2026</span> EMNLP 2027 杰出审稿人。",
      honorOne: "<span>2026</span> 中国大学生计算机设计大赛国家一等奖，中国。",
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
      experienceLongRangeOrder: "工业智能体设计师",
      experienceLongRangeOrderOrg: "LongRangeOrder",
      experienceLongRangeOrderDate: "2026 年 8 月 - 至今",
      experienceLeader: "项目负责人",
      experienceAsic: "重庆中汽软件创新中心 · 基于 IsaacSim 与 ROS 的室内自主导航建模；使用 Gazebo 仿真与 Gmapping 实现 2D SLAM。",
      experienceAsicDate: "2024 年 6 月 - 2024 年 9 月",
      communityTitle: "社区贡献",
      communityIntro: "我积极为开源社区做贡献，参与以下项目：",
      communityMergedContribution: "已合并贡献"
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
      if (typeof window.updateNav === "function") window.updateNav();
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
