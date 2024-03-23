import React from 'react'

const Review = () => {
  return (
    <div className='reviews'>
        <h1><span>Hear from real</span> <br /> Zildo-find users</h1>
        <div className='reviews-cont'>
            <div>
                <h3>Robert A</h3>
                <h5>New Jersey, USA</h5>
                <>I've been looking for something exactly like this <br />
                for years, but i didn't think it existed. So glad i <br />
                found it.</>
            </div>

            <div>
                <h3>Cassy S.</h3>
                <h5>Melbourbe, Australia</h5>
                <>It's nice to know that my husband can easy get his<br />
                location in just one tap when he's away on business. Really easy to do.</>

            </div>

            <div>
                <h3>Mark G.</h3>
                <h5>Miami, USA</h5>
                <>I love how simple Zildo-find is, but also how powerful <br />
                and user friendly it is too.</>
            </div>
        </div>
    </div>
  )
}

export default Review
