// Edit this file to update homepage content without touching layout code.
// Publications use structured author data so Zeyu Zhu can be underlined and
// contribution markers can be rendered consistently across the site.
const SITE_DATA = {
  profile: {
    name: "Zeyu Zhu",
    chineseName: "朱泽雨",
    photo: "assets/profile.jpg",
    title: "Postdoctoral Fellow",
    affiliation:
      "Department of Electronic and Computer Engineering, The Hong Kong University of Science and Technology",
    advisor: "Advisor: Prof. Yuan Xie",
    location: "Hong Kong",
    links: [
      {
        label: "Email",
        icon: "email",
        href: "mailto:zzy2tt@163.com",
      },
      {
        label: "Google Scholar",
        icon: "scholar",
        href: "https://scholar.google.com/citations?user=-el19lQAAAAJ&hl=zh-CN",
      },
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/weihai-98",
      },
    ],
  },

  nav: [
    ["About", "index.html", "about"],
    ["Publications", "publications.html", "publications"],
    ["Projects", "projects.html", "projects"],
    ["Awards", "awards.html", "awards"],
    ["CV", "cv.html", "cv"],
  ],

  bio:
    "I am a Postdoctoral Fellow in the Department of Electronic and Computer Engineering at The Hong Kong University of Science and Technology, advised by Prof. Yuan Xie. My research focuses on AI chip design, ML system design, heterogeneous computing, and neural network model compression for LLMs, GNNs, and CNNs. I received my Ph.D. degree through the direct Ph.D. program at the Institute of Automation, Chinese Academy of Sciences, advised by Prof. Jian Cheng, where I was affiliated with the Efficient Intelligent Computing and Learning Lab. I have published first-author papers in top-tier conferences and journals including IEEE Transactions on Computers, ASPLOS, HPCA, DAC, ICML, and ICLR, and have served as a reviewer for CVPR, ICCV, NeurIPS, AAAI, and IEEE TPDS.",

  bioHighlights: ["Prof. Yuan Xie", "Prof. Jian Cheng"],

  researchInterests: [
    "AI chip design",
    "ML systems",
    "Heterogeneous computing",
    "Model compression",
    "LLM acceleration",
    "GNN/CNN acceleration",
  ],

  education: [
    {
      title: "Institute of Automation, Chinese Academy of Sciences",
      role: "Ph.D., Pattern Recognition and Intelligent System",
      period: "2021.9 - 2026.6",
      summary: "",
    },
    {
      title: "Zhejiang University",
      role: "B.Eng., Mechatronic Engineering",
      period: "2017.9 - 2021.6",
      summary: "",
    },
  ],

  publications: [
    {
      title:
        "KL-MoE: A Hierarchical MoE Pruning Framework Exploiting KL Divergence",
      authors: [
        "Zeyu Zhu",
        "Gang Li",
        "Minnan Pei",
        "Zitao Mo",
        "Peihuan Ni",
        "Peisong Wang",
        "Tielong Liu",
        "Jian Cheng",
      ],
      venue: "DAC 2026, CCF-A",
      year: "2026",
      primaryContribution: true,
      tags: ["First Author", "MoE", "Pruning"],
      paper:
        "https://63dac.conference-program.com/presentation/?id=RESEARCH094&sess=sess145",
      code: "",
    },
    {
      title:
        "RaGEP: Rank-aware Geometric Expert Pruning for Mixture-of-Experts Language Models",
      authors: [
        "Wentao Hu",
        "Zeyu Zhu",
        "Mingkuan Zhao",
        "Zhenhua An",
        "Yanbo Zhai",
        "Shanhong Yu",
        "Huilin Zhou",
        "Xin Lai",
        "Xiaoyan Zhu",
        "Jiayin Wang",
      ],
      equalContribution: true,
      venue: "ICML 2026, CCF-A",
      year: "2026",
      primaryContribution: true,
      tags: ["Equal Contribution", "MoE", "Pruning"],
      paper: "",
      code: "",
    },
    {
      title:
        "AdaOff: An Adaptive Offloading Framework for LLMs Inference on Local PCs",
      authors: ["Zeyu Zhu", "Gang Li", "Zitao Mo", "Peisong Wang", "Jian Cheng"],
      venue: "Under Review",
      year: "2026",
      primaryContribution: true,
      tags: ["First Author", "LLM", "Offloading"],
      paper: "",
      code: "",
    },
    {
      title:
        "DALI: A Workload-Aware Offloading Framework for Efficient MoE Inference on Local PCs",
      authors: [
        "Zeyu Zhu",
        "Gang Li",
        "Peisong Wang",
        "Zitao Mo",
        "Minnan Pei",
        "Zhuoran Song",
        "Xiaoyao Liang",
        "Jian Cheng",
      ],
      venue: "Under Review",
      year: "2026",
      primaryContribution: true,
      tags: ["First Author", "MoE", "Offloading"],
      paper: "https://arxiv.org/abs/2602.03495",
      code: "",
    },
    {
      title:
        "Boosting the Performance of Tree-Based Speculative Decoding of LLMs on FPGAs",
      authors: [
        "Tielong Liu",
        "Gang Li",
        "Zitao Mo",
        "Zeyu Zhu",
        "Minnan Pei",
        "Jian Cheng",
      ],
      venue: "DATE 2026, CCF-B",
      year: "2026",
      primaryContribution: false,
      tags: ["FPGA", "LLM"],
      paper: "https://doi.org/10.23919/DATE69613.2026.11539704",
      code: "",
    },
    {
      title:
        "APEX: Integer-only Non-linear Function Approximation for Efficient Cross-Modal Inference",
      authors: [
        "Peihuan Ni",
        "Zitao Mo",
        "Tielong Liu",
        "Hongli Wen",
        "Zeyu Zhu",
        "Minnan Pei",
        "Junwen Si",
        "Weifan Guan",
        "Peisong Wang",
        "Qinghao Hu",
        "Gang Li",
        "Jian Cheng",
      ],
      venue: "DATE 2026, CCF-B",
      year: "2026",
      primaryContribution: false,
      tags: ["Integer-only", "Cross-modal"],
      paper: "https://doi.org/10.23919/DATE69613.2026.11539465",
      code: "",
    },
    {
      title:
        "MATA: A Memory-Efficient Attention Accelerator for LLMs Exploiting Look-Back KV Cache Pruning",
      authors: [
        "Zeyu Zhu",
        "Gang Li",
        "Tielong Liu",
        "Zitao Mo",
        "Xiaoyao Liang",
        "Jian Cheng",
      ],
      venue: "IEEE Transactions on Computers, 2025, CCF-A",
      year: "2025",
      primaryContribution: true,
      tags: ["First Author", "LLM", "KV Cache"],
      paper: "https://ieeexplore.ieee.org/document/11218945",
      code: "",
    },
    {
      title:
        "GCC: A 3DGS Inference Architecture with Gaussian-Wise and Cross-Stage Conditional Processing",
      authors: [
        "Minnan Pei",
        "Gang Li",
        "Junwen Si",
        "Zeyu Zhu",
        "Zitao Mo",
        "Peisong Wang",
        "Zhuoran Song",
        "Xiaoyao Liang",
        "Jian Cheng",
      ],
      venue: "MICRO 2025, CCF-A",
      year: "2025",
      primaryContribution: false,
      tags: ["Architecture", "3DGS"],
      paper: "https://arxiv.org/abs/2507.15300",
      code: "",
    },
    {
      title:
        "HEAT: NPU-NDP Heterogeneous Architecture for Transformer-Empowered Graph Neural Networks",
      authors: [
        "Ruiyang Chen",
        "Zhuoran Song",
        "Yicheng Zheng",
        "Zeyu Zhu",
        "Gang Li",
        "Naifeng Jing",
        "Xiaoyao Liang",
        "Haibing Guan",
      ],
      venue: "MICRO 2025, CCF-A",
      year: "2025",
      primaryContribution: false,
      tags: ["Architecture", "GNN", "Transformer"],
      paper: "https://dblp.org/rec/conf/micro/ChenSZZ0JLG25",
      code: "",
    },
    {
      title:
        "MEGA: A Memory-Efficient GNN Accelerator Exploiting Degree-Aware Mixed-Precision Quantization",
      authors: [
        "Zeyu Zhu",
        "Fanrong Li",
        "Gang Li",
        "Zejian Liu",
        "Zitao Mo",
        "Qinghao Hu",
        "Xiaoyao Liang",
        "Jian Cheng",
      ],
      venue: "HPCA 2024, CCF-A",
      year: "2024",
      primaryContribution: true,
      tags: ["First Author", "GNN Accelerator", "Hardware"],
      paper: "https://arxiv.org/abs/2311.09775",
      code: "",
    },
    {
      title:
        "FastGL: A GPU-Efficient Framework for Accelerating Sampling-Based GNN Training at Large Scale",
      authors: [
        "Zeyu Zhu",
        "Peisong Wang",
        "Qinghao Hu",
        "Gang Li",
        "Xiaoyao Liang",
        "Jian Cheng",
      ],
      venue: "ASPLOS 2024, CCF-A",
      year: "2024",
      primaryContribution: true,
      tags: ["First Author", "GPU", "GNN Training"],
      paper: "https://arxiv.org/abs/2409.14939",
      code: "https://github.com/a1bc2def6g/fastgl-ae",
    },
    {
      title: "A2Q: Aggregation-Aware Quantization for Graph Neural Networks",
      authors: [
        "Zeyu Zhu",
        "Fanrong Li",
        "Zitao Mo",
        "Qinghao Hu",
        "Gang Li",
        "Zejian Liu",
        "Xiaoyao Liang",
        "Jian Cheng",
      ],
      venue: "ICLR 2023, CCF-A",
      year: "2023",
      primaryContribution: true,
      tags: ["First Author", "GNN", "Quantization"],
      paper: "https://openreview.net/forum?id=7L2mgi0TNEP",
      code: "https://github.com/weihai-98/A-2Q",
    },
  ],

  projects: [
    {
      title: "FPGA-Based LLM Edge Accelerator with Bitstream Quantization",
      role: "Key Contributor",
      period: "2023.9 - 2024.7",
      summary:
        "Designed KV Cache rearrangement units, FP16/INT8 MAC operators, DMA memory pathways, simulation and verification flows, and validated the accelerator on a VHK158 board.",
    },
    {
      title: "FPGA-Based CNN Edge Accelerator with Model Quantization",
      role: "Project Leader",
      period: "2021.2 - 2021.7",
      summary:
        "Built a low-power CNN accelerator on Ultra96 V2 with systolic-array dataflow, custom compute and memory units, an instruction set, a compiler path, and 8-bit fixed-point quantization.",
    },
  ],

  awards: [
    ["2024", "China University of Chinese Academy of Sciences Climbing Scholarship"],
    ["2023", "Merit Student of University of Chinese Academy of Sciences"],
    ["2021", "Outstanding Graduate of Zhejiang University"],
    ["2019", "Arawana Scholarship (Top 1%)"],
    ["2018", "Merit Student of Zhejiang University"],
  ],
};
