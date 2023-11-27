
export const GET = ({request}) => {
    const authHeader = request.headers.get('Authorization');
    console.log(authHeader);

    return new Response(JSON.stringify({message: "Got Response"}), {status: 200});
};
