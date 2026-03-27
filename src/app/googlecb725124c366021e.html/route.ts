export async function GET() {
  return new Response("google-site-verification: googlecb725124c366021e.html", {
    headers: { "Content-Type": "text/html" },
  });
}
