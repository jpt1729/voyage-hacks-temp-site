"use client";
import { action } from "./action";

export default function NewsletterForm() {
  return (
    <form action={action}>
      <input type="email" name = 'email' placeholder="Join our newsletter!" className="px-2 py-1 rounded-full mr-1"/>
      <input type="submit" value="Sign up" className="ml-1"/>
    </form>
  );
}
