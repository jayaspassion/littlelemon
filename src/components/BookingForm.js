import React from "react";

export const BookingForm = () => {
  return (
    <section className="booking-section">
      <h1 className="section-heading">Reservations</h1>

      <form className="booking-form">
        <div className="form-group">
          <label htmlFor="res-date">Date</label>
          <input type="date" id="res-date" name="res-date" />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Diners</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            placeholder="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Time</label>
          <select id="res-time" name="res-time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>

        <button type="submit" className="btn--primary">
          Make Your Reservation
        </button>
      </form>
    </section>
  );
};
