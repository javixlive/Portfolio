# Javixlive's Homepage

[https://javixlive.netlify.app/](https://javixlive.netlify.app/)

## Updating the site

Edit `content/site.ts` to update the site. It holds the profile, socials, experience, education, timeline, skill groups and projects, and every page renders from it. A new entry in `projects` gets its own page at `/works/<slug>`. The downloadable resume is `public/Resume.pdf`.

## Stack

- [Next.js 16](https://nextjs.org/) with the App Router. Every route is prerendered at build time.
- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) in strict mode
- [Chakra UI v3](https://chakra-ui.com/) with [next-themes](https://github.com/pacocoursey/next-themes) for the color mode
- [Three.js](https://threejs.org/) for the 3D model
- [Motion](https://motion.dev/) for the animations
- [react-icons](https://react-icons.github.io/react-icons/)

## Scripts

Use Node.js 20.9 or newer (`.nvmrc` pins 22).

| Command             | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Starts the dev server on port 3000   |
| `npm run build`     | Builds the production site           |
| `npm run start`     | Serves the production build          |
| `npm run lint`      | Runs ESLint with the Next.js config  |
| `npm run typecheck` | Generates route types and runs `tsc` |
| `npm run format`    | Formats the code with Prettier       |

## Project structure

```
$PROJECT_ROOT
├── app         # Routes, layout, metadata, Open Graph image, sitemap and robots
├── components  # React components
├── content     # site.ts, the content of every page
├── lib         # Chakra UI theme
└── public      # Images, the 3D model and the resume PDF
```

## Credits

- Theme inspired by [Takuya Matsuyama's website](https://www.craftz.dog/) ([source](https://github.com/craftzdog/craftzdog-homepage)).
- 3D model: ["Lizard Mage"](https://sketchfab.com/3d-models/lizard-mage-817d52d9887948bfa0ca43aef6064eaa) by Enalrem, licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

## License

MIT License for the code. The 3D model keeps its own CC BY-NC 4.0 license.
