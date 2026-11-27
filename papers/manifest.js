// Chronological PDF archive for synsis.github.io
// Add new entries anywhere in this array — the page automatically sorts by `date`.
window.PAPERS = [
  {
    id: "fwsp-v2",
    date: "2026-11-27",
    version: "v2",
    status: "Preprint",
    title: "Do We Really Need an LLM for Weight-Space Programming?",
    subtitle: "A Unified Forward-Only Optimization Framework and Its Capability Boundaries",
    tags: ["Weight-Space Programming", "Forward-Only Optimization", "Protected FisherGate", "Diffusion Transformers", "LLM Reasoning"],
    page: "papers/fwsp-v2/",
    pdf: "papers/2026-11-27-fwsp-v2.pdf",
    code: "https://github.com/synsis/weight_space_programming",
    abstract:
      "Recent work on Weight-Space Programming shows that large language models (LLMs) can inspect and modify neural weights without backpropagation, conflating LLM scripting with the underlying algebra of forward-only editing. We introduce Forward Weight-Space Programming (FWSP), a unified deterministic framework that turns forward observations into structured weight updates via two complementary analytic solvers: constrained analytic weight fitting (O1–O4) and protected subspace optimization (instantiating OrthGate, Protected FisherGate, and rank-r protected excision), orchestrated by automatic blind routing and paired verification with zero additional per-token computation. Across six modalities and twenty-two models (50K networks to 12B diffusion transformers, 27B dense LLMs, and FP8 MoE models), deterministic routing reaches 83.3% exact dispatch vs. 33.3% for a 27B LLM agent with identical tools on 18 structured blind-dispatch trials. A single math-calibrated Protected FisherGate patch achieves 84.2% HumanEval pass@1 (1K budget; 75.4 ± 9.4% across 3/5 verified subsets), beating BF-512 budget forcing by +14.6 pp (−23.4% tokens). Finally, we prove and verify two geometric boundaries, subspace entanglement and frozen representation span, where FWSP-localized LoRA bridges forward-only and gradient adaptation."
  },
  {
    id: "fwsp-v1",
    date: "2026-11-25",
    version: "v1 (Initial Draft)",
    status: "Preprint",
    title: "Do We Really Need an LLM for Weight-Space Programming?",
    subtitle: "A Deterministic Forward-Only Paradigm and Its Capability Boundaries",
    tags: ["Weight-Space Programming", "Forward-Only Editing", "LLM Reasoning", "Mechanistic Editing"],
    page: "papers/fwsp-v1/",
    pdf: "papers/2026-11-25-fwsp-v1.pdf",
    code: "https://github.com/synsis/weight_space_programming",
    abstract:
      "Recent work on Weight-Space Programming uses LLMs to edit neural weights with forward passes only, conflating LLM scripting with the underlying algebra of forward-only editing. We show that for core structured editing regimes, an LLM optimizer is unnecessary, and introduce Forward Weight-Space Programming (FWSP): a deterministic pipeline combining probing, localization, stratified operators (O1–O4), automatic blind routing (83.3% vs. 33.3% for a 27B LLM with the same tool library), and paired verification with zero additional per-token computation. For reasoning LLMs, we propose Protected FisherGate, a closed-form covariance-whitened readout edit orthogonal to normal-reasoning states: on DeepSeek-R1-0528-8B, a single frozen math-calibrated patch achieves 84.2% HumanEval pass@1 (1K budget; 75.4 ± 9.4% across 3/5 Stage-4-passing subsets), beating 512-token-reserved budget forcing by +14.6 pp (−23.4% tokens) while transferring across HF→vLLM backends on full GSM8K and MATH-500. Across five modalities and thirteen models (50K to 27B dense and FP8 MoE), we further prove and verify two operator boundaries, subspace entanglement and frozen representation span, where FWSP-localized LoRA bridges forward-only and gradient adaptation."
  }
];
