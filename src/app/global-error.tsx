"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  console.log(error.message);

  return (
    <html>
      <body>
        <h2>Something went wrong! -global error-</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
