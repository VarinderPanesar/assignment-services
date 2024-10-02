import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function OurServices() {
  return (
  <>
  <section className="ourservices" id="ourservices">
    <div className="ourservices-container">
      <h2>Excellent Service</h2>
      <h3>Delivering Excellence in Every Assignment!</h3>

      <div className="ourservices-type-wrapper">
        <div className="ourservice1 ourservices-type">
          <AssignmentIcon className="assignicon"/>
          <h3>Custom Essay Writing</h3>
          <p>Our expert writers craft personalized essays that align with your academic requirements, ensuring original content and thoughtful analysis. We work closely with you to understand your assignment guidelines and deliver essays that meet or exceed expectations. Whether it's a persuasive, analytical, or narrative essay, we've got you covered. </p>
        </div>
        <div className="ourservice2 ourservices-type">
        <EditCalendarIcon className="assignicon"/>
          <h3>Research Paper Assistance</h3>
          <p>We provide in-depth support for research papers, from topic selection and literature review to data analysis and conclusion. Our team of specialists ensures that your research is methodologically sound and well-organized, adhering to academic standards. We help you develop a strong thesis and compelling arguments backed by credible sources. </p>
        </div>
        <div className="ourservice3 ourservices-type">
          <NoteAltIcon className="assignicon"/>
          <h3>Proofreading and Editing</h3>
          <p>Our proofreading and editing service enhances your assignments by correcting grammar, syntax, and punctuation errors while improving overall clarity and flow. We ensure your work is polished and professional, ready for submission. Our editors also provide feedback to help you understand common mistakes and improve your writing skills.</p>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
