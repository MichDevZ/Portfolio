type ResponseData = {
    damaged_system: string
  }


export async function GET() {
    return Response.json({ damaged_system: `deflector_shield` })
  }