// Chronological PDF archive for synsis.github.io
// Add new entries anywhere in this array — the page automatically sorts by `date`.
window.PAPERS = [
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
      "Recent work on Weight-Space Programming uses LLMs to inspect and edit neural weights with forward passes only, conflating LLM scripting with the underlying algebra of forward-only editing. We show that for core structured weight-editing regimes, an LLM optimizer is unnecessary. We introduce Forward Weight-Space Programming (FWSP), a deterministic, LLM-free pipeline combining probing, localization, stratified operators (O1–O4), automatic blind routing (83.3% vs. 33.3% for a 27B LLM with the same tool library), and paired verification with zero inference overhead. Across five modalities and thirteen models (50K to 27B dense and FP8 MoE), FWSP outperforms LLM agents in reliability and speed, eliminates backdoors, and beats 4-shot ICL without recurring prompt cost. For reasoning LLMs, we propose Protected FisherGate, a closed-form covariance-whitened readout edit orthogonal to normal-reasoning states: on DeepSeek-R1-0528-8B, a single frozen math-calibrated patch transfers zero-shot to HumanEval (1K budget; 84.2% vs. 24.4–26.2% for OrthGate, Fisher LDA, and Ridge; 75.4 ± 7.7% across Stage-4-passing calibration subsets) and across HF→vLLM backends on full GSM8K and MATH-500. Finally, we prove and verify two geometric boundaries, subspace entanglement and frozen representation span, where FWSP-localized LoRA bridges forward-only and gradient adaptation."
  }
];
