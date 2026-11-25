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
      "Recent studies on Weight-Space Programming and self-rewriting language models show that LLMs can inspect and edit neural weights using only forward passes, yet they conflate LLM script generation with the underlying algebra of forward-only editing. We show that for core structured weight-editing tasks, an LLM optimizer is not required: these edits reduce to deterministic linear-algebraic operations. We formalize this paradigm as Forward Weight-Space Programming (FWSP), an LLM-free, four-stage pipeline (probing, localization, stratified operators O1–O4, and paired verification) with zero inference overhead. Across five modalities and thirteen models from 50K parameters up to 27B dense and 186GB FP8 MoE (CNNs, DINOv2-Base, Gymnasium policies, Burgers FNO, Qwen3-8B, Qwen3.5-0.8B/4B/9B, DeepSeek-R1-0528-8B, GLM-Z1-9B, Qwen3.8-27B, and Qwen3.8-Flash-Next-FP8), FWSP achieves 100% Top-1 fault localization (restoring corrupted Qwen3-8B perplexity from 7,375.7 to 5.45 in 2.67s), eliminates BadNets backdoors (100% → 0% ASR), beats 4-shot ICL by 4.5% on 1,100 public NLP queries at 3.2× lower token cost, and mitigates reasoning overthinking loops without gradients (+38.3–44.5% GSM8K and +20.0–28.8% MATH-500 under constrained token budgets across Qwen3.5-0.8B/4B/9B and DeepSeek-R1-0528-8B; +9.2% zero-shot HumanEval on DeepSeek-R1-0528-8B) while safely abstaining where MeZO degrades GLM-Z1-9B. Conversely, we prove and verify two fundamental barriers—subspace entanglement and frozen-upstream representation span—where warm-starting localized LoRA from FWSP lifts damaged, shifted DINOv2-Base from 8.6% to 88.1% with 10.7× fewer trainable parameters."
  }
];
