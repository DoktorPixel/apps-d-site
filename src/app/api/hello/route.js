export async function GET(request) {
  const body = request.json();
  console.log(body);

  return new Response(JSON.stringify({ hello: 'World' }));
}
