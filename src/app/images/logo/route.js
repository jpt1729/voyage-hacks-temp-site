import { ImageResponse } from "next/og";
import Airtable from "airtable";

let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
const sendMessage = async (id, message) => {
  try {
    const result = await fetch(
      "https://hooks.slack.com/triggers/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",
      {
        method: "POST",
        headers: {
          "Content-Type": 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            message: message,
            userId: id,
        }),
      }
    );
  } catch (error) {
    console.error(error);
  }
};
export async function GET(request, context) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const id = searchParams.get("id");

  const answer = await base("Email-Opener")
    .select({ maxRecords: 1, filterByFormula: `{id} = '${id}'` })
    .firstPage();

  const imageURL = new URL("/logo.png", request.url);
  if (answer.length === 0) {
    return new ImageResponse(<img src={imageURL.href} />, {
      width: 175,
      height: 119,
    });
  }

  const recordId = answer[0]._rawJson.id;
  
  sendMessage(
    answer[0].fields.slackId,
    `${answer[0].fields.id} was just opened!`
  );
  await base("Email-Opener").update([
    {
      id: recordId,
      fields: {
        Status: "Opened",
      },
    },
  ]);
  return new ImageResponse(<img src={imageURL.href} />, {
    width: 175,
    height: 119,
  });
}
