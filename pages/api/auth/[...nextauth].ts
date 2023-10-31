import { auth } from "@/app/firebase"
import { signInWithEmailAndPassword } from "@firebase/auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    pages: {
        signIn: "/signin"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(userCredentials => {
                        if (userCredentials.user) {
                            return userCredentials.user
                        }
                        return null
                    })
                    .catch(error => { console.log(error) })
            }
        })
    ]
}

export default NextAuth(authOptions)