# laimk.dev

Personal site and portfolio, built with [Astro](https://astro.build) and Tailwind CSS.
Deployed to GitHub Pages at <https://laimk.dev>.

## Editing content

Almost everything lives in one file: **`src/config.ts`**.

| Field | What it controls |
| --- | --- |
| `name`, `title` | Hero heading and the browser tab title |
| `description` | `<meta name="description">` |
| `accentColor` | Link/highlight color used throughout |
| `social` | Footer + header links (email, GitHub, LinkedIn, X) |
| `aboutMe` | About section prose |
| `skills` | Skill pills |
| `projects[]` | Project cards — `name`, `description`, `link`, `skills[]` |
| `experience[]` | Work history — `company`, `title`, `dateRange`, `bullets[]` |
| `education[]` | Schooling — `school`, `degree`, `dateRange`, `achievements[]` |

Any section left as an empty array (`[]`) hides itself entirely, so you can ship
with just the parts you have.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built output
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
Astro and publishes to GitHub Pages. The custom domain is set by
`public/CNAME`, which Astro copies into the build output.

## Credits

Based on [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) (MIT).
See `LICENSE.md`.
