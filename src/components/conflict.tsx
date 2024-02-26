import { memo } from "react";
import { useFetch } from "../hooks/useFetch";
import { z } from "zod";

const ResponseSchema = z.object({
  conflicts: z.boolean(),
});

type ResponseType = z.infer<typeof ResponseSchema>;

export const Conflict = memo(({ id }: { id: number }) => {
  const { data, isPending } = useFetch<ResponseType>(
    `https://front-end-kata.brighthr.workers.dev/api/conflict/${String(id)}`,
  );

  if (isPending) return null;

  const response = ResponseSchema.safeParse(data);

  if (!response.success) {
    const err = response.error.format();
    return <div>{JSON.stringify(err, null, 2)}</div>;
  }

  if (!response.data.conflicts) return null;

  return (
    <div className="rounded-full bg-zinc-600 px-4 py-0.5 text-xs text-white">
      Conflicts
    </div>
  );
});
