import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

async function downloadScreenshot(el: HTMLDivElement) {
  const canvas = await html2canvas(el);
  const dataURL = canvas.toDataURL('image/png');
  downloadjs(dataURL, 'download.png', 'image/png');
}

export default downloadScreenshot;
