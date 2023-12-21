import React from "react";
import  AddReservation  from "./AddReservation";

import { Card, Input, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Reservation ID",
  "Guest Name",
  "Check-in Date",
  "Check-out Date",
  "Room Type",
  "Special Requests",
  "Total Amount",
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
  {
    reservationId: 102,
    guestName: "Another Guest",
    checkInDate: "2023-11-20",
    checkOutDate: "2023-11-25",
    roomType: "Standard",
    specialRequests: "None",
    totalAmount: "$600",
  },
  {
    reservationId: 103,
    guestName: "Guest Three",
    checkInDate: "2023-12-01",
    checkOutDate: "2023-12-05",
    roomType: "Suite",
    specialRequests: "Late check-out",
    totalAmount: "$1200",
  },
  {
    reservationId: 104,
    guestName: "Guest Four",
    checkInDate: "2023-12-10",
    checkOutDate: "2023-12-15",
    roomType: "Double",
    specialRequests: "Extra pillows",
    totalAmount: "$950",
  },
  {
    reservationId: 105,
    guestName: "Guest Five",
    checkInDate: "2023-12-20",
    checkOutDate: "2023-12-25",
    roomType: "King",
    specialRequests: "Ocean view",
    totalAmount: "$1100",
  },
  {
    reservationId: 106,
    guestName: "Guest Six",
    checkInDate: "2023-12-25",
    checkOutDate: "2023-12-30",
    roomType: "Standard",
    specialRequests: "Early check-in",
    totalAmount: "$750",
  },
  {
    reservationId: 107,
    guestName: "Guest Seven",
    checkInDate: "2024-01-05",
    checkOutDate: "2024-01-10",
    roomType: "Double",
    specialRequests: "Late check-out",
    totalAmount: "$900",
  },
  {
    reservationId: 108,
    guestName: "Guest Eight",
    checkInDate: "2024-01-10",
    checkOutDate: "2024-01-15",
    roomType: "Deluxe",
    specialRequests: "None",
    totalAmount: "$1000",
  },
  {
    reservationId: 109,
    guestName: "Guest Nine",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-01-20",
    roomType: "King",
    specialRequests: "Extra towels",
    totalAmount: "$950",
  },
  {
    reservationId: 110,
    guestName: "Guest Ten",
    checkInDate: "2024-01-20",
    checkOutDate: "2024-01-25",
    roomType: "Suite",
    specialRequests: "Late check-in",
    totalAmount: "$1200",
  },
  // Add more reservation data as needed
];

const Reservations = () => {
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
export default Reservations;
