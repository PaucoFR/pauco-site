export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#2D6A4A] bg-[#D6F0DF] px-3 py-1.5 rounded-full">
      <span className="w-[5px] h-[5px] rounded-full bg-[#6DBF85] animate-blink" />
      {children}
    </span>
  );
}
