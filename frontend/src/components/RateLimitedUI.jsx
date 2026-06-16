import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-base-content/10 bg-base-100/70 backdrop-blur-xl shadow-lg">
        
        <div className="flex flex-col md:flex-row items-center gap-6 p-8">
          
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-md">
            <ZapIcon className="size-7 text-primary-content" />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-base-content">
              Rate Limit Reached
            </h3>

            <p className="mt-2 text-base-content/70">
              You've made too many requests in a short period.
            </p>

            <p className="text-sm text-base-content/50">
              Please wait a moment and try again.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RateLimitedUI;