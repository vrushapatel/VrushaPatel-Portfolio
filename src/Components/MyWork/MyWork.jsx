import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/logo1.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

  const [visibleCount, setVisibleCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (showAll) {
      setVisibleCount(3);
      setShowAll(false);
    } else {
      setVisibleCount(mywork_data.length);
      setShowAll(true);
    }
  };

  return (
    <div id='work' className='mywork'>

      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => {
          return (
            <a
              key={index}
              href={work.github_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mywork-card">
                <img src={work.w_img} alt="" />
                <h3>{work.w_name}</h3>

              </div>
            </a>
          )
        })}
      </div>

      <div className="mywork-showmore" onClick={handleToggle}>
        <p>{showAll ? "Show Less" : "Show More"}</p>

        <img
          src={arrow_icon}
          alt=""
          style={{
            transform: showAll ? "rotate(180deg)" : "rotate(0deg)"
          }}
        />
      </div>

      <br />
      <br />
      <br />

    </div>
  )
}

export default MyWork