export async function onRequestPost(context) {
    const { request, env } = context;

    // CORS headers
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    try {
        const { email } = await request.json();

        if (!email || !email.includes('@') || !email.includes('.')) {
            return new Response(JSON.stringify({ error: 'Valid email required' }), { status: 400, headers });
        }

        const normalised = email.trim().toLowerCase();

        // Check if already signed up
        const existing = await env.BETA_SIGNUPS.get(normalised);
        if (existing) {
            return new Response(JSON.stringify({ message: 'already_signed_up' }), { status: 200, headers });
        }

        // Store with timestamp
        await env.BETA_SIGNUPS.put(normalised, JSON.stringify({
            email: normalised,
            signedUpAt: new Date().toISOString(),
            source: 'website'
        }));

        return new Response(JSON.stringify({ message: 'success' }), { status: 200, headers });
    } catch (e) {
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500, headers });
    }
}

// Handle CORS preflight
export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
