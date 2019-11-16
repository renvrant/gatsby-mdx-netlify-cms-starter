# Gatsby + Gastby-MDX + Netlify-CMS Starter

Extended from the Gatsby starter, this starter aims to provide an example for using Gatsby-MDX with Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e556df2f-659a-4d2d-9466-8575e6976936/deploy-status)](https://app.netlify.com/sites/mystifying-mclean-5c7fce/deploys)

## Features

- Support React Components in your CMS editing workflow through MDX
- Read .MD and .MDX files as pages automatically
- Swap page template based on CMS key, allowing editors to choose different page templates
- Support CMS configurations that save markdown in frontmatter fields with an mdx-enabled markdown renderer component (with example)
- Hide pages from being editable by the CMS
- Extend Netlify CMS editor to support the insertion of a React component, allowing your editors to include things like buttons or testimonials
- Swap default HTML elements in posts for React components, allowing for greater control
- All the other Gatsby + MDX stuff

## Developing Locally

`yarn develop` or `npm run develop` @ localhost:8000

Your development environment will read from your local .md files, but will *not* hot reload changes to the .md files. To make a change in the markdown and see it reflected:

1. Stop the dev server
2. Run `rm -rf .cache` to remove the gatsby cache
3. Restart the dev server

### Local Admin Panel

While running the dev server:

`localhost:8000/admin`

Log in using your Netlify credentials. 

Use the local admin to verify changes to your CMS config. Please note that the state of all markdown content will reflect the state of the github master branch, NOT your local changes.

## Building

`yarn build` or `npm run build`

## Project Overview

Go through each of these directories to understand the project and extend from it.

*src/cms* - Utilities for working with FrontMatter which Netlify CMS depends on, example previews and example widget registration. This folder also includes a whitelist of components that will be included in the MDX render scope in **cms-components.constants.js**.

*src/components* - Components, mostly default with a few additions such as a call to action and a smart link.

*src/core* - Core components to render markdown, catch errors

*src/page-templates* - Templates for CMS pages and an entry template component that will be used to determine what template should be shown where. Look in particular at **cms-entry.template.js**

*src/pages* - Editor content. All CMS-created pages will live in the content directory. Other pages may be modified from the CMS, but cannot be created or deleted.

*static/admin* - CMS Editor configuration.

## Templates and Template Keys

The `CMSTemplate` component in conjunction with the hidden `templateKey` var controls which template will be used to render each content page. The `CMSTemplate` component will try to map the value of `templateKey` to a component, and fall back to a default if nothing is found. Please see the component for more details.

## Markdown and Frontmatter

Due to the way Netlify works, some CMS content is saved as Markdown `frontmatter` rather than actual markdown. Therefore, fields with a markdown editor will save a raw markdown string. It is up to our templates to correctly parse markdown. For this, we have the core component `<RenderMarkdown>` which will parse MDX upon receiving an MDX string and include supplied React components as appropriate. Under the hood, this uses [@mdx/runtime](https://mdxjs.com/advanced/runtime) so please look there fore configuration details.

---

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    npx gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
