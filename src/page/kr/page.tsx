import MainSlider from "@/components/main-slider";

import MapPage from "@/components/page/map-page";
import IntroPage from "@/components/page/intro-page";

export default function Page() {
  return (
    <main className="w-full">
      <div className="relative bg-black">
        <MainSlider />
      </div>
      <div className="w-screen min-h-screen bg-white px-8 py-16" id="section">
        <IntroPage />
      </div>
      <div className="w-screen min-h-screen bg-white px-8 py-16">
        <MapPage />
      </div>
      <div className="w-screen h-screen bg-gray-200 px-8 py-16">
        <h2 className="heading02b mb-8">참여인 또는 컨텐츠 고민</h2>
      </div>
    </main>
  );
}
