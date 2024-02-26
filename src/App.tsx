import { useFetch } from "./hooks/useFetch";
import { z } from "zod";
import { AbsenceContextProvider } from "./context/absenceContext";
import ListAbsence from "./components/listAbsence";
import SortAbsence from "./components/sortAbsence";

const absenceType = ["SICKNESS", "ANNUAL_LEAVE", "MEDICAL"] as const;

const ResponseSchema = z.object({
  id: z.number(),
  startDate: z.string(),
  days: z.number(),
  absenceType: z.enum(absenceType),
  employee: z.object({
    firstName: z.string(),
    lastName: z.string(),
    id: z.string(),
  }),
  approved: z.boolean(),
});

export type ResponseType = z.infer<typeof ResponseSchema>;

const App = () => {
  const { data, isPending } = useFetch<ResponseType[]>(
    "https://front-end-kata.brighthr.workers.dev/api/absences",
  );

  if (isPending) return null;

  const response = z.array(ResponseSchema).safeParse(data);

  if (!response.success) {
    const err = response.error.format();
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <h1 className="font-bol mb-3 max-w-sm text-2xl">
          There is an issue with the API
        </h1>
        <p className="mb-12">
          This should cause an error in the CI and provide developers that a
          breaking change to the API has be commited
        </p>
        <pre className="rounded-md border border-red-100 bg-red-50 p-6 shadow-lg">
          {JSON.stringify(err, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <AbsenceContextProvider initState={response.data}>
      <div className="container min-h-screen grid-cols-2 gap-24 bg-zinc-50 pt-32 lg:grid">
        <section className="relative mb-12">
          <div className="sticky top-12">
            <h1 className="text-4xl font-bold">Bright HR</h1>
            <p>The quick brown fox jumped over the lazy dog</p>
            <SortAbsence />
          </div>
        </section>
        <section>
          <ListAbsence />
          {/* {response.data.map((item) => {
            const { firstName, lastName } = item.employee;

            return (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex flex-grow">
                    <Approval approved={item.approved} />
                  </div>
                  <div className="flex flex-grow items-center justify-end gap-3">
                    <Conflict id={item.id} />
                    <Absence type={item.absenceType} />
                  </div>
                </CardHeader>
                <CardBody>
                  <Details label={`${firstName}\u00A0${lastName}`}>
                    <div>Test</div>
                  </Details>
                </CardBody>
                <CardFooter>
                  <dl className="flex-grow">
                    <dt>Start date:</dt>
                    <dd className="font-semibold">
                      {getStartDate(item.startDate)}
                    </dd>
                  </dl>
                  <dl className="flex-grow">
                    <dt>End date:</dt>
                    <dd className="font-semibold">
                      {getEndDate(item.startDate, item.days)}
                    </dd>
                  </dl>
                </CardFooter>
              </Card>
            );
          })} */}
        </section>
      </div>
    </AbsenceContextProvider>
  );
};

export default App;
