import { Empty } from "@/components/ui/empty";

export default function NotFound() {
  return (
    <div className="h-[100vh] w-[100vw] bg-white flex justify-center items-center">
      <Empty size="lg" description="404 Error 해당 페이지가 없습니다." />
    </div>
  );
}
