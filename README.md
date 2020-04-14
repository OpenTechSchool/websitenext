# OpenTechSchool Website Restyle

New version of [opentechschool website](http://opentechschool.org).<br />
Newer and fresher UI, with updated and easier to navigate content.

## Add/Modify my chapter page

If you are part of a OTS chapter team and would like to add or modify your
chapter page, we made this very easy for you.<br />
You will need to add/modify just one file and can forget about all the rest.<br />
Run locally the project, modify your page and then open a PR to this project.<br />
Please read [the city section](#citySection) to learn how can you take care of your chapter page.

## quick start:

1. `npm i`
2. `npm run dev`

## To contribute:

Here is an explanation to help you contribute easily.<br />
If you want to contribute but don't know on what to work on, check our github issues, we try to label them as accurate as possible.

If you are beginner, search for the label `good first issues`.<br />
Assign the issue to your self and when you are done, make a PR to review.<br />
Always feel free to reach out for help. You can write in the issue it self, you can open a PR as draft and ask suggestion about your code or you can contact us on [slack](https://opentechschool-slack.herokuapp.com) in the #website-dev channel.

### Requisit:

`Node version > 9`

`npm`

### Running

1. `npm i`
2. `npm run dev`
3. check you browsers, a window should be now open at `localhost:3000`<br />
   You might need to reload the page. (we still need to improve the process)

## File Structure and major library

### Styles

The global styles can be found in `style/style-global.js` file.<br />
In `style/style.js` we define project variables and
the variables needed by material UI theme.

#### Material UI

For this project UI we use [material UI library](https://material-ui.com/).<br />
Material UI is rich of components easy to use in a react application and we also relay on [its grid system](https://material-ui.com/components/grid/#grid).<br />
Most of [the icon](https://material-ui.com/components/material-icons/) we use also come from material ui.

<b>Tips:</b>
MaterialUI has its own way to pass a component as prop.<br />
Here is the [documentation to help you out with it](https://material-ui.com/guides/composition/)

The component has some material UI props that need to be pass down to the child component.<br />
You need to wrap the component that you want to forward the properties.

```
const WrappedIcon = props => <Icon {...props} />;
WrappedIcon.muiName = Icon.muiName;

```

<a name="citySection"></a>

## Cities data

Markdown for city can be found in data/cities.<br />
Inside this folder you will find subfolders based on language. Each city must have at least english language to be visible.<br />
Add as many language as you wish for your city. The files must have always the same name: `city-name.md`.<br />
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

Translation are located in `translations/`. Here there are some configuration and typescript file needed to make translation works but most important there are `json` files for each language.<br />
Those are translation for all the website except the city page.<br />
If you create new content, please remember to add your text to those files, at least to the english translation.

If you add a new language add a `yourLanguage.json` file in the `translations/` directory and remember to add your language to the `config.ts` files to make it available to the `<LocalSwitcher />`

If you want to use translation in a file, you can use the `t()` function, which it takes as a argument the string to translate from the language jons file.<br />
Example:
In my `en.json` i have such string:

```
"about": {
   "title": "About OTS"
}
```

in my `about.tsx` page i can use the `t` function like that: `t('about.title')`.
`t()` function always fall back to english. If the translation doesn't exists even in the `en.json` file, you will see printed the string of your translation (i.e. `about.title`) and a warning will show up in your console.

`t()` function can be extracted form the `useTranslation` hook and in order to be effective in a page, the page must be wrapped with the `WithLocale()` HOC.

### Conventions

**Typescript or Javascript?**
You will see that some page use typescript and some other don't. There is no restricted
rules about it, both extension will work, use the one that make you feel more comfortable.<br />
We try however to not over do it with Typescript since is a simple project and we like to keep it simple.

**Style in jsx**
Style is fairly simple and we since we rely on material ui, it usually keep it pretty short.<br />
Therefore we want to keep it in the same page as the component/page.<br />
Yet, we avoid using javascript-in-css as much as possible therefore it will be easier to move to plain css file, if we will ever decide to do so.

## Contact

Found an issue, a bug or have an idea for a great new feature?
Feel free to open a new issue here on github. Try to label it as best as you can so is easier to spot it for us.

Have an idea and already know how to develop it? Go ahead and make a PR, we are very happy to review it.

Have an idea but would like to talk to someone to know how to better proceed?
Join us on [slack](https://opentechschool-slack.herokuapp.com): channel #website-dev
