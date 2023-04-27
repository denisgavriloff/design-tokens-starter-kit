# Design Token Starter Kit

![image](https://user-images.githubusercontent.com/61278217/234781689-899e28b0-35e4-4ecb-8ed7-861a9a7e6b87.png)

This is a starter kit for design tokens, with integration for Figma and Tokens Studio. Design tokens are a way to define and manage the visual design elements of a product or brand, such as colors, typography, and spacing. By defining these elements as tokens, they can be easily shared and reused across design and development teams, ensuring consistency and coherence in the final product.

## Installation

To use this starter kit, you'll need to have Node.js and npm installed on your machine. You can then clone this repository and install the dependencies by running:

```
git clone https://github.com/denisgavriloff/design-tokens-starter-kit.git
cd design-tokens-starter-kit
npm install
```

## Setting up Figma

To be able to play with the tokens, you'll need a Figma account (no need to be a paid account) and the Tokens Studio for Figma plugin installed. 

Create a new Figma project, open the Tokens Studio plugin and follow these steps to create tokens: https://docs.tokens.studio/getting-started.

Once you have your tokens ready, follow these steps to connect the forked GitHub repo to your account: https://docs.tokens.studio/sync/github

If you use `figma-sync` as the branch name, then the `npm run figma-sync` script will be already ready to use. If you choose a different name, make sure to change it in the script as well.

## Available scripts

This starter kit includes several npm scripts that can be used to generate and manage design tokens:

In the project directory, you can run:

### `dev`
```
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.

### `figma-sync`

```
npm run figma-sync
```


This script synchronizes the design tokens from Figma using the Figma API. It fetches the latest changes from the remote repository and merges them into the local branch, then transforms the raw token data into a format that can be used by Style Dictionary, and generates the final design tokens.

## How it works

When you run `npm run figma-sync`, the following steps are performed:

1. `git fetch` is used to fetch the latest changes from the remote repository.
2. `git merge origin/figma-sync` is used to merge the latest changes into the local branch.
3. `npm run transform-to-style-dictionary` is used to transform the raw token data from Figma into a format that can be used by `style-dictionary`.
4. `npm run generate-tokens` is used to generate the final design tokens using `style-dictionary`.

### `transform-to-style-dictionary`

```
npm run transform-to-style-dictionary
```

This script transforms the raw design token data from Figma into a format that can be used by `style-dictionary`. The `token-transformer` script takes the raw token data, which is in Figma-specific format, and transforms it into a more generic JSON format that can be used by other tools and platforms.

### `generate-tokens`

```
npm run generate-tokens
```


This script generates the final design tokens using `style-dictionary`, a tool for generating design tokens across multiple platforms and formats. `style-dictionary` takes the transformed token data and outputs it as a set of JSON files that can be used in your design and development projects.

Using `token-transformer` and `style-dictionary` allows us to easily manage and generate design tokens for our projects, without having to manually update each token value in multiple places. With this starter kit, you can quickly and easily set up your own design token system and streamline your design and development workflow.

