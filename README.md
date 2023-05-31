# Nuxt 3 with Tigris Minimal Starter

To learn more check out:

- [Tigris documentation](https://www.tigrisdata.com/docs/)
- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Tigris Project

Run the following command. You will need to create a Tigris Cloud account or
login to an existing account to authenticate the Tigris CLI:

```sh
npm run tigris:seed
```

This will create a project in Tigris Cloud and store your Tigris project
configuration in a `.env` file.

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the
[deployment documentation](https://nuxt.com/docs/getting-started/deployment) for
more information.
