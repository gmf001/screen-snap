import { ZodError } from 'zod';
import { getScreenshot, screenshotSchema } from '@/lib/puppeteer';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const body = screenshotSchema.parse(JSON.parse(req.body));
      const file = await getScreenshot(body);
      res.setHeader('Content-Type', 'image/png');
      res.setHeader(
        'Cache-Control',
        'public, immutable, no-transform, s-maxage=86400, max-age=86400'
      );
      return res.status(200).end(file);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json(error.issues);
      }
      return res.status(500).end();
    }
  }
}

export default handler;
