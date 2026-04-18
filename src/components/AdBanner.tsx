/**
 * Ad placeholder — original used Google AdSense. Stubbed for now to keep SSR clean.
 * Wire up real AdSense later by injecting the script in __root.tsx <head>.
 */
interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
  showLabel?: boolean;
  wrapperClassName?: string;
}

const AdBanner = ({ className = "", showLabel = false, wrapperClassName = "" }: AdBannerProps) => {
  return (
    <div className={wrapperClassName}>
      {showLabel && (
        <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
      )}
      <div
        className={`ad-space min-h-[100px] sm:min-h-[250px] rounded-lg ${className}`}
      >
        Ad space
      </div>
    </div>
  );
};

export default AdBanner;
