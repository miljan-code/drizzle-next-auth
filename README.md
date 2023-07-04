An example setup project for NextJS, Drizzle ORM, PlanetScale and NextAuth.

## Usage

Clone this repo

```bash
git clone https://github.com/miljan-code/drizzle-next-auth.git
```

Install necessary dependencies

```bash
npm install
# or
yarn
```

Fill up .env

```env
DATABASE_URL='mysql://username:passowrd@0.0.0.0/db' #PlanetScale

NEXTAUTH_URL='http://localhost:3000'
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Run db migrations

```bash
npm run db:push
```

Run the development server

```bash
npm run dev
# or
yarn dev
```

Drizzle Adapter by [@mattddean](https://github.com/mattddean)
