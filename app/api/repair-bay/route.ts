
type ResponseData = {
    navigation: string;
    communications: string;
    life_support: string;
    engines: string;
    deflector_shield: string;
  }

  const systems: ResponseData = {
    navigation: "NAV-01",
    communications: "COM-02",
    life_support: "LIFE-03",
    engines: "ENG-04",
    deflector_shield: "SHLD-05"
};

export async function GET()  {

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Repair</title>
    </head>
    <body>
        <div class="anchor-point">${systems.deflector_shield}</div>
    </body>
    </html>
    `;

   return Response.json(htmlContent, {
    headers: {
        'Content-Type': 'text/html',
      }
   })
  }