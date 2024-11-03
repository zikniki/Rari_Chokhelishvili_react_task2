import React from 'react';
import './App.css';
import illustration1 from './assets/illustration1.svg';
import Group19 from './assets/Group 19.svg';
import ChatIcon from './assets/chatIcon.png';
import MainBg from './assets/Path 6.svg';
import Grow from './assets/grow_together.svg';
import Grow2 from './assets/grow_together2.svg';
import Grow3 from './assets/grow_together3.svg';
import MainBg2 from './assets/Path 5.svg';

function MainPart() {
    return (
        <main className="main">
            <section className="main-section">
                <div className="main-title">Build The Community Your Fans Will Love</div>
                <div className="main-text">
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                </div>
                <button className="mainButton main-button">Get Started For Free</button>
                <img src={illustration1} alt="" className="main-illustration" />
            </section>

            <section className="stats-section">
                <div className="stats-item">
                    <img className='group19' src={Group19} alt="" />
                    <div className="stats-number">1.4k+</div>
                    <div className="stats-label">Communities Formed</div>
                </div>
                <div className="stats-item">
                    <img src={ChatIcon} alt="" className="stats-icon" />
                    <div className="stats-number">2.7m+</div>
                    <div className="stats-label">Messages Sent</div>
                </div>
            </section>

            <section className="feature-section bg1">
                <div className="feature-content">
                    <div className="feature-title">Grow Together</div>
                    <div className="feature-text">
                        Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
                    </div>
                </div>
                <img src={Grow} alt="" className="feature-image" />
            </section>

            <section className="feature-section">
                <img src={Grow2} alt="" className="feature-image" />
                <div className="feature-content">
                    <div className="feature-title">Flowing Conversations</div>
                    <div className="feature-text">
                        You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
                    </div>
                </div>
            </section>

            <section className="feature-section bg2">
                <div className="feature-content">
                    <div className="feature-title">Your Users</div>
                    <div className="feature-text">
                        It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
                    </div>
                </div>
                <img src={Grow3} alt="" className="feature-image" />
            </section>

            <section className="call-to-action">
                <div className="call-to-action-title">Ready To Build Your Community?</div>
                <button className="mainButton main-button">Get Started For Free</button>
            </section>
        </main>
    );
}

export default MainPart;