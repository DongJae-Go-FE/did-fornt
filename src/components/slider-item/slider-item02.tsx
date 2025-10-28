export default function SliderItem02() {
  return (
    <div className="w-full h-full bg-gray-900 overflow-hidden relative">
      <div
        className="w-full h-full animate-pan-zoom bg-cover bg-left-bottom"
        style={{
          backgroundImage: "url('/main/main02.jpeg')",
        }}
      />
      <div className="text-white heading03b absolute top-[30dvh] z-40 pl-8 flex flex-col gap-y-1 right-[5dvw]">
        <div className="h-[clamp(36px,6dvw,60px)]">
          <p
            className="text-[clamp(36px,6dvw,60px)] animate-bottomUp opacity-0"
            style={{ animationDelay: "1.2s" }}
          >
            용기를 내어라.
          </p>
        </div>
        <div className="h-[clamp(36px,6dvw,60px)]">
          <p
            className="text-[clamp(36px,6dvw,60px)] animate-bottomUp opacity-0"
            style={{ animationDelay: "1.8s" }}
          >
            내가 세상을 이겼다.
          </p>
        </div>
        <div className="h-[clamp(24px,3dvw,36px)]">
          <p
            className="text-[clamp(24px,3dvw,36px)] animate-bottomUp opacity-0"
            style={{ animationDelay: "2.3s" }}
          >
            (요한 16,33)
          </p>
        </div>
      </div>
      <div className="bg-backdrop animate-fadeIn2 opacity-0" />
    </div>
  );
}
