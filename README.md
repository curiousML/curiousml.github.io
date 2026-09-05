# curiousml.github.io

Personal website of **François HU**, Associate Professor in AI and Actuarial
Science at ISFA (Université Claude Bernard Lyon 1) and Head of the R&D AI Lab at
Milliman France.
Live at <https://curiousml.github.io>.

Static site built with Jekyll and served by GitHub Pages. No build step is
needed to publish: push to `master` and GitHub rebuilds it.

---

## How to update things

Almost everything is data, not markup. You should rarely need to touch HTML.

| I want to… | Edit |
| --- | --- |
| Add a paper | `_data/publications.yml` |
| Add a talk | `_data/talks.yml` |
| Add a course or course material | `_data/teaching.yml` |
| Add a TA duty | `_data/teaching_assistant.yml` |
| Update the career timeline | `_data/experience.yml` |
| Change the research themes | `_data/research_themes.yml` |
| Change the "Currently" card on the home page | `_data/now.yml` |
| Change the recommended channels | `_data/recommendations.yml` |
| Add one of my own YouTube channels | `_config.yml` (`author.channels`) |
| Change name, bio, social links, navigation | `_config.yml` |

### Add a blog post

Create `_posts/YYYY-MM-DD-some-slug.md`:

```markdown
---
title: "Your title"
date: 2026-09-01
lede: >-
  One or two sentences shown on the card and under the title.
tags: [Fairness, Teaching]
glyph: "∑"        # optional character used on the card when there is no image
image: /images/something.png   # optional
math: true        # optional, loads MathJax for $$…$$ and \(…\)
---

Your post, in Markdown.
```

It appears automatically on `/blog/`, on the home page, and in `feed.xml`.
Tags become filter buttons on the blog page.

### Add a project

Create `_projects/some-slug.md`:

```markdown
---
title: "Project name"
order: 6            # controls position in the list
featured: true      # show it on the home page
status: "Open source"
period: "Since 2026"
lede: >-
  One-sentence summary.
stack: [Python, NLP]
links:
  - { label: "GitHub", url: "https://github.com/…", icon: code }
---

Longer description in Markdown.
```

Available link icons: `pdf`, `code`, `slides`, `notebook`, `data`, `link`,
`mail`, `github`, `linkedin`, `scholar`, `arxiv`, `award`, `pin`, `youtube`,
`play`, `rss`.

---

## Layout of the repository

```text
_config.yml          site settings, author identity, navigation
_data/               all content that is a list (publications, talks, courses…)
_includes/           head, header, footer, icons, publication & post cards
_layouts/            default, home, page, post, project
_posts/              blog posts
_projects/           project pages
assets/css/main.css  the whole design system (tokens, light/dark, components)
assets/js/main.js    theme toggle, mobile nav, list filtering, scroll reveal
index.md             home page
research.html        research statement, publications, talks
teaching.html        courses grouped by institution
projects.html        project index
blog.html            blog index
experience.html      career timeline
recommendations.html channels I recommend, plus my own
404.html
cv/ images/ pages/ research/ talks/ teaching/   course material and files (unchanged)
```

## Local preview

Requires Docker (no Ruby install needed):

```bash
docker run --rm -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll:4.2.2 \
  jekyll serve --host 0.0.0.0 --force_polling
```

Then open <http://localhost:4000>.

## Notes

- The dark theme follows the visitor's system setting; the header toggle
  overrides it and the choice is remembered in `localStorage`.
- All existing course files kept their original URLs, so links in old syllabi
  still resolve.
- Content is CC BY 4.0 unless stated otherwise.
