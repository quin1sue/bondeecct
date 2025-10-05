### Bondee – Campus Event Management Platform

###

<p align="left">The web application for managing CCT campus events. Students with authorized college emails can sign in, register for events, and view public events.</p>

### Tech Stack

- [NextJS](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [pnpm](https://pnpm.io/)
- [TanstackQuery](https://tanstack.com/query/latest)

###

### Features

[x] User authentication via Google oAuth.
[x] Only user's with a valid @citycollegeoftagaytay.edu.ph can only verify.
[] Built-in forms
[] event creation in admin panel

etc

### Development

1. **Clone the repository**

```
git clone https://github.com/quin1sue/bondeecct.git
cd <your folder directory>
```

2. **Install dependencies**
   > **Note**: Make sure you have [ **pnpm** ](https://pnpm.io/installation) installed in your system.

```
pnpm install
```

3. **Environment Variables**
   Create a `.env` file in the root folder:

```
NEXT_PUBLIC_SUPABASE_URL="URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="URL"

SUPABASE_URL="URL"
SUPABASE_SERVICE_ROLE_KEY="URL"

DATABASE_URL="URL"

```

4. **Run Prisma Migrations**

```
pnpm prisma migrate dev --name <name of migration>
```

5. **Start the development Server**

```
pnpm run dev
```

Open http://localhost:3000

### Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request
