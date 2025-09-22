import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  KeyboardBackspace as BackIcon,
  PrivacyTip as PrivacyIcon,
  Security as SecurityIcon,
  Cookie as CookieIcon,
  People as PeopleIcon,
  ContactMail as ContactIcon
} from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

// Privacy Policy component
const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PrivacyIcon sx={{ mr: 2, fontSize: '2.5rem' }} /> Privacy Policy
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          This property is hosted by Cue7ven respects your right to privacy when you use our services, 
          visit our website, download our desktop app or mobile apps, or communicate with us. We take 
          all necessary measures to ensure that any personal data you give us is treated in compliance 
          with data protection laws and with this Privacy Notice.
        </Typography>
        <Typography variant="body1">
          We are a company incorporated under the laws of INDIA & VIETNAM, with its registered offices 
          at KOLKATA INDIA, also reachable at <Link href="mailto:contact@cue7ven.com">contact@cue7ven.com</Link>.
        </Typography>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center' }}>
          <SecurityIcon sx={{ mr: 1 }} /> Key Questions and Answers
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Frequently asked questions about our privacy practices
        </Typography>
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">1. What personal data does Our App/website collect through its website and for what purposes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: If you use our services, regardless of whether you are a free or paying user, we will collect Your Personal Data as required to provide our services to you and/or help us improve our services for you.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.1 Use of our website</Typography>
          <Typography variant="body2" paragraph>
            If you visit any domain or subdomain of Ours App/website and do not register for or log into your account, we collect and process Your Personal Data that is necessary to enable your informational use of these domains. We also use functional cookies and other technologies to enable this functional use of our website and to maintain the stability and security of our website.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.2 Use of our mobile apps and desktop app</Typography>
          <Typography variant="body2" paragraph>
            If you download our mobile apps or our desktop app and do not register for or log into your account, we process Your Personal Data to enable your informational use of the respective app and to ensure the stability and the security of the respective app.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.3 Use of our services via third-party services</Typography>
          <Typography variant="body2" paragraph>
            You may be able to access our services and upload User Files via third-party services, such as Dropbox and Google Drive. For this purpose, you do not have to create a User Account with us or provide your login credentials for the third-party service or application.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.4 User Account</Typography>
          <Typography variant="body2" paragraph>
            If you create a Ours App/website account (including for a free trial of our services) via our website, mobile apps, or desktop app, we process your email address and the password you choose at registration.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.5 Ours App/website Pro subscription</Typography>
          <Typography variant="body2" paragraph>
            During registration of your user account or later on, you may provide Your Personal Data as part of your profile if you purchase any of our paid subscriptions (Ours App/website Pro). These types of personal data vary based on the type of account (single or team), the type of subscription, and the payment method you choose.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.6 Email communication, including customer support, newsletters, and other marketing emails</Typography>
          <Typography variant="body2" paragraph>
            When you communicate with us via email, including for customer support, you provide us with your email address and may provide us with your name, contact details, and other personal data, including the content of your email.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.7 Service improvement and error detection</Typography>
          <Typography variant="body2" paragraph>
            For our website and mobile apps, we may process information on your default system language, your device, your usage of our services, and information on the pages of our website which you have visited.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.8 Surveys & user feedback</Typography>
          <Typography variant="body2" paragraph>
            We occasionally conduct voluntary surveys through our website, desktop app, mobile apps, or other methods to collect user feedback.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>1.9 Our services</Typography>
          <Typography variant="body2">
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2"><strong>PDF services:</strong> If you choose to use our PDF services and upload or otherwise provide User Files for this purpose, we process the User Files and metadata.</Typography></li>
              <li><Typography variant="body2"><strong>Signature/eSign:</strong> If you use our eSign tool, we process and store your signature(s) for future use at your convenience.</Typography></li>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">2. How does Ours App/website protect Your Personal Data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: Ensuring the safety and security of our service and Your Personal Data is a priority.
          </Typography>
          <Typography variant="body2" paragraph>
            Ours App/website uses appropriate technical and organizational measures to protect Your Personal Data. Only authorized Ours App/website staff or third-party company staff (i.e. service providers) have access to Your Personal Data.
          </Typography>
          <Typography variant="body2">
            All such staff are required to adhere to our Privacy Notice. Additionally, all third-party employees who have access to Your Personal Data must sign non-disclosure agreements. In addition, Ours App/website has contracts in place with third-party companies that have access to Your Personal Data in order to protect it.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">3. How does Ours App/website use Your Personal Data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: We use Your Personal Data to provide you with high-quality services. Your privacy is our priority. We would not use Your Personal Data for any unlawful purposes.
          </Typography>
          <Typography variant="body2" paragraph>
            We process Your Personal Data for the purposes listed above. In specific cases, Your Personal Data may also be processed for the following purposes:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li><Typography variant="body2">In case we partially or fully sell the company or buy another company in whole or in part.</Typography></li>
            <li><Typography variant="body2">To comply with our legal obligations, including participation in investigations and proceedings conducted by the government or public authorities.</Typography></li>
            <li><Typography variant="body2">In case we have a legal obligation to this effect, we may process Your Personal Data to protect our rights and safety, as well as those of our customers and third parties.</Typography></li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">4. To whom does Ours App/website disclose Your Personal Data, and why?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: We share some of Your Personal Data with others in order to provide you with our services. Don't worry, we do not sell Your Personal Data or give it to spammers.
          </Typography>
          <Typography variant="body2" paragraph>
            Ours App/website may share Your Personal Data with the following categories of recipients as necessary:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li><Typography variant="body2">External services providers (e.g. hosting providers, software and software as a service providers, app development providers, email service, email verification and email analytics providers, providers for error logging and service development, customer support providers, survey and user feedback providers, payment providers, billing service providers, and marketing providers).</Typography></li>
            <li><Typography variant="body2">In the event that we buy or sell our company in whole or in part, data may be transferred to our potential contractual partners.</Typography></li>
            <li><Typography variant="body2">To law enforcement agencies, public authorities, and courts in order to comply with legal obligations to participate in investigations and proceedings conducted by governments or public authorities.</Typography></li>
            <li><Typography variant="body2">To other companies, individuals, or government agencies where it is required to disclose personal data by law or based on legitimate interests to protect our rights or safety as well as those of our customers and third parties.</Typography></li>
          </Box>
          <Typography variant="body2" paragraph>
            Some of the aforementioned providers may process Your Personal Data outside the EU/EEA. For more information on protective measures used to secure data transfers in countries outside the EU/EEA, please see Section 7 of our full policy.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">5. What are my data protection rights and how can I exercise them?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: You have certain rights over Your Personal Data under data protection laws, including, for example, the Swiss Federal Data Protection Act, the California Consumer Privacy Act, or the EU GDPR.
          </Typography>
          <Typography variant="body2" paragraph>
            Depending on the specific circumstances of the case and your place of residence, you may have some or all of the following rights:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li><Typography variant="body2">To withdraw your consent to the processing of Your Personal Data at any time.</Typography></li>
            <li><Typography variant="body2">To access the personal data processed by us and/or request copies of this data.</Typography></li>
            <li><Typography variant="body2">To request the rectification/correction, erasure, or restriction of processing of Your Personal Data.</Typography></li>
            <li><Typography variant="body2">To request Your Personal Data, which you have provided to us, in a structured, commonly used, and machine-readable format.</Typography></li>
            <li><Typography variant="body2">To object to the processing of Your Personal Data on grounds relating to your particular situation.</Typography></li>
            <li><Typography variant="body2">To opt-out of the sale of Your Personal Data to third parties.</Typography></li>
          </Box>
          <Typography variant="body2" paragraph>
            In general, exercising these rights requires you to be able to prove the account ownership. In order to assert these rights, please contact us at Ours App/website Kolkata INDIA or via email at <Link href="mailto:contact@cue7ven.com">contact@cue7ven.com</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">6. How and for how long do we store Your Personal Data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: We keep Your Personal Data and the User Files you upload only as long as they are needed for the provision of our services or as required by law.
          </Typography>
          <Typography variant="body2" paragraph>
            We will only retain Your Personal Data and User Files you upload for as long as necessary to fulfil the purpose for which it was collected or to comply with legal requirements. To help us, we apply criteria to determine the appropriate periods for retaining Your Personal Data depending on its purpose, such as account maintenance, facilitating client relationship management, and responding to legal claims or requests from authorities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <CookieIcon sx={{ mr: 1 }} /> 7. COOKIES - How and why does Ours App/website use them?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: We may use cookies for functional purposes without your consent, or for analytical or advertising-related purposes, if you consent to this.
          </Typography>
          <Typography variant="body2" paragraph>
            A cookie is a small piece of data placed on your computer's hard drive that permits identifying a specific device or browser. We may place our own cookies (first-party cookies) or third-party services integrated on our website may place cookies on your device (third-party cookies).
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>7.1 Cookies for functional purposes</Typography>
          <Typography variant="body2" paragraph>
            We use cookies or similar technologies that are technically necessary to operate our website or provide its basic functions, such as our payments or keeping you logged in (if you want that).
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>7.2 Cookies for analytical purposes</Typography>
          <Typography variant="body2" paragraph>
            We use cookies or similar technologies to better understand your use of our website. For example, they help us track the number of visitors to our website and see how users move around our website.
          </Typography>
          
          <Typography variant="subtitle2" gutterBottom>7.3 Cookies for personalization and advertising-related purposes</Typography>
          <Typography variant="body2">
            We use cookies or similar technologies to capture your visit to our website, the pages you visit, and the links you follow. We may use this information based on your consent and will process it to evaluate your preferences to make our website and the advertisements we display more relevant for you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <PeopleIcon sx={{ mr: 1 }} /> 8. Does Ours App/website knowingly handle the data of minors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Ours App/website does not knowingly collect or retain the data of minors under the age of sixteen. Such persons are not permitted to use this website except where enabled by a school that has contracted with us, in which case the school is the data controller and is responsible for the respective data processing affecting minors.
          </Typography>
          <Typography variant="body2">
            If you discover that a minor has been using our website, please let us know via the contact information in Section 11 and we will delete their information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">9. Can Ours App/website change the terms of this Privacy Notice?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: Changes to this Privacy Notice may occur and will be made available to you.
          </Typography>
          <Typography variant="body2">
            Ours App/website may occasionally make changes and corrections to this Privacy Notice. Please check this Privacy Notice regularly to see the changes and how they may affect you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactIcon sx={{ mr: 1 }} /> 10. Contact us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            In brief: Let us know if you have any questions.
          </Typography>
          <Typography variant="body2" paragraph>
            If you have any requests concerning our processing of Your Personal Data or any queries with regard to these practices, please contact Ours App/website at the contact data given above, including via email at <Link href="mailto:contact@cue7ven.com">contact@cue7ven.com</Link>.
          </Typography>
          <Typography variant="body2">
            You can also contact our data protection officer at any time at our postal address or the following email address: <Link href="mailto:contact@cue7ven.com">contact@cue7ven.com</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
        <Typography variant="body2" align="center">
          For the complete and detailed version of our Privacy Policy, please contact us at <Link href="mailto:contact@cue7ven.com">contact@cue7ven.com</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;