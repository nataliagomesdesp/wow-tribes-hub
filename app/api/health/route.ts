export async function GET() {
  return Response.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      app: 'wow-hub',
      environment: process.env.NODE_ENV,
    },
    { status: 200 }
  )
}
