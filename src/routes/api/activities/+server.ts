import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
    console.log("In GET");
    console.log(event);

    return new Response("Got Response");
};
