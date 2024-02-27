import React, { useState } from 'react';
import '../../styles/Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReviewPage() {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'JohnDoe44', rating: 5, comment: "I've been using Trabajador to find tech experts for my projects, and I'm always impressed by the quality of service. Whether it's coding, web development, or data analysis, I've found highly skilled professionals here who deliver exceptional results. Highly recommend!" },
    { id: 2, author: 'TechSavvy123', rating: 4, comment: "Trabajador has been my go-to platform for hiring local tech vendors. The variety of services available, from ethical hacking to web development, is impressive. While most of my experiences have been great, I've encountered a few delays in communication with vendors. Overall, a valuable resource for anyone needing tech expertise." },
    { id: 3, author: 'CodeMaster27', rating: 5, comment: "As a freelance developer, Trabajador has been instrumental in connecting me with clients seeking coding services. The platform is user-friendly, and I appreciate the focus on local vendors. The feedback system ensures transparency and trust between clients and vendors. Kudos to the team!" },
    // Additional reviews
    { id: 4, author: 'JaneSmith321', rating: 3, comment: "I've had mixed experiences with Trabajador. While I appreciate the range of services offered, I've encountered some challenges in finding reliable vendors. Communication has been a bit slow, and the quality of service varied. There's room for improvement." },
    { id: 5, author: 'DevMaster5000', rating: 4, comment: "Trabajador has been a valuable resource for finding skilled developers. The platform's interface is intuitive, and the feedback system helps maintain transparency. I've had mostly positive experiences and would recommend it to others in need of tech talent." },
    { id: 6, author: 'DataWhiz99', rating: 5, comment: "I've been using Trabajador for data analysis projects, and it has exceeded my expectations. The platform connects me with highly competent analysts, and the communication with vendors has been smooth. It's been a game-changer for my business." },
    { id: 7, author: 'DataDrivenGirl', rating: 4, comment: "Trabajador offers a convenient solution for finding data analysts and other tech professionals. I've had positive experiences with most vendors I've hired through the platform. However, I would appreciate more filtering options when searching for specific skills or expertise. Nonetheless, it's a valuable tool for businesses in need of tech talent." },
    { id: 8, author: 'EthicalHacker101', rating: 5, comment: "Trabajador is a gem for ethical hackers like myself. The platform not only connects us with clients but also facilitates secure transactions and communication. I've found numerous opportunities here and built long-term relationships with clients. If you're looking for ethical hacking services, look no further than Trabajador!" },
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} color={i <= rating ? '#ffc107' : '#ddd'} />
      );
    }
    return stars;
  };

  const renderReviews = () => {
    return reviews.map(review => (
      <div key={review.id} className="review">
        <div>
          <strong>{review.author}</strong> - Rating: {renderStars(review.rating)}
        </div>
        <p>{review.comment}</p>
      </div>
    ));
  };

  return (
    <div className="review-page">
      <h1 className='ReviewHeader'>Customer Reviews</h1>
      <div className="review-list">
        {reviews.length > 0 ? renderReviews() : <p>No reviews yet.</p>}
      </div>
      <div className="disclaimer">
        <p><strong>Disclaimer:</strong> The reviews displayed on this page are for demonstration purposes only and do not represent real user-generated content. They have been created solely for illustrative purposes during development.</p>
      </div>
    </div>
  );
}

export default ReviewPage;