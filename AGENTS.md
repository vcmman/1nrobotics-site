# 1N Robotics repository memory

## Persistent memory documents

Before website edits, read [website editing guidelines](WEBSITE_EDITING_GUIDELINES.md).
Before planning or updating research posts, read [blog research memory](BLOG_RESEARCH_MEMORY.md)
alongside the mandatory editorial guidelines below. Keep these documents current
when user preferences change or research posts are added or materially revised.

## Website copy style

Omit terminal periods (English `.` and Chinese `。`) from headings, short
taglines, captions, buttons, and navigation labels in both languages. Preserve
question marks and normal punctuation in body paragraphs and complete sentences.
The full typography, bilingual, approval, and deployment rules are recorded in
[website editing guidelines](WEBSITE_EDITING_GUIDELINES.md).

## Default writing skill

For every substantive writing or editing task in this repository, including
one-off blogs, automated weekly posts, and English/Chinese website copy, read and
apply [Humanize Writing](.agents/skills/humanize-writing/SKILL.md) by default.
No explicit reminder from the user is required. Complete its final editorial
self-check before publishing. Research and factual accuracy remain governed by
`BLOG_EDITORIAL_GUIDELINES.md`.

Write with concrete details, natural rhythm, and evidence-backed editorial
judgment. Do not invent personal experiences, feelings, quotations, or anecdotes
to make prose feel human. Preserve uncertainty, source attribution, and numerical
qualifiers in both languages.

## Blog work

Whenever adding or updating a research blog post, read and follow
[`BLOG_EDITORIAL_GUIDELINES.md`](BLOG_EDITORIAL_GUIDELINES.md) before researching or writing.

These rules are mandatory for automated weekly posts as well as one-off analysis:

- Prioritize deployment-relevant evidence over paper or product announcements.
- Analyze data, model family, generalization, runtime, safety, cost, and reproducibility.
- Separate reported results, author claims, and 1N Robotics' interpretation.
- Prefer official documentation, papers, project pages, datasets, and benchmark records.
- State whether a result is in-distribution, zero-shot, few-shot, fine-tuned, simulated, or real-world.
- Do not call a system general-purpose or deployment-ready from a single benchmark or selected demo.
- Update `blog.html`, `feed.xml`, and `sitemap.xml` when publishing a post.
- Publish complete English and Chinese copy through `i18n.js`; English is the default language.
- Add the language switch to every new page and verify that the saved preference follows navigation.
- Validate HTML/XML, local links, responsive layout, and the live deployment after merging.
