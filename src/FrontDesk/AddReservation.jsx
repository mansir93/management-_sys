import React, { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@material-tailwind/react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const AddReservation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [reservation, setReservation] = useState({
    guestName: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    specialRequests: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({
      ...reservation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted reservation data:", reservation);
    toast.success("Reservations Added success ");
    handleClose();
  };

  return (
    <div>
      <Button
        className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-600"
        color="blue"
        onClick={handleOpen}
      >
        Add Reservations{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="max-w-xl min-w-[500px]">
          <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Add Reservation</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="guestName"
                >
                  Guest Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  name="guestName"
                  id="guestName"
                  value={reservation.guestName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="checkInDate"
                >
                  Check-in Date
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="date"
                  name="checkInDate"
                  id="checkInDate"
                  value={reservation.checkInDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="checkOutDate"
                >
                  Check-out Date
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="date"
                  name="checkOutDate"
                  id="checkOutDate"
                  value={reservation.checkOutDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="roomType"
                >
                  Room Type
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  name="roomType"
                  id="roomType"
                  value={reservation.roomType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="specialRequests"
                >
                  Special Requests
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  name="specialRequests"
                  id="specialRequests"
                  value={reservation.specialRequests}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="totalAmount"
                >
                  Total Amount
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  name="totalAmount"
                  id="totalAmount"
                  value={reservation.totalAmount}
                  onChange={handleChange}
                />
              </div>
              <Button
                className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-600"
                type="submit"
              >
                Submit Reservation
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddReservation;
