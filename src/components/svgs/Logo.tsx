import Image from "next/image";

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpeg"
      alt="SHEISAVOICE — Amplifying the Voice of the Unheard"
      width={200}
      height={200}
      className={className}
      priority
    />
  );
}
