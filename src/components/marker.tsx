import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Marker({ onClick }: { onClick?: () => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="w-[30px] h-[30px] bg-blue-500 rounded-[50%_50%_50%_0] -rotate-45deg relative cursor-pointer flex"
          onClick={onClick}
        >
          <div className="w-5.5 h-5.5 bg-white rounded-full absolute left-1/2 top-1/2 -translate-1/2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
            fill="none"
            className="rotate-45deg absolute left-1/2 top-1/2 -translate-1/2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 19C7 9.61113 14.6111 2 24 2C33.3889 2 41 9.61113 41 19C41 26.2088 36.8808 32.9143 33.0535 37.6346C31.1092 40.0326 29.1697 42.0039 27.717 43.3759C26.9894 44.0631 26.3807 44.6029 25.9503 44.9739C25.735 45.1595 25.564 45.303 25.4448 45.4019C25.3852 45.4513 25.3385 45.4895 25.3056 45.5163L25.2668 45.5478L25.2554 45.5569L25.2517 45.5599L25.2504 45.561C25.2499 45.5614 25.2494 45.5617 24 44C22.7506 45.5617 22.7501 45.5614 22.7496 45.561L22.7446 45.5569L22.7332 45.5478L22.6944 45.5163C22.6615 45.4895 22.6148 45.4513 22.5552 45.4019C22.436 45.303 22.265 45.1595 22.0497 44.9739C21.6193 44.6029 21.0106 44.0631 20.283 43.3759C18.8303 42.0039 16.8908 40.0326 14.9465 37.6346C11.1192 32.9143 7 26.2088 7 19ZM24 44L22.7506 45.5617C23.481 46.1461 24.519 46.1461 25.2494 45.5617L24 44ZM24 41.362C24.2856 41.1056 24.6119 40.8065 24.9705 40.4678C26.3303 39.1836 28.1408 37.3424 29.9465 35.1154C33.6192 30.5857 37 24.7912 37 19C37 11.8203 31.1797 6 24 6C16.8203 6 11 11.8203 11 19C11 24.7912 14.3808 30.5857 18.0535 35.1154C19.8592 37.3424 21.6697 39.1836 23.0295 40.4678C23.3881 40.8065 23.7144 41.1056 24 41.362Z"
              fill="#111111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 19C16 14.5817 19.5817 11 24 11C28.4183 11 32 14.5817 32 19C32 23.4183 28.4183 27 24 27C19.5817 27 16 23.4183 16 19ZM24 15C21.7909 15 20 16.7909 20 19C20 21.2091 21.7909 23 24 23C26.2091 23 28 21.2091 28 19C28 16.7909 26.2091 15 24 15Z"
              fill="#111111"
            />
          </svg>

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75" />
        </button>
      </DialogTrigger>
      <DialogContent className="min-h-[50dvh] w-full max-w-3/4 bg-white p-8 sm:min-w-3/4">
        <DialogTitle className="heading03B">테스트</DialogTitle>
        <DialogDescription className="sr-only">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
