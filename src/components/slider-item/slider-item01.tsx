export default function SliderItem01() {
  return (
    <div className="main-section bg-main relative p-0 overflow-hidden">
      <img
        src="/main/main01.png"
        alt="did 메인이미지 첫번째 성당"
        className="absolute z-10 bottom-0 right-0 max-w-[60dvw] max-h-180 object-cover"
      />
      <div className="text-white body02r absolute top-[30dvh] z-40 pl-8 flex flex-col gap-y-1">
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
      <div className="w-[200vw] h-[200vh] bg-main z-30 absolute animate-fade-out-up-left rounded-full -right-[25vw] -bottom-[25vw] max-[1080px]:-bottom-[50vw] " />
      <h2
        className="absolute right-0 pr-8 z-40 bottom-[5dvw] heading02b text-white text-[clamp(30px,7dvw,130px)] animate-fadeIn opacity-0 max-[1079px]:hidden"
        style={{ animationDelay: "3s" }}
      >
        DAYS IN DIOCESE
      </h2>
    </div>
  );
}
