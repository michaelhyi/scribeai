import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <Image src="/logo3v2.png" width={80} height={80} alt="logopic" />
        <div className="font-bold text-3xl mt-4 text-blue-400 mb-4">
          ScribeAI
        </div>
      </div>
    </div>
  );
};

export default Logo;
