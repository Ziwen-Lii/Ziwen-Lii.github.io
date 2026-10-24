# Publications update

Update the existing academic homepage using its Jekyll, Kramdown and Sass stack.
Preserve the existing typography, teal links, white image backgrounds, thin dividers,
260px thumbnails and the existing stacked mobile layout. Cap thumbnails at 260px
even in the narrow preview so the figures do not expand to fill the screen.

## Content and components

The user is a fourth-year Software Engineering undergraduate. The bilingual
opening paragraph and eyebrow list LLM agents, agent safety, and generative vision
as the current research interests, without the previous narrower topic list.
Expand the opening paragraph with agent reasoning, collaboration and interaction,
safety/reliability evaluation, and visual generation as research interests. Add
Dr. Xueyi Zhang's Google Scholar link beside his name in both languages.

Reuse the local `.paper-box`, `.paper-box-image`, `.paper-box-text` and `.paper-links`
components. Add EXAM and ForestBench before NGM-RAG, newest first. Each entry has a
linked diagram, official title, complete author list with Ziwen Li emphasized, arXiv
and PDF links, and a short bilingual summary. Label both as arXiv preprints (2026).
Remove their two superseded manuscript rows and obsolete translation keys.
Remove the News section. Use matching badges for all three papers, in order:
`Under ARR`, `Under WWW`, and `WISA`. Follow the user-supplied publication-list
reference only for the rectangular ribbons with white serif text. Use the original
deep teal background (`#0b5563`) per the user's final color preference. Keep
them compact: 11px type, 3px by 8px padding, positioned 6px from the top and 4px
beyond the left edge. Retain the original white thumbnail frame and thin border,
with no added padding, gray background or shadow. Preserve complete diagrams and
the existing page typography and spacing; allow text to wrap within its column.

## Images and accessibility

Use the two user-supplied PNGs unchanged: the society diagram belongs to EXAM;
the task/forest diagram belongs to ForestBench. Display the entire figure at its
natural aspect ratio with descriptive alt text, explicit intrinsic dimensions and
lazy loading. The image link gives readers access to the paper at full size.
Keep native link keyboard behavior and existing focus/hover styling; add no motion.

## Provenance and verification

The approved bilingual introduction places the internship in Prof. Haizhou Li's
research group, with Dr. Xueyi Zhang guiding the internship research. Prof. Li's
IEEE Fellow title and Scholar URL (`https://scholar.google.com/citations?user=z8_x7C8AAAAJ&hl=en`)
are listed on his personal homepage, https://www.colips.org/~eleliha/ (checked
2026-10-25). Preserve Scholar links for all three researchers.

The bilingual introduction identifies Dr. Xueyi Zhang as the user's internship
mentor and a Postdoctoral Research Fellow at NUS. The mentoring relationship is
user-supplied. Affiliation and title were checked against NUS Computing's people
directory (https://www.comp.nus.edu.sg/cs/people/) and the ICASSP session organizer
biography (https://github.com/icassp2027-ss-ai-safety/icassp2027-ss-ai-safety.github.io/blob/main/index.html).
Preserve Prof. Xianfeng Han's supervision and Scholar link, the CUHK-Shenzhen
internship, and the Fall 2027 MPhil search.
Xueyi Zhang's Scholar URL (`https://scholar.google.com/citations?user=-hFq7VAAAAAJ&hl=en`)
is linked from https://www.alphaxiv.org/zh/@xueyi-zhang. The public profile matches
his NUS affiliation and publications; direct automated Scholar access returned 403.

Titles and author order: https://arxiv.org/abs/2610.19863 and
https://arxiv.org/abs/2608.08605 (checked 2026-10-23).
No external components or dependencies added. Verify rendered desktop/mobile layout,
all new links and images, and English/Chinese switching.
