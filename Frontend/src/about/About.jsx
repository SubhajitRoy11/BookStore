import React from 'react';
import './AboutPage.css'; // Import CSS file for styles

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>About Our Bookstore</h1>
                <p>Your gateway to a world of stories and knowledge.</p>
            </div>
            
            <div className="about-content">
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        We are passionate book lovers committed to providing readers with the finest collection of books, from timeless classics to the latest bestsellers. Our bookstore is designed to be a place of discovery, where stories come to life.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to inspire, educate, and entertain by offering a vast selection of books across genres, carefully curated for our readers. Whether you are a casual reader or a literary enthusiast, we aim to be your trusted source for all things books.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Wide selection of genres and titles</li>
                        <li>Special discounts for members</li>
                        <li>Friendly customer service</li>
                        <li>Regular events and book signings</li>
                    </ul>
                </section>
            </div>

            <div className="about-footer">
                <p>Visit us to explore, learn, and get lost in the magic of books!</p>
            </div>
        </div>
    );
}
