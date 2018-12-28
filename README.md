# Visualisation development, testing and translation

**The purpose of this repository is to help developing, testing and translating responsive interactive media, infographics and graphics that work in many different sites.**

- [Visualisation development and testing](#visualisation-development-and-testing)
  - [Develop visualisations and interactive media for our sites](#develop-visualisations-and-interactive-media-for-our-sites)
    - [Install Jekyll](#install-jekyll)
    - [Develop interactive pieces and test them in many sites](#develop-interactive-pieces-and-test-them-in-many-sites)
    - [Manage translations](#manage-translations)
    - [Collaborating with your team](#collaborating-with-your-team)
    - [Do you need a Wordpress plugin to publish?](#do-you-need-a-wordpress-plugin-to-publish)
  - [Add your layouts to this repository](#add-your-layouts-to-this-repository)

Although I've build it for the Spanish office to complement our **[Visualisation Guide](https://greenpeace.github.io/gpes-visualisations/)**, I've added templates from many other Greenpeace sites. It will help me, and hopefully others, to develop pieces that are more compatible with other sites.

It includes, as placeholder **example**, a responsive vectorial infographic that should be replaced by your own work.

## Develop visualisations and interactive media for our sites

I suggest a simple workflow with Jekyll, Git and Github.

### Install Jekyll

Jekyll is a static site generator that uses [Liquid](https://shopify.github.io/liquid/) template language (similar to [Twig](https://twig.symfony.com/), used in many of our sites). 

In this repository I use Jekyll test my html, css, javascript and svg in many site templates. [Install Jekyll](https://jekyllrb.com/).

### Develop interactive pieces and test them in many sites

To develop an html interactive, please modify the html, css and js files in the `_includes/media-1/` folder. Jekyll will insert them in the test templates so you have an aproximate preview how it will look like in each template.

Use `jekyll build` to build the final files and `jekyll serve` to tun a test server in your computer with the IP+port: http://127.0.0.1:4000

```bash
jekyll build
jekyll serve
```

Change the files and refresh your browser to see the changes.

You can develop more than one media piece in the same repository. Just create folders named `media-2`, `media-3`... and modify the file `all.html` to link to more than one piece.

### Manage translations

You can use this repo to collaboratively manage translations. Once a map or chart has been developed, you can put all the texts to be translated in the file `_data/main.yml` and adapt your chart/map code to use this texts. 

Then, for every new translation you should duplicate the file `main.yml`, name it as in the other examples and translate.

See the example chart, translated to Portuguese and English, for more information.

### Collaborating with your team

Because Github also uses Jekyll, it's very easy and convenient to publish your visualisation in **[Github pages](https://pages.github.com/)** during development.

**To use Github pages:**

1. [Create a Github repository](https://github.com/new)
2. Enable Github pages in your repository settings.
3. Configure `_config.yml`
4. Push your changes to your repository

Voila! you have a testing server with an URL like: https://greenpeace.github.io/your-repository-name/ that you can send to your team.

Github pages will work with both public and private repositories.

### Do you need a Wordpress plugin to publish?

**No.** In the Spanish Office we upload the html code to the media library and insert it in our site using our own **[Wordpress plugin](https://github.com/greenpeace/gpes-import-wp-shortcodes)**. However there are many other ways to add raw html to Wordpress pages or to other content management systems.

## Add your layouts to this repository

If you need to test your visualisations in other sites or pages you can add more layouts to this repository. Just:

- Fork this repository and clone your copy to your computer.
- Add your html template inside the `_layouts` folder, just like the other ones.
- Insert the code bellow in the template (in the place you want the interactive visualisation to show).

```html
{% include all.html %}
```

- Duplicate the file `gpes-blog.html` **in the root of this repo's folder**. Rename and modify the copy to work with your template.
- Build (with Jekyll) and test your layout. Make sure all the css, js and images load without errors.
- Add a link to your test page in `index.html`
- Commit, push and [create a pull request](https://help.github.com/articles/creating-a-pull-request/).

For more information, **look at the examples already in the repository**.
