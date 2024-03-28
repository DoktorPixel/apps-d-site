import { NextResponse } from "next/server";

export async function POST (req) {
	try {
		const body = await req.json();
		const JIRA_EMAIL = `kateryna.voitsekhova@appsdelivered.com`
		const JIRA_TOKEN = process.env.JIRA_TOKEN
		const BASE_URL = `https://appsdelivered.atlassian.net`	
		const API_URL = `/rest/servicedeskapi/request`;
		
		const headers = {
			"Content-Type": "application/json;charset=iso-8859-1",
			"Authorization": "Basic " + Buffer.from(JIRA_EMAIL + ":" + JIRA_TOKEN).toString("base64"),
		};

    const response = await fetch(BASE_URL + API_URL, {
			method: "POST",
			headers,
			body: JSON.stringify(body)
		})

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
		console.log(data)
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ error: error.message }, {
      status: 500,
    });
  }
};
