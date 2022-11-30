export default async function takeScreenshot(body: Screenshot) {
  const opts = { method: 'POST', body: JSON.stringify(body) };
  try {
    const res = await fetch('/api/screenshot', opts);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    return url;
  } catch (e) {
    console.log(e);
  }
}
