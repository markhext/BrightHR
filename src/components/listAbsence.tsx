import { Card, CardBody, CardFooter, CardHeader } from "../composables/card";
import { Details } from "../composables/details";
import { useAbsenceData } from "../hooks/useAbsenceData";
import { getEndDate, getStartDate } from "../utils/getDate";
import { Absence } from "./absence";
import { Approval } from "./approval";
import { Conflict } from "./conflict";
import EmployeeAbsenceList from "./employeeAbsenceList";

const ListAbsence = () => {
  const { state } = useAbsenceData();

  return (
    <div className="space-y-4 pb-12">
      {state.map((item) => {
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
                <EmployeeAbsenceList id={item.employee.id} />
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
      })}
    </div>
  );
};

export default ListAbsence;
