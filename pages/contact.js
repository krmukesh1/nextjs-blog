import ContactForm from "../components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Sent me your messages" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;
