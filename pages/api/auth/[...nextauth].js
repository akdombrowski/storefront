import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const PingOneProvider = () => {
  return ({
    id: "pingone",
    name: "PingOne",
    type: "oauth",
    wellKnown: "https://auth.pingone.com/4e5491d5-74b6-4953-a3d1-c29f76f34d93/as/.well-known/openid-configuration",
    authorization: { params: { scope: "openid email profile" } },
    idToken: true,
    checks: ["pkce", "state"],
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      };
    },
  });
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    PingOneProvider({
    clientId: process.env.PINGONE_ID,
    clientSecret: process.env.PINGONE_SECRET,
  })
  ],
}

export default NextAuth(authOptions)