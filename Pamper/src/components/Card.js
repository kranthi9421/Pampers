import React from 'react'

const Card = ({ item }) => {
  return (
    <div className="card card-style-1 border-0" key={item.id}>
      <div className="card-body p-0">
        <div className="image-thumbnail">
          <div className='overflow-hidden w-100 h-100'>
            <img src={item.thumbnail} className="img-fluid w-100 thumb_img" alt="" />
          </div>

          <span className="icon">
            <img src={item.icon} alt=""/>
          </span>
        </div>

        <div className="card-info">
          <h2 className="card-title">{item.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
