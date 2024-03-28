import axios from 'axios';

export async function POST(request) {
  try {
    const apiKey = process.env.CLOSE_API_KEY + ':';
    const apiKeyEncoded = Buffer.from(apiKey, 'utf-8').toString('base64');

    const body = await request.json();
    const { target, data } = body;

    const apiPath =
      target === 'email' ? '/api/v1/activity/email/' : '/api/v1/contact/';
    const apiEndpoint = 'https://api.close.com' + apiPath;

    const response = await axios({
      method: request.method,
      url: apiEndpoint,
      headers: {
        Authorization: `Basic ${apiKeyEncoded}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    });

    return new Response(JSON.stringify(response.data), {
      status: response.status,
    });
  } catch (error) {
    console.error('Proxy server error:', error);
    if (error.response) {
      console.error(
        'Error response:',
        error.response.status,
        error.response.data
      );
      return new Response(JSON.stringify(error.response.data), {
        status: error.response.status,
      });
    }

    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
