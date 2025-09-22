import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
  Divider,
  Chip
} from '@mui/material';
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  KeyboardBackspace as BackIcon,
  Gavel as GavelIcon,
  Policy as PolicyIcon,
  Payment as PaymentIcon,
  Language as LanguageIcon,
  Business as BusinessIcon
} from '@mui/icons-material';

// Terms & Conditions component
const TermsAndConditions = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GavelIcon sx={{ mr: 2, fontSize: '2.5rem' }} /> Terms & Conditions
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" paragraph>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          These Terms of Use (the "Terms") is the legal agreement between you (the "User" or "you") and CUE7VEN Ltd. ("CUE7VEN", "us" or "our" or "we" or "Company") for your use of our website available at www.cue7ven.com (the "Site").
        </Typography>
        <Typography variant="body1" paragraph>
          BY ACCESSING AND/OR USING THE SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ AND THAT YOU AGREE TO BE BOUND BY THESE TERMS INCLUDING THE TERMS OF OUR PRIVACY POLICY (available at: privacy-policy).
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          IF YOU DO NOT AGREE TO THESE TERMS, DO NOT CONNECT TO, ACCESS OR USE THE SITE IN ANY MANNER WHATSOEVER.
        </Typography>
      </Paper>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Acceptance of Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            The Site is available only to individuals who:
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 2 }}>
            <li><Typography variant="body2">are at least thirteen (13) years old;</Typography></li>
            <li><Typography variant="body2">possess the legal authority to enter into these Terms and to form a binding agreement under any applicable law.</Typography></li>
          </Box>
          <Typography variant="body2" paragraph>
            THE SITE: The Site provides you with information regarding CUE7VEN, including without limitation CUE7VEN products and services, and any other content available therein such as data, materials, contact information, designs and graphic user interface (collectively, the "Content"). In addition, the Site provides you the ability to contact us via the contact form (the "Contact Form").
          </Typography>
          <Typography variant="body2" paragraph>
            TO THE EXTENT LEGALLY PERMISSIBLE ALL RIGHTS IN AND TO THE CONTENT AVAILABLE ON THE SITE ARE RESERVED TO CUE7VEN. TO THE EXTENT LEGALLY PERMISSIBLE, THE SITE AND THE CONTENT AVAILABLE THEREIN ARE PROVIDED ON AN "AS IS" BASIS. CUE7VEN WILL NOT BE LIABLE FOR ANY DAMAGES OR LOSS INCURRED BY YOU OR ANY OTHER PERSON AS A RESULT OF OR IN CONNECTION WITH YOUR USE OF THE SITE AND/OR THE CONTENT AVAILABLE THEREIN.
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            YOUR USE OF THE SITE, AND/OR THE CONTENT AVAILABLE THEREIN IS ENTIRELY AT YOUR OWN RISK.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Contact Form</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            In order to contact us using the Site, you will need to fill out and complete the Contact Form available therein. The Contact Form requires the User's full name and e-mail, phone number and Messages.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Restrictions on Use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            There are certain conducts which are strictly prohibited on the Site. Please read the following restrictions carefully. Your failure to comply with the provisions set forth may result herein (at CUE7VEN sole discretion) in the termination of your access to the Site and may also expose you to civil and/or criminal liability.
          </Typography>
          <Typography variant="body2" paragraph>
            Unless otherwise explicitly permitted under these Terms or in writing by CUE7VEN, you may not (and you may not permit anyone to):
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li><Typography variant="body2">use the Site and/or the Content for any illegal, immoral, unlawful and/or unauthorized purposes</Typography></li>
            <li><Typography variant="body2">use the Site and/or Content for non-personal or commercial purposes</Typography></li>
            <li><Typography variant="body2">remove or disassociate, from the Content and/or the Site any restrictions and signs indicating proprietary rights of CUE7VEN or its licensors</Typography></li>
            <li><Typography variant="body2">interfere with or violate Users' rights to privacy and other rights, or harvest or collect personally identifiable information about Users without their express consent</Typography></li>
            <li><Typography variant="body2">interfere with or disrupt the operation of the Site or the servers or networks that host the Site</Typography></li>
            <li><Typography variant="body2">falsely state or otherwise misrepresent your affiliation with any person or entity</Typography></li>
            <li><Typography variant="body2">take any action that imposes, or may impose, an unreasonable or disproportionately large load on our platform infrastructure</Typography></li>
            <li><Typography variant="body2">bypass any measures we may use to prevent or restrict access to the Site</Typography></li>
            <li><Typography variant="body2">copy, modify, alter, adapt, make available, translate, port, reverse engineer, decompile, or disassemble any portion of the Content</Typography></li>
            <li><Typography variant="body2">create a browser or border environment around CUE7VEN Content (no frames or inline linking is allowed)</Typography></li>
            <li><Typography variant="body2">sell, license, or exploit for any commercial purposes any use of or access to the Site and/or Content</Typography></li>
            <li><Typography variant="body2">frame or mirror any part of the Site without CUE7VEN's prior express written authorization</Typography></li>
            <li><Typography variant="body2">create a database by systematically downloading and storing all or any of the Content from the Site</Typography></li>
            <li><Typography variant="body2">transmit or otherwise make available in connection with the Site any virus, worm, Trojan Horse, time bomb, web bug, spyware, or any other computer code, file, or program that may or is intended to damage or hijack the operation of any hardware, software, or telecommunications equipment</Typography></li>
            <li><Typography variant="body2">use the Site for any purpose for which the Site is not intended infringe and/or violate any of the Terms.</Typography></li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Intellectual Property</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            You acknowledge and agree that the Site, including any revisions, corrections, modifications, enhancements and/or upgrades thereto, accompanying materials, and any copies you are permitted to make under these Terms are owned by the Company or its licensors, and are protected under copyright laws and treaties.
          </Typography>
          <Typography variant="body2" paragraph>
            You further acknowledge and agree that all right, title, and interest in and to the Site, including associated intellectual property rights ("Intellectual Property") (including, without limitation, any patents (registered or pending), copyrights, trade secrets, designs or trademarks), evidenced by or embodied in and/or attached or connected or related to the Site, are and shall remain owned solely by the Company and/or its licensors.
          </Typography>
          <Typography variant="body2" paragraph>
            These Terms does not convey to you any interest in or to the Site, but only a limited, revocable right of use in accordance with these Terms. Nothing in these Terms constitutes a waiver of our intellectual property rights under any law.
          </Typography>
          <Typography variant="body2" paragraph>
            To the extent you provide any feedbacks to CUE7VEN ("Feedback"), CUE7VEN shall have an exclusive, royalty-free, fully paid up, worldwide, perpetual and irrevocable license to incorporate the Feedback into any CUE7VEN current or future products, technologies or services and use same for any purpose all without further compensation to you and without your approval.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Trademarks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            "CUE7VEN" CUE7VEN®, CUE7VEN's marks and logos and all other proprietary identifiers used by the Company ("Company Trademarks") are all trademarks and/or trade names of the Company, whether or not registered. All other trademarks, service marks, trade names and logos which may appear on the Site belong to their respective owners ("Third Party Marks"). No right, license, or interest to the Company Trademarks and the Third Party Marks is granted hereunder, and you agree that no such right, license, or interest may be asserted by you with respect thereto and therefore you will avoid using any of those marks, except as permitted herein.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Changes to the Site and/or Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            We may, at our sole discretion, change, modify, add to or delete any of the terms and conditions of these Terms, and/or the Content and/or the Site at any time, without prior written notice to you.
          </Typography>
          <Typography variant="body2" paragraph>
            In the event of any material changes to the Terms, we will make reasonable efforts to post a clear notice on the Site and/or will attempt to send you an e-mail (to the extent that you provided us with such e-mail address) regarding such change.
          </Typography>
          <Typography variant="body2" paragraph>
            Your continued use of the Site, following any change to these Terms, constitutes your complete and irrevocable acceptance of any such change. If any modification to these Terms is not acceptable to you, your only recourse is to cease using the Site.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Minors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            To use the Site you must be over the age of thirteen (13). We reserve the right to request proof of age at any stage so that we can verify that minors under the age of thirteen (13) are not using the Site.
          </Typography>
          <Typography variant="body2">
            In the event that it comes to our knowledge that a person under the age of thirteen (13) is using the Site, we will prohibit and block you from accessing the Site and will make all efforts to promptly delete any information with respect thereto.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Warranty Disclaimer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            THE SITE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </Typography>
          <Typography variant="body2" paragraph>
            THE ENTIRE RISK ARISING OUT OF THE USE OR PERFORMANCE OF THE SITE REMAINS WITH YOU. THE COMPANY FURTHER DOES NOT REPRESENT OR WARRANT THAT THE SITE WILL ALWAYS BE AVAILABLE, ACCESSIBLE, FUNCTIONAL, UNINTERRUPTED, SECURE, ACCURATE, COMPLETE AND ERROR-FREE.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Exclusion of Consequential Damages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (TORT, CONTRACT, OR OTHERWISE), SHALL THE COMPANY OR ITS LICENSORS BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY TYPE INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER FAILURE OR MALFUNCTION, OR ANY AND ALL OTHER COMMERCIAL DAMAGES OR LOSSES.
          </Typography>
          <Typography variant="body2">
            Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this limitation and exclusion may not apply to you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Limitation of Liability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            YOU ACKNOWLEDGE AND AGREE THAT IN NO EVENT SHALL THE COMPANY HAVE ANY LIABILITY WHATSOEVER, WHETHER IN CONTRACT, TORT OR ANY OTHER THEORY OF LIABILITY, AND WHETHER OR NOT THE POSSIBILITY OF SUCH DAMAGES OR LOSSES HAS BEEN NOTIFIED TO THE COMPANY, IN CONNECTION WITH OR ARISING FROM YOUR USE OF THE SITE.
          </Typography>
          <Typography variant="body2" paragraph>
            YOUR ONLY RIGHT OR REMEDY WITH RESPECT TO ANY DISSATISFACTION WITH THE SITE IS TO IMMEDIATELY CEASE USE OF THE SITE.
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            THE COMPANY'S TOTAL LIABILITY TO YOU UNDER OR IN CONNECTION WITH YOUR USE OF THE SITE SHALL NOT EXCEED TEN U.S DOLLARS (US$10.00).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Indemnity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            You shall indemnify, defend, and hold us and our directors, officers, and employees from and against all claims, suites, costs, damages, losses, liability, and expenses, including reasonable attorneys' fees and other legal expenses, arising from or incurred as a result of your use of the Site, or your violation of these Terms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">International Data Transfer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            You hereby acknowledge that CUE7VEN may transfer your information, to other third party service providers across borders and from your country or jurisdiction to other countries or jurisdictions around the world. CUE7VEN may transfer such information to a country and jurisdiction that does not have the same data protection laws as your jurisdiction, and you consent to such transfer of information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Links to Third Party Sites</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            Certain links provided herein permit our Users to leave the Site and enter third party sites or services. These linked sites and services are provided solely as a convenience to you. These linked sites and services are not under the control of CUE7VEN and it is not responsible for the availability of such external sites or services, and does not endorse and is not responsible or liable for any content including but not limited to content advertising, products or other information on or available from such linked sites and services or any link contained in linked sites or service.
          </Typography>
          <Typography variant="body2">
            In addition, CUE7VEN is not responsible or liable for such linked sites and services' privacy practices and/or any other practices. Your access to, use of and reliance upon any such sites, services and content and your dealings with such third parties are at your sole risk and expense.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Termination</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            At any time, we may discontinue your use of the Site, at our sole discretion, with or without any reason or prior notice, in addition to any other remedies that may be available to CUE7VEN under any applicable law.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Payment Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            All payment will be made as per signed IO or shall be communicated by the AM.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Law and Jurisdiction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" paragraph>
            These Terms will be governed by, construed and enforced in accordance with the laws of India, without regard to its conflicts of law principles or provisions. The application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transactions Act is specifically excluded of these Terms.
          </Typography>
          <Typography variant="body2" paragraph>
            Any disputes arising out of or in connection with these Terms shall be finally exclusively settled under the Rules of Arbitration of the International Chamber of Commerce (the "ICC Rules") by one arbitrator appointed in accordance with the ICC Rules (the "Arbitrator"). The arbitration shall take place in Bangalore, INDIA and shall be conducted in the English Language.
          </Typography>
          <Typography variant="body2">
            The arbitration shall be conducted on a confidential basis. The award passed by the Arbitrator shall be final and binding. Nothing contained herein shall prevent the Company from applying to any court of law in order to obtain injunctions, equitable relief or any equivalent remedy, against you, in order to restrain the breach of any restrictive covenants pursuant to these Terms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
        <Typography variant="body2" align="center">
          For any questions regarding these Terms & Conditions, please contact us at <Link href="mailto:contact@cue7ven.com">contact@cue7ven.com</Link>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;