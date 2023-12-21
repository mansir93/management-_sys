import React from "react";
import AddReservation from "./AddReservation";

import { Card, Input, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = [

  "No.",
  "Guest Name",
  "Contact Information",
  "RSVP Status",
  "Notes",
  "",
];

const TABLE_ROWS = [
  {
    reservationId: 101,
    guestName: "Your Name",
    checkInDate: "2023-11-15",
    checkOutDate: "2023-11-20",
    roomType: "Deluxe",
    specialRequests: "Early check-in",
    totalAmount: "$850",
  },

  // Add more reservation data as needed
];

const Guest = () => {
  return (
    <Card className="h-full w-full">
      <div className="p-4 ">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Reservations list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Reservations
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <AddReservation />
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-4 md:flex-row py-4">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
      {/* </CardHeader> */}
      <div className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>{row.reservationId}</td>
                  <td className={classes}>{row.guestName}</td>
                  <td className={classes}>{row.checkInDate}</td>
                  <td className={classes}>{row.checkOutDate}</td>
                  <td className={classes}>{row.roomType}</td>{" "}
                  <td className={classes}>{row.specialRequests}</td>
                  <td className={classes}>{row.totalAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Guest;
