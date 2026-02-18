# OpenTechSchool Website Restyle

New version of [opentechschool website](https://opentechschool.org).<br />
Newer and fresher UI, with updated and easier to navigate content.

Based on [Next.js](https://nextjs.org/).

## Add/Modify my chapter page

If you are part of a OTS chapter team and would like to add or modify your
chapter page, we made this very easy for you.<br />
You will need to add/modify just one file and can forget about all the rest.<br />
Run locally the project, modify your page and then open a PR to this project.<br />
Please read [the city section](#citySection) to learn how can you take care of your chapter page.

## Quick Start

1. `npm i`
2. `npm run dev`

## To Contribute

Here is an explanation to help you contribute easily.<br />
If you want to contribute but don't know on what to work on, check our github issues, we try to label them as accurate as possible.

If you are a beginner, search for the label `good first issues`.<br />
Assign the issue to yourself and when you are done, make a PR for review.<br />
Always feel free to reach out for help. You can write in the issue itself, you can open a PR as draft and ask for suggestions about your code.

### Requirements

- Node.js version >= 25
- npm >= 10.0.0

### Running

1. `npm i`
2. `npm run dev`
3. a window should open at `localhost:3000`

## File Structure and Major Libraries

### Styles

The global styles can be found in `style/style-global.js` file.<br />
In `style/style.js` we define project variables and
the variables needed by MUI theme.

#### Material UI (MUI)

For this project UI we use [MUI (Material UI) library](https://mui.com/).<br />
MUI is rich of components easy to use in a react application and we also relay on [its grid system](https://mui.com/material-ui/react-grid/).<br />
Most of [the icons](https://mui.com/material-ui/material-icons/) we use also come from MUI.

<b>Tips:</b>
MUI has its own way to pass a component as prop.<br />
Here is the [documentation to help you out with it](https://mui.com/material-ui/guides/composition/)

The component has some MUI props that need to be passed down to the child component.<br />
You need to wrap the component that you want to forward the properties.

```javascript
const WrappedIcon = (props) => <Icon {...props} />
WrappedIcon.muiName = Icon.muiName
```

<a name="citySection"></a>

## Cities Data

Markdown for city can be found in `data/cities/en/`.<br />
Each city file should be named `city-name.md` and placed in the English directory.<br />
If you want to add a city that is currently inactive, just add `is_inactive` to the markdown.

Each city **MUST HAVE**:

- slug
- title
- tagline
- meetup_name
- twitter
- some content

If you want to show a list of social icons after your city description, add the social block to your markdown.<br />
Example:

```
socials:
  - twitter: https://twitter.com/ots_bln
  - facebook: https://www.facebook.com/opentechschool.berlin
```

Usually `berlin.md` is the most update city, so if you really feel lost or something doesn't work, you can check that file as reference.

Another must have even if the page will not broke in case this piece is missing, are the images.<br />
Each city page expect at least two images: Cover image and description image.<br />
Please place these two images in the `/public` folder. The name must be: `cityName_cityBg.jpg` for cover picture and `cityName_cityAbout.jpg` for the image next to your description.

In order to show the team members on your city page you can either add your team at [discourse](https://discourse.opentechschool.org/) or manually add the members to the page. In order to automatically pull the team names from discourse you need to specify your discourse team in the frontmatter section as follows. Members will be sorted by `last_seen_at` (last active member go first).

```
---
discourse_group: Name of the group
```

If your team is not using discourse you can just list the team members in your markdown file in the frontmatter section as follows and add the corresponding image as `.jpg` to the `public/members` folder.

```
members:
   - imageName: Name to display
```

### Translation

Translations are located in `translations/` directory. The website currently supports English only after the conversion to static site generation.<br />
If you create new content, please remember to add your text to the `en.json` translation file.

To use translations in a component, use the `t()` function from the `useTranslation` hook:

```javascript
import useTranslation from '../hooks/useTranslation'

const MyComponent = () => {
  const { t } = useTranslation()
  return <h1>{t('about.title')}</h1>
}
```

The `t()` function takes a key from the `en.json` file and falls back to displaying the key if translation is missing.

### Conventions

**Style in JSX**
Style is fairly simple and since we rely on MUI, it usually keeps it pretty short.<br />
Therefore we want to keep it in the same page as the component/page.<br />
Yet, we avoid using JavaScript-in-CSS as much as possible therefore it will be easier to move to plain CSS file, if we will ever decide to do so.

## Deployment

This website is deployed to GitHub Pages. Every push to the `github-pages` branch automatically triggers the GitHub Actions workflow that builds and deploys the static site.

### Building for GitHub Pages Locally

To test the GitHub Pages build locally with the correct basePath configuration:

Note: We are using `out` instead of `websitenext`, but the github action will copy files from `out` to `websitenext`

```bash
# Build with GitHub Pages environment variables
GITHUB_ACTIONS=true GITHUB_REPOSITORY=OpenTechSchool/out npm run build

# The static files will be generated in the 'out' directory
# All asset paths (images, fonts, links) will include the /out basePath
```

**Important:** When building for GitHub Pages, the build process:

- Adds `/websitenext` basePath to all asset URLs
- Configures static export for proper GitHub Pages deployment
- Ensures fonts, images, and internal links work correctly with the repository's subpath

For local development without basePath, use the standard commands:

```bash
npm run dev        # Development server
npm run build      # Production build (local)
```

### Using a custom domain

Set `CUSTOM_DOMAIN` to true in `deploy-github-pages.yml` when using a custom domain e.g. opentechschool.org

## Contact

Found an issue, a bug or have an idea for a great new feature?
Feel free to open a new issue here on github. Try to label it as best as you can so is easier to spot it for us.

Have an idea and already know how to develop it? Go ahead and make a PR, we are very happy to review it.

Have an idea but would like to talk to someone to know how to better proceed?
Feel free to open a GitHub issue to discuss your ideas and get guidance on implementation.
