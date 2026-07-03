// Edit this file to update the homepage content without changing layout code.
// Empty paper/code URLs are rendered as visible disabled badges, so every
// publication keeps the same "Paper / Code" affordance expected on GitHub.io
// academic homepages.
const SITE_DATA = {
  profile: {
    name: "Zeyu Zhu",
    chineseName: "朱泽雨",
    // Add a real portrait path here, such as "assets/profile.jpg".
    // When empty, the page shows an initials avatar over the research visual.
    photo: "",
    title: "Ph.D. Candidate",
    affiliation: "Institute of Automation, Chinese Academy of Sciences",
    location: "The Hong Kong University of Science and Technology, Hong Kong",
    email: "zzy2tt@163.com",
    phone: "+86 18888922669",
    links: [
      {
        label: "Email",
        href: "mailto:zzy2tt@163.com",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=-el19lQAAAAJ&hl=zh-CN",
      },
      {
        label: "CV",
        href: "zhuzeyu_cv.pdf",
      },
    ],
  },

  bio:
    "I am a direct Ph.D. student at the Institute of Automation, Chinese Academy of Sciences, affiliated with the Efficient Intelligent Computing and Learning Lab. My research focuses on AI chip design, ML system design, heterogeneous computing, and neural network model compression for LLMs, GNNs, and CNNs. I have published first-author papers in top-tier conferences and journals including IEEE Transactions on Computers, ASPLOS, HPCA, DAC, ICML, and ICLR, and have served as a reviewer for CVPR, ICCV, NeurIPS, AAAI, and IEEE TPDS.",

  researchInterests: [
    "AI chip design",
    "ML systems",
    "Heterogeneous computing",
    "Model compression",
    "LLM acceleration",
    "GNN/CNN acceleration",
  ],

  news: [
    {
      date: "2026",
      text: "KL-MoE accepted by DAC 2026 and RaGEP accepted by ICML 2026.",
    },
    {
      date: "2025",
      text: "MATA published in IEEE Transactions on Computers.",
    },
    {
      date: "2024",
      text: "MEGA and FastGL appeared at HPCA 2024 and ASPLOS 2024.",
    },
  ],

  publications: [
    {
      title: "A2Q: Aggregation-Aware Quantization for Graph Neural Networks",
      authors:
        "Zeyu Zhu, Fanrong Li, Zitao Mo, Qinghao Hu, Gang Li, Zejian Liu, Xiaoyao Liang, Jian Cheng",
      venue: "ICLR 2023, CCF-A",
      year: "2023",
      tags: ["First Author", "GNN", "Quantization"],
      paper: "https://openreview.net/forum?id=7L2mgi0TNEP",
      code: "https://github.com/weihai-98/A-2Q",
    },
    {
      title:
        "MEGA: A Memory-Efficient GNN Accelerator Exploiting Degree-Aware Mixed-Precision Quantization",
      authors:
        "Zeyu Zhu, Fanrong Li, Gang Li, Zejian Liu, Zitao Mo, Qinghao Hu, Xiaoyao Liang, Jian Cheng",
      venue: "HPCA 2024, CCF-A",
      year: "2024",
      tags: ["First Author", "GNN Accelerator", "Hardware"],
      paper: "https://arxiv.org/abs/2311.09775",
      code: "",
    },
    {
      title:
        "FastGL: A GPU-Efficient Framework for Accelerating Sampling-Based GNN Training at Large Scale",
      authors:
        "Zeyu Zhu, Peisong Wang, Qinghao Hu, Gang Li, Xiaoyao Liang, Jian Cheng",
      venue: "ASPLOS 2024, CCF-A",
      year: "2024",
      tags: ["First Author", "GPU", "GNN Training"],
      paper: "https://arxiv.org/abs/2409.14939",
      code: "https://github.com/a1bc2def6g/fastgl-ae",
    },
    {
      title:
        "MATA: A Memory-Efficient Attention Accelerator for LLMs Exploiting Look-Back KV Cache Pruning",
      authors:
        "Zeyu Zhu, Gang Li, Tielong Liu, Zitao Mo, Xiaoyao Liang, Jian Cheng",
      venue: "IEEE Transactions on Computers, 2025, CCF-A",
      year: "2025",
      tags: ["First Author", "LLM", "KV Cache"],
      paper: "https://ieeexplore.ieee.org/document/11218945",
      code: "",
    },
    {
      title:
        "KL-MoE: A Hierarchical MoE Pruning Framework Exploiting KL Divergence",
      authors:
        "Zeyu Zhu, Gang Li, Minnan Pei, Zitao Mo, Peihuan Ni, Peisong Wang, Tielong Liu, Jian Cheng",
      venue: "DAC 2026, CCF-A",
      year: "2026",
      tags: ["First Author", "MoE", "Pruning"],
      paper: "https://63dac.conference-program.com/presentation/?id=RESEARCH094&sess=sess145",
      code: "",
    },
    {
      title:
        "RaGEP: Rank-aware Geometric Expert Pruning for Mixture-of-Experts Language Models",
      authors:
        "Wentao Hu*, Zeyu Zhu*, Mingkuan Zhao, Zhenhua An, Yanbo Zhai, Shanhong Yu, Huilin Zhou, Xin Lai, Xiaoyan Zhu, Jiayin Wang",
      venue: "ICML 2026, CCF-A",
      year: "2026",
      tags: ["Equal Contribution", "MoE", "Pruning"],
      paper: "",
      code: "",
    },
    {
      title:
        "AdaOff: An Adaptive Offloading Framework for LLMs Inference on Local PCs",
      authors: "Zeyu Zhu, Gang Li, Zitao Mo, Peisong Wang, Jian Cheng",
      venue: "Under Review",
      year: "2026",
      tags: ["First Author", "LLM", "Offloading"],
      paper: "",
      code: "",
    },
    {
      title:
        "DALI: A Workload-Aware Offloading Framework for Efficient MoE Inference on Local PCs",
      authors:
        "Zeyu Zhu, Gang Li, Peisong Wang, Zitao Mo, Minnan Pei, Zhuoran Song, Xiaoyao Liang, Jian Cheng",
      venue: "Under Review",
      year: "2026",
      tags: ["First Author", "MoE", "Offloading"],
      paper: "https://arxiv.org/abs/2602.03495",
      code: "",
    },
    {
      title:
        "GCC: A 3DGS Inference Architecture with Gaussian-Wise and Cross-Stage Conditional Processing",
      authors:
        "Minnan Pei, Gang Li, Junwen Si, Zeyu Zhu, Zitao Mo, Peisong Wang, Zhuoran Song, Xiaoyao Liang, Jian Cheng",
      venue: "MICRO 2025, CCF-A",
      year: "2025",
      tags: ["Architecture", "3DGS"],
      paper: "https://arxiv.org/abs/2507.15300",
      code: "",
    },
    {
      title:
        "HEAT: NPU-NDP Heterogeneous Architecture for Transformer-Empowered Graph Neural Networks",
      authors:
        "Ruiyang Chen, Zhuoran Song, Yicheng Zheng, Zeyu Zhu, Gang Li, Naifeng Jing, Xiaoyao Liang, Haibing Guan",
      venue: "MICRO 2025, CCF-A",
      year: "2025",
      tags: ["Architecture", "GNN", "Transformer"],
      paper: "https://dblp.org/rec/conf/micro/ChenSZZ0JLG25",
      code: "",
    },
    {
      title:
        "Boosting the Performance of Tree-Based Speculative Decoding of LLMs on FPGAs",
      authors:
        "Tielong Liu, Gang Li, Zitao Mo, Zeyu Zhu, Minnan Pei, Jian Cheng",
      venue: "DATE 2026, CCF-B",
      year: "2026",
      tags: ["FPGA", "LLM"],
      paper: "https://doi.org/10.23919/DATE69613.2026.11539704",
      code: "",
    },
    {
      title:
        "APEX: Integer-only Non-linear Function Approximation for Efficient Cross-Modal Inference",
      authors:
        "Peihuan Ni, Zitao Mo, Tielong Liu, Hongli Wen, Zeyu Zhu, Minnan Pei, Junwen Si, Weifan Guan, Peisong Wang, Qinghao Hu, Gang Li, Jian Cheng",
      venue: "DATE 2026, CCF-B",
      year: "2026",
      tags: ["Integer-only", "Cross-modal"],
      paper: "https://doi.org/10.23919/DATE69613.2026.11539465",
      code: "",
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

  experience: [
    {
      title: "ByteDance Seed-3D Team",
      role: "Research Intern",
      period: "2025.3 - 2025.5",
      summary:
        "Worked on acceleration for 3D texture generation models, including CUDA kernel optimization, attention acceleration, generation evaluation, and FlashAttention-related training stability.",
    },
  ],

  education: [
    {
      title: "Institute of Automation, Chinese Academy of Sciences",
      role: "Ph.D. Student, Pattern Recognition and Intelligent System",
      period: "2021.9 - 2026.6",
      summary: "GPA: 3.92/4",
    },
    {
      title: "Zhejiang University",
      role: "B.Eng., Mechatronic Engineering",
      period: "2017.9 - 2021.6",
      summary: "GPA: 4.66/5, Ranking: 1/181",
    },
  ],

  skills: [
    {
      group: "Programming",
      items: ["Python", "C/C++", "CUDA"],
    },
    {
      group: "Hardware Design",
      items: ["Vivado HLS", "Verilog"],
    },
    {
      group: "Simulation / Emulation",
      items: ["Synopsys Design Compiler", "Vivado", "CACTI", "DRAMSim"],
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
