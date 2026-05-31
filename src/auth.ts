import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('[auth] authorize called', credentials?.email ? 'email present' : 'no email');
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log('[auth] missing credentials');
            return null;
          }

          console.log('[auth] importing db');
          const dbMod = await import('./db');
          console.log('[auth] db imported, has db?', !!dbMod.db);
          const schemaMod = await import('./db/schema');
          console.log('[auth] schema imported, has users?', !!schemaMod.users);
          const { eq } = await import('drizzle-orm');

          console.log('[auth] querying for user:', credentials.email);
          const rows = await dbMod.db.select().from(schemaMod.users).where(eq(schemaMod.users.email, credentials.email as string));
          console.log('[auth] query result rows:', rows?.length);

          const user = rows?.[0];
          if (!user) {
            console.log('[auth] user not found');
            return null;
          }

          console.log('[auth] comparing password');
          const valid = await compare(credentials.password as string, user.password);
          console.log('[auth] password valid:', valid);
          if (!valid) return null;

          const result = { id: String(user.id), name: user.name, email: user.email };
          console.log('[auth] authorized:', result.email);
          return result;
        } catch (err) {
          console.error('[auth] authorize error:', err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  session: { strategy: 'jwt' },
});
