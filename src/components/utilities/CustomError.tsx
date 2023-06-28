import Head from "next/head";
import Image from "next/image";

export function CustomError({code, message}: {
    code: number;
    message: string;
}) {
  return (
    <div className="w-full min-h-[inherit] flex flex-col justify-center items-center">
      <Head>
        <title>Lando | {code} - {message}</title>
      </Head>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-center items-center gap-5">
          <div>
            <Image src="/Emblem-1.svg" alt="Lando Logo" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-6xl font-bold text-bittersweet">{code}</h1>
            <div className="border border-black w-[50px]" />
            <span className="text-lg text-black">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
