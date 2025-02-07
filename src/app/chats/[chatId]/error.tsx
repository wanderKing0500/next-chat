'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    router.push('/chats');
  }, [error, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" >
      <h2 className="text-xl font-bold mb-4">Please wait!</h2>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => reset()}>...reloading data</button>
    </div>
  );
}