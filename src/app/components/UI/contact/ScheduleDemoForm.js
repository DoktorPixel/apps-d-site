"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Form, Button, Select, Input } from "antd";

import OpenSVG from "public/img/products/open.svg";
import Done from "public/img/home/contact-us/done.svg";
import step1 from "public/img/home/schedule-demo/step1.svg";
import step2 from "public/img/home/schedule-demo/step2.svg";
import step3 from "public/img/home/schedule-demo/step3.svg";
import Arrow from "public/img/home/schedule-demo/Arrow1.svg";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { timezones, timeSlots } from "@/app/helps/helpers";
import TimeSlotComponent from "@/app/components/UI/contact/TimeSlot";
import useHttp from "@/app/helps/use-http";

export function ScheduleDemoForm() {
  const [date, setDate] = React.useState(dayjs());
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [form] = Form.useForm();
  const [selectedTime, setSelectedTime] = useState(null);
  const { isSended, errorMessage, onSubmit } = useHttp();
  const [isSending, setIsSending] = useState(false);
  const tomorrow = dayjs().add(1, "day");

  const handleNextStep = () => {
    setCurrentStep((state) => state + 1);
  };

  const formattedDate = date.format("dddd, MMMM D, YYYY");
  const formatSelectedDate = (date) => {
    return dayjs(date).format("dddd, MMMM D, YYYY");
  };

  const timezoneOptions = timezones.map((timezone) => (
    <Select.Option key={timezone.value} value={timezone.value}>
      {timezone.label}
    </Select.Option>
  ));

  const handleDateChange = (newValue) => {
    const formattedDate = formatSelectedDate(newValue);
    setDate(newValue);
    form.setFieldsValue({ bookTheDate: formattedDate });
  };

  const onFinishStep1 = async (values) => {
    try {
      const response = await form.validateFields();
      const isError = response.errorFields && response.errorFields.length > 0;

      if (!isError) {
        setFormValues(response);
        handleNextStep();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishStep2 = async (values) => {
    try {
      const response = await form.validateFields();
      const isError = response.errorFields && response.errorFields.length > 0;
      if (!isError) {
        sendData({
          data: {
            ...formValues,
            ...response,
          },
        });
        setIsSending(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendData = async ({ data }) => {
    // console.log('sendData', {data})
    const { firstName, lastName, email, bookTheDate, bookTheTime, timeSlot } =
      data;

    const contactData = {
      lead_id: "lead_Fq4iTJslWAalk80KR8CapJulteLWyG5YnpofSFqEuOE",
      name: firstName + ` ` + lastName,
      emails: [{ email: email, type: "office" }],
    };
    await onSubmit(contactData, "contact");

    const requestData = {
      lead_id: "lead_Fq4iTJslWAalk80KR8CapJulteLWyG5YnpofSFqEuOE",
      created_by_name: firstName + ` ` + lastName,
      date_created: new Date(),
      subject: "Schedule a Product Demo Request from AppsDelivered",
      sender: `${firstName} <${email}>`,
      to: ["info@atlas-bench.com"],
      status: "inbox",
      body_text: `Message from: ${firstName} ${lastName} ${email}, scheduled time: date ${bookTheDate}, time zone ${bookTheTime}, time ${timeSlot}`,
    };
    const res = await onSubmit(requestData, "email");
    // console.log({res})
    if (res) {
      setCurrentStep(3);
    }
  };

  return (
    <div>
      <div className="schedule-demo-wrapper">
        <div className="schedule-demo-banner">
          <div className="schedule-demo-banner-content">
            <div className="schedule-demo-left-part">
              {currentStep === 1 && (
                <div>
                  <h1>Schedule a Product Demo</h1>
                  <p>
                    Book a time to get a live product walk through showing how
                    use product features.
                  </p>
                  <p className="booking-duration-mobile">
                    Booking duration: 30 minutes
                  </p>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h1>Confirm Booking</h1>
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="step-back-btn"
                  >
                    <Image src={Arrow} alt="Arrow" /> Choose a different time
                  </button>
                  <p className="booking-duration-mobile">
                    Booking duration: 30 minutes
                  </p>
                </div>
              )}
              {currentStep === 3 && <h1>Thank You!</h1>}
            </div>

            {currentStep === 1 && (
              <div className="schedule-demo-right-part">
                <div className="breadcrumb">
                  <Link href="/">Home </Link>{" "}
                  <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
                  <Link href="/schedule-demo"> Schedule Demo</Link>
                </div>
                <p>Booking duration: 30 minutes</p>
              </div>
            )}
            {currentStep === 2 && (
              <div className="schedule-demo-right-part">
                <div className="breadcrumb">
                  <Link href="/">Home </Link>{" "}
                  <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
                  <Link href="/schedule-demo"> Schedule Demo</Link>{" "}
                  <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
                  <p>Confirm Booking</p>
                </div>
                <p>Booking duration: 30 minutes</p>
              </div>
            )}
            {currentStep === 3 && (
              <div className="schedule-demo-right-part">
                <div className="breadcrumb">
                  <Link href="/">Home </Link>{" "}
                  <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
                  <Link href="/schedule-demo"> Schedule Demo</Link>{" "}
                  <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
                  <p>Confirm Booking</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="schedule-demo-page">
          {currentStep === 1 && (
            <div className="step1-wrapper">
              <div className="steps-img">
                <Image src={step1} alt="step1" width={426} height={58} />
              </div>
              <div>
                <Form
                  className="timetable-wrapper"
                  name="step1"
                  form={form}
                  onFinish={onFinishStep1}
                >
                  <div className="cards-form-calendar">
                    <Form.Item name="bookTheDate">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                          value={date}
                          onChange={handleDateChange}
                          dayOfWeekFormatter={(day) => `${day}.`}
                          minDate={tomorrow}
                        />
                      </LocalizationProvider>
                      <p style={{ margin: "0", color: "gray", textAlign: "center"}}>
                        *Please select a date from tomorrow onwards.
                      </p>
                    </Form.Item>
                  </div>
                  <div className="cards-form-time">
                    <div className="timezone">
                      <Form.Item
                        name="bookTheTime"
                        label="Book the time"
                        rules={[
                          {
                            required: true,
                            message: "Please select a timezone",
                          },
                        ]}
                      >
                        <Select>{timezoneOptions}</Select>
                      </Form.Item>
                    </div>
                    <div className="time-piker">
                      <Form.Item
                        name="timeSlot"
                        rules={[
                          {
                            required: true,
                            message: "Please select a time slot",
                          },
                        ]}
                      >
                        <TimeSlotComponent
                          timeSlots={timeSlots}
                          selectedTime={selectedTime}
                          setSelectedTime={setSelectedTime}
                        />
                      </Form.Item>
                    </div>
                    <Button
                      type="button"
                      onClick={onFinishStep1}
                      className="custom-button"
                    >
                      Next step
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="steps-img">
                <Image src={step2} alt="step2" width={426} height={58} />
              </div>
              <div className="cards-form">
                <div className="your-chosen-time">
                  <p>{formattedDate}</p>
                  <p>{formValues.bookTheTime}</p>
                  <p>{formValues.timeSlot}</p>
                </div>
                <Form
                  className="form-header"
                  layout="vertical"
                  form={form}
                  name="step2"
                  onFinish={onFinishStep2}
                >
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    className="contactUs-custom-input"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your First Name",
                        validator: async (_, value) => {
                          const trimmedValue = value.trim();
                          if (trimmedValue === "") {
                            return Promise.reject("First Name cannot be empty");
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    className="contactUs-custom-input"
                    rules={[{ message: "Please enter your Last Name" }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    className="contactUs-custom-input"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Invalid email format" },
                    ]}
                  >
                    <Input placeholder="nameemail@someting.com" />
                  </Form.Item>
                  <Button
                    type="button"
                    onClick={onFinishStep2}
                    className="custom-button"
                    disabled={isSending === true}
                  >
                    Contact us
                  </Button>
                  {!isSended && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                  <p className="recaptcha">
                    This form is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>
                </Form>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div className="steps-img">
                <Image src={step3} alt="step3" width={426} height={58} />
              </div>
              <div className="contactUs-success">
                <Image src={Done} alt="Done" />
                <h2>All Done!</h2>
                <p>The booking has been confirmed.</p>
                <div className="success-box-wrapper">
                  <Link href="/">
                    <button>
                      Back to Home <span className="mobile-none">page</span>
                    </button>
                  </Link>
                  <Link href="/blog">
                    <button>Check our Blog</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
