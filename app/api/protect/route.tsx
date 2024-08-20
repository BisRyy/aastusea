import { auth } from '@clerk/nextjs/server'

export async function GET() {
  // If there is no signed in user, this will return a 404 error
  auth().protect()

  // Add your Route Handler logic here

  return Response.json({ message: 'Hello world!' })
}