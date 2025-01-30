// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// // import GoogleProvider from "next-auth/providers/google"

// const  authOptions = {
//   secret: process.env.AUTH_SECRET,
//   providers: [
//     GithubProvider({
//       clientId: process.env.AUTH_GITHUB_ID!,
//       clientSecret: process.env.AUTH_GITHUB_SECRET!,
//     }),
//     // GoogleProvider({
//     //   clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
//     //   clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET!,
//     // }),
//   ],
// };

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST };

import NextAuth from "next-auth"
import { options } from "./options"
const handler = NextAuth(options)

export { handler as GET, handler as POST }