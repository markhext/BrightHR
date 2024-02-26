import { CheckCircleIcon, UserRoundMinusIcon } from "lucide-react";
import type { FC } from "react";

export const Approval: FC<{ approved: boolean }> = ({ approved }) => {
  if (approved) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <CheckCircleIcon className="h-4 w-4 text-lime-600" />
        Approved
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <UserRoundMinusIcon className="h-4 w-4 text-amber-500" />
      Pending
    </div>
  );
};
