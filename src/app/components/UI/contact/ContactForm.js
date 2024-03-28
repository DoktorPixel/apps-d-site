"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Form, Input, Button, Layout } from "antd";
import OpenSVG from "public/img/products/open.svg";
import Done from "public/img/home/contact-us/done.svg";

import LoadingOrError from "@/app/components/loading-on-error";
import useHttp from "@/app/helps/use-http";

export function ContactForm({ body, isLoading, isError, error }) {
  const [form] = Form.useForm();
  // const { isSended, errorMessage, onSubmit } = useHttp();
  const [isSended, setIsSended] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const [isSending, setIsSending] = useState(false);
  const onSendRequest = async (values) => {
    setIsSending(true);

    const email = values.email;
    const subject = values.subject;
    const description = `From: ${email} (${values.firstName}) \n\n${values.comment}`;

    const response = await fetch("/api/createRequestServiceDesk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serviceDeskId: "6",
        requestTypeId: "40",
        requestFieldValues: {
          summary: `${subject}`,
          description: `${description}`,
        },
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.createdDate) {
      setIsSending(false);
      setIsSended(true);
    } else {
      setIsSended(false);
      setErrorMessage(
        "Sorry, we couldn't process your request at the moment. Please try again shortly."
      );
    }
  };

  return (
    <Layout>
      <div className="contactUs-page">
        <LoadingOrError isLoading={isLoading} isError={isError} error={error} />
        {body.banner && (
          <div
            className="contactUs-banner"
            style={{
              background: `url(${body.banner.background}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className="contactUs-banner-content">
              <div className="contactUs-left-part">
                {isSended ? <h1>Thank You!</h1> : <h1>{body.banner.title}</h1>}
                <p>{body.banner.description}</p>
              </div>
              <div className="contactUs-right-part">
                <div className="breadcrumb">
                  <Link href="/">Home </Link>{" "}
                  <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
                  <Link href="/contact-us"> Contact Us</Link>
                </div>
                <div className="contactUs-buttons-wrapper">
                  <p>{body.banner.subtitle}</p>
                  <Link href="/products">
                    <button className="btn contactUs-btn">
                      {body.banner["btn-text"]}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {isSended ? (
          <div className="contactUs-success">
            <Image src={Done} alt="Done" />
            <h2>Awesome!</h2>
            <p>The message has been sent.</p>
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
        ) : (
          <div className="contactUs-form">
            {body["contact-info"] && (
              <div className="form-left">
                <div className="contact-wrapper">
                  <h3>Contact Information</h3>
                  <div className="contacts-info">
                    <ul className="contacts-list-info">
                      {body["contact-info"]["contact-info"].map(
                        (item, index) => (
                          <li key={index}>
                            <a href={item["title-link"]}>
                              <Image
                                src={item.icon}
                                alt={`contact icon-${index + 1}`}
                                width={30}
                                height={29}
                              />
                              {item.title}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="form-follow-us">
                  <h3>{body["contact-info"].follow}</h3>
                  <div className="social-media">
                    {body["contact-info"].social.map((item, index) => (
                      <a target="_blank" href={item.link} key={index}>
                        <Image
                          src={item.icon}
                          alt={`social icon ${index + 1}`}
                          width={36}
                          height={36}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="form-right">
              <Form
                className="form-header"
                layout="vertical"
                form={form}
                name="contactUsForm"
                onFinish={onSendRequest}
              >
                <Form.Item
                  name="firstName"
                  label="Full Name"
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
                  <Input placeholder="Full Name" />
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
                  <Input placeholder="info@atlas-bench.com" />
                </Form.Item>
                <Form.Item
                  name="subject"
                  label="Subject"
                  className="contactUs-custom-input"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Subject",
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
                  <Input placeholder="Smart Comments" />
                </Form.Item>
                <Form.Item
                  name="comment"
                  label="Comment"
                  className="contactUs-custom-input comment"
                  // rules={[{ required: true, message: "Please enter your comment" }]}
                >
                  <Input.TextArea rows={6} placeholder="Comment text..." />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="custom-button"
                    disabled={isSending === true}
                  >
                    Contact us
                  </Button>
                  {!isSended && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
