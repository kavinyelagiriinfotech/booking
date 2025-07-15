import React, { useState } from "react";
import "./Bookingpage.css";
// import Layout from './Layout';

function Bookingpage() {
  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [locationFrom, setLocationFrom] = useState("");
  const [roomType, setRoomType] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      arrivalTime,
      rooms,
      adults,
      children,
      locationFrom,
      roomType,
      visitPurpose,
      specialRequests,
    };

    try {
      const response = await fetch("http://localhost:3001/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert("Booking Submitted Successfully");
      } else {
        alert("Failed to submit booking");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Error connecting to server");
    }

    // console.log({
    //   fullName, email, phone, checkIn, checkOut, rooms, adults, children,
    //   specialRequests, locationFrom, roomType, visitPurpose, arrivalTime
    // });
    // alert("Booking Submitted Successfully");
  };

  return (
    // <Layout>
    <div className="bookingpage-container">
      <h2 className="bookingpage-title">Complete Your Booking</h2>
      <form className="bookingpage-form" onSubmit={handleSubmit}>
        <div className="bookingpage-form-group">
          <label>
            Full Name:
            <input
              className="bookingpage-input"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Email:
            <input
              className="bookingpage-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Phone:
            <input
              className="bookingpage-input"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Check-in:
            <input
              className="bookingpage-input"
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Check-out:
            <input
              className="bookingpage-input"
              type="date"
              min={checkIn}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Estimated Arrival Time:
            <input
              className="bookingpage-input"
              type="time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Number of Rooms:
            <input
              className="bookingpage-input"
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Adults:
            <input
              className="bookingpage-input"
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Children:
            <input
              className="bookingpage-input"
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Location From:
            <input
              className="bookingpage-input"
              type="text"
              value={locationFrom}
              onChange={(e) => setLocationFrom(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Preferred Room Type:
            <select
              className="bookingpage-input"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              required
            >
              <option value="">Select a Room Type</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Purpose of Visit:
            <select
              className="bookingpage-input"
              value={visitPurpose}
              onChange={(e) => setVisitPurpose(e.target.value)}
              required
            >
              <option value="">Select Purpose</option>
              <option value="Leisure">Leisure</option>
              <option value="Business">Business</option>
              <option value="Officialtrip">Official Trip</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className="bookingpage-form-group">
          <label>
            Special Requests:
            <textarea
              className="bookingpage-input"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows="3"
            />
          </label>
        </div>

        <button type="submit" className="bookingpage-button">
          Confirm Booking
        </button>
      </form>
    </div>
    // </Layout>
  );
}

export default Bookingpage;
