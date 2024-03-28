const TimeSlotComponent = ({ timeSlots, onChange, selectedTime, setSelectedTime }) => {
    return (
        <div className="time-slot-container">
            {timeSlots.map((slot, index) => (
                <button
                    type="button"
                    key={index}
                    className={`time-slot-button ${selectedTime === slot.timeValue ? "active-button" : ""}`}
                    onClick={() => {
                        setSelectedTime(slot.timeValue);
                        onChange(slot.timeValue);
                    }}
                >
                    {slot.timeValue}
                </button>
            ))}
        </div>
    );
};

export default TimeSlotComponent;
