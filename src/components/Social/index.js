import Link from "next/link";

export default function Social({}) {
  return (
    <div className="absolute bottom-1 right-1 flex justify-between gap-5 text-gray-400">
      <p>
        Contact us at {" "}
        <Link className="underline hover:text-[#ff76f1]" href="mailto:team@voyagehacks.com">
          team@voyagehacks.com
        </Link>
      </p>
      •
      <p>
      Follow us at{" "} 
      <Link
        className="hover:text-[#c800ff] underline"
        href="https://instagram.com/voyage_hacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        @voyage_hacks
      </Link>
      </p>
    </div>
  );
}
