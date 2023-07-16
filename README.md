## Monorepo NodeJs Vite Backblaze

uploading, listing, getting images and buckets from backblaze.com I use this one because is free and you do not need a credit card to start using it, it is so cool and the best option to test and learn how to integrate and do an upload

library to use from nodeJS

- https://github.com/yakovkhalinsky/backblaze-b2

### Run:

inside `server` folder create `.env` file with your values for:

```
## port for the server
PORT=5500

### bucket secrets
BUCKET_ID=123
KEY=123
KEY_ID=123
BUCKET_NAME=images-peru
```

Then, to install all dependencies of all workspace packages with pnpm, you should run `pnpm multi install` (or just `pnpm m i`).

after that, the root folder run:

```
pnpm dev
```

that will trigger the `pnpm run dev` command inside `client` and `server` folders.

that's it.

### tech:

- nodejs/pnpm/monorepo
- vite/react
- tailwind/prettier plugin/form plugin
