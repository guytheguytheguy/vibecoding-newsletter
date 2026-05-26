import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ count: null, error: 'API key not configured' }, { status: 200 });
  }

  try {
    const res = await fetch('https://api.buttondown.email/v1/subscribers?status=regular', {
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ count: null, error: 'Buttondown API error' }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ count: data.count ?? data.results?.length ?? null });
  } catch {
    return NextResponse.json({ count: null, error: 'Failed to fetch' }, { status: 200 });
  }
}
