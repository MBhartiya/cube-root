
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    // console.log('Session', JSON.stringify(session, null, 2))
    res.statusCode = 200
    res.json({ name: 'John Doe' })
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}


