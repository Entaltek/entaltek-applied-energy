# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/37d00b3a-fb51-417f-95f8-b005da59776e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/37d00b3a-fb51-417f-95f8-b005da59776e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/37d00b3a-fb51-417f-95f8-b005da59776e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Spanish and English website

The commercial landing uses Spanish at `/` and English at `/en/`. Both routes share components; `src/lib/i18n.ts` selects the language from the URL and `src/lib/locales/en.json` contains the English copy. Language links are explicit: there is no automatic redirection or language cookie. Keep product names and existing screenshot assets unchanged. The editorial library remains in Spanish and is labeled accordingly on the English landing.

Privacy routes: `/privacidad` and `/en/privacy`. Route titles, descriptions, canonical URLs and reciprocal language alternates are defined in `src/lib/routeMetadata.json`. `npm run build` generates static HTML entry files for all four routes, so metadata is available before JavaScript runs. Deploy the **entire** `dist` directory, including `en/` and `privacidad/`, and keep the existing SPA fallback for article routes. `npm run build:dev` is only for development and does not generate these static locale entries.

Validation: `npm run build`, `npx tsc --noEmit -p tsconfig.app.json`, and ESLint on changed files. Check `/`, `/en/`, both privacy routes, ES/EN switching, mobile navigation, product dialogs and empty-form validation. Do not send a real inquiry as a deployment test.
