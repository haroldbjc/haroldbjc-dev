import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BugIcon, ShellIcon } from "lucide-react";

const BrandIcon = () => (
  <TooltipProvider delayDuration={2000}>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="/"
          className="font-italic mr-2 flex h-full flex-row items-center text-sm font-bold"
        >
          <ShellIcon className="mr-1 h-6 w-6" />
          harold
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          <span className="mx-1 mb-1 inline-block align-middle">
            <BugIcon className="h-4 w-4" />
          </span>
          perhaps you found a bug?
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default BrandIcon;
