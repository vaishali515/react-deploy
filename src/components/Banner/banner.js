import React from 'react'
import pp from '../Banner/pp.jpeg'
import './banner.css'

const banner = (data) => {

  return (
    <>
    <div className="linkedin-profile">
      <div className="background-image">
        {/* Background image goes here */}
      </div>
      <div className="profile-content">
        <div className="profile-overlay"> 
          <img src={pp} alt="Profile" className="profile-picture" />
           </div>
           <div className="profile-info">
          <h2>Vaishali Chauhan</h2>
          <h3>Student at Lovely Professional University </h3>
          <p>vaishalichauhan946@gmail.com</p>
          <div className="icons">
          <div className="icon">
                <i className="far fa-thumbs-up"></i> 
                <span>{data.likes_count}</span>
              </div>
              <div className="icon">
                <i className="far fa-star"></i> 
                <span>{data.stars_count}</span>
              </div>
              <div className="icon">
                <i className="far fa-heart"></i> 
                <span>{data.watch_count}.k</span>
              </div>
              <div className="icon">
                <i className="far fa-eye"></i> 
                <span>{data.watch_count}.k</span>
              </div>
              </div>  
          </div>
       </div>
       <div className="additional-info">
        <div className="stats">
          <div>
          <button>
                Followers 
              </button>
              <span>{data.f_count}</span>
          </div>
          <div>
          <button>
                Following
              </button>
              <span>{data.fg_count}</span>
          </div>
          <div>
          <button>
                Posts
              </button>
              <span>{data.hs_count}</span>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="post">
        <div className="summary">
          <h2>Accomplish Your Dreams—You’ve Got This!</h2>
          <p>Success could be considered as the fuel on which the whole 
            world functions efficiently. The perspective of success is different 
            for every individual. For example, for one person success could be 
            to get his or her dream job whereas for others it could be to spend 
            a couple of hours with the family.</p>
          <p> One of the most important factors that lead to success is time management. 
           Time is considered to be the most precious asset of our lives. 
           Time is everything and it’s an invaluable entity and once spent it never comes back.
            So it is important to learn how to manage your time. Time management refers to the process
             of planning and executing the task and goals to get the maximum. If done properly would lead a person to be successful in his or her life. 
             The amount of time a person invests in improving himself will directly improve the chance of success....
         </p>
         <div className='foot'>
            <p >thought 
            <span>$by vaishalichauhan </span></p>
        </div>
        </div>
        </div>
        <div className="post">
        <div className="summary">
        <h2>The Importance Of Learning How To Code</h2>
          <p>The world is currently witnessing the Fourth Industrial Revolution (IR4) which is
             powered by digital technology. This technological advancement has changed the structure, 
             nature, and dynamics of employment, communication, manufacturing and production, and learning.</p>
             <p> In this regard, digital skills such as coding have become imperative for any business and individual’s success. 
                But to what extent is this concept an important consideration in the modern and future world? While it has been argued that this conceptualization is not crucial, evidence suggests otherwise..... </p>
           
          <div className='foot'>
            <p >thought 
            <span>$by vaishalichauhan </span></p>
        </div>  
        </div>
        </div>
        <div className="post">
        <div className="summary">
         <h2>Technology Is Growing Fast and Changing Our Lives</h2>
          <p>Over the years technology has been growing  fast. Knowing human use communication by texting and calling. It’s careless for humans because not seeing each other could cause them to have problems. Instead of going out together and be active they just waste time on their phones. Humans putting a stop of when they have access to their phones so that they can spend more time with friends.

            Technology is often changing our lives to make things easier and better for them.Then at the same time is keeping their families and friends away from them.
           </p> <p>”More humans are changing their way of thinking and they use more technology human will be realize technology is destroying human way of doing things alone.”.....</p>
          <div className='foot'>
            <p >thought 
            <span>$by vaishalichauhan </span></p>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default banner