# Setup .env File

Please create a `.env` file in the root directory with the following content:

```
DATABASE_URL="file:./dev.db"
```

Then run:
```bash
npm run db:push
npx prisma generate
```

This will create the database and generate the Prisma client.
