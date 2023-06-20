import type { RequestHandler } from './$types';
import { GUARDIAN_API_KEY } from '$env/static/private';
import Guardian from 'guardian-js';

const guardianClient = new Guardian(GUARDIAN_API_KEY, false);

export const GET = (async () => {
    try {
        const resp = await guardianClient.content.search('politics', {
            pageSize: 1
        });

        if (!resp) throw new Error('Response failed to search');
        if (!resp.results || !resp.results.length) {
            throw new Error('No results found');
        }
        
        return new Response(JSON.stringify(resp.results[0]), {
            status: 200
        });

    } catch (err) {
        if (err instanceof Error) {
            return new Response(err?.message, { status: 500 });
        } else {
            throw err;
        }
    }
}) satisfies RequestHandler;