import Image from "next/image";

export default function Avatar() {
  return (
    <div className="h-80 w-80 overflow-hidden rounded-full border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-500/20 transition-transform duration-300 hover:scale-105">
      <Image
        src="/avatar.png"
        alt="Wellington"
        width={320}
        height={320}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}