import type { PuppeteerNodeLaunchOptions } from 'puppeteer-core';
import { type Page } from 'puppeteer-core';
import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';
import { z } from 'zod';
import { env } from '@/env/server.mjs';
let _page: Page | null;

const exePath =
  process.platform === 'win32'
    ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function getOptions(isDev: boolean) {
  let options: PuppeteerNodeLaunchOptions;
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless
    };
  }
  return options;
}

async function getPage() {
  if (_page) return _page;
  const options = await getOptions(env.NODE_ENV === 'development');
  const browser = await puppeteer.launch(options);
  _page = await browser.newPage();
  await _page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
  );
  return _page;
}

export const screenshotSchema = z.object({
  url: z.string().url(),
  height: z.number().optional(),
  width: z.number().optional()
});

export async function getScreenshot(body: Screenshot) {
  try {
    const page = await getPage();
    await page.goto(body.url, { waitUntil: 'domcontentloaded' });
    await page.setViewport({
      width: Number(body.width) || 1280,
      height: Number(body.height) || 720,
      deviceScaleFactor: 1
    });
    const file = await page.screenshot();
    return file;
  } catch (e) {
    console.log(e);
  }
}
