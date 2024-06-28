"use server";
import Airtable from "airtable";

let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

export async function collectEmail(prevState, formData) {
  const email = formData.get("email");

  if (
    !email ||
    !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email
    )
  )
    return {
      status: "error",
      message: "Invalid email",
    };

  base("Emails").create(
    [
      {
        fields: {
          email: email,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return {
          status: "error",
          message: err,
        };
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
  return {
    status: "success",
    message: "We will let you know about any updates!",
  };
}
