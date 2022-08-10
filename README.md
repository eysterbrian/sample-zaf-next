This is an app scaffold integrating Next.js with the Zendesk App Framework.

## Getting Started

### Prerequisite

Must have Zendesk App Tools installed. If needed, see these [docs](https://developer.zendesk.com/documentation/apps/zendesk-app-tools-zat/installing-and-using-the-zendesk-apps-tools/) to get started.

1. Clone or fork this repo
2. Run `yarn install` or `npm install`
3. Begin running the NextJS app locally
4. Serve the app to your zendesk instance

### Running Zendesk App Tools locally

To serve the app to your Zendesk instance with `?zcli_apps=true`, run

```
zcli apps:server app_local
```

### Running Next.js app locally

Run the development server for Next.js:

```bash
cd.. sample-zaf-next
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Current location of this app is in both the _Ticket Sidebar_ (`sidebar.js`) and _Top Bar_ (`index.js`). This can be changed in the manifest file.

You can start editing the page by modifying `pages/index.js`. You will need to import useZAFClient into any pages/components where requests/actions to the client will be made. The page auto-updates as you edit the file.

After deployment be sure to update the location url to where your app is hosted.

Happy Coding! 🥳
