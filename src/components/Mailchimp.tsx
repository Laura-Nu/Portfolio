"use client";

import { useState } from "react";
import { Button, Column, Row, Input, Textarea, Heading, Text } from "@once-ui-system/core";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCopy } from "react-icons/fa";
import { person } from "@/resources";
import toast from "react-hot-toast";

export const Mailchimp: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied!`);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="xl"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Heading variant="heading-strong-xl" marginBottom="l" align="center">
        Connect With Me
      </Heading>
      <Text align="center" marginBottom="xl" size="l">
        Have a project in mind or a question? Reach out and let's turn your ideas into reality.
      </Text>

      <Row fillWidth gap="48" s={{ direction: ["column", "row"] }}>
        {/* Columna izquierda: datos de contacto */}
        <Column gap="20" flex={1}>
          <Row vertical="center" gap="12">
            <FaEnvelope />
            <Text>{person.email}</Text>
            <Button
              size="s"
              onClick={() => handleCopy(person.email, "Email")}
              style={{ padding: "4px 8px" }}
            >
              <FaRegCopy />
            </Button>
          </Row>
          {person.phone && (
            <Row vertical="center" gap="12">
              <FaPhone />
              <Text>{person.phone}</Text>
              <Button
                size="s"
                onClick={() => handleCopy(person.phone!, "Phone number")}
                style={{ padding: "4px 8px" }}
              >
                <FaRegCopy />
              </Button>
            </Row>
          )}
          <Row vertical="center" gap="12">
            <FaMapMarkerAlt />
            <Text>{person.location}</Text>
          </Row>
        </Column>

        {/* Columna derecha: formulario */}
        <Column flex={1}>
          <form onSubmit={handleSubmit}>
            <Column gap="16">
              <Input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <Input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Please drop your short message..."
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
              />
              <Button type="submit" size="l" fillWidth>
                Send Message
              </Button>
            </Column>
          </form>
        </Column>
      </Row>
    </Column>
  );
};

export default Mailchimp;
