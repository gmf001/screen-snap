import type { screenshotSchema } from '@/lib/puppeteer';

declare global {
  export type Screenshot = z.infer<typeof screenshotSchema>;
}
