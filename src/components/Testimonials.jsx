import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>The website was user-friendly, allowing me to easily search for
            flights and hotels, compare prices, and book my entire itinerary in
            one place. Overall, Travelo website made my travel planning
            experience efficient and enjoyable.
            
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Rahul Tewatia</h4>
              
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I recently used Travelo website for booking a trip to Bali, and I
            was thoroughly impressed with their service.
          </p>
          <div className="info">
            <img src={avatar2} alt="" />
            <div className="details">
              <h4>Elina Sethi</h4>
              
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I had an amazing experience using Travelo website to book
            a family vacation to Europe. The website offered a wide range of
            options for flights, hotels, and tours, allowing me to customize my
            trip to suit my preferences and budget.
          </p>
          <div className="info">
            <img src={avatar3} alt="" />
            <div className="details">
              <h4>Dilnaz Tarun</h4>
            
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
