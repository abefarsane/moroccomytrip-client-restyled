import React, { Component } from 'react';
import { ReactComponent as Adventure } from './Media/adventure-svg.svg';

export default function About() {


    return (
        <div className='about-us'>
            <section className='about-header'>
                <h4 className='h4-about'>At our agency, we are passionate about travel and exploring new destinations. We believe that travel is more than just visiting a new place, <span> it's about immersing yourself</span> in the local culture, trying new foods, meeting new people, and creating memories that will last a lifetime.</h4>
                <Adventure />
            </section>

            <section className='about-team'>
                <img src='team-member.jpeg' />
                <section>
                <h4 className='h4-about'>Our team of experienced travel experts is dedicated to providing personalized service and creating <span> customized travel itineraries tailored to your unique interests and preferences.</span> We believe that every traveler is different and deserves a travel experience that reflects their individuality.</h4>

                <h4 className='h4-about'>We are committed to providing exceptional customer service and making sure that every aspect of your trip exceeds your expectations. <span>Our goal is to create unforgettable travel experiences</span> that leave you feeling inspired, refreshed, and eager to plan your next adventure with us.</h4>

                </section>
                
            </section>
            
            
        </div>
    )
}