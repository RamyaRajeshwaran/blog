import './singlepost.css'

export default function Singlepost() {
  return (
    <div className='singlepost'>
     <div className="singlepostwrapper">
        <img src="https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  className='singlepostImg'/>
     <h1 className="singlePostTitle">Lorem ipsum dolor sit adipisicing elit.
     <div className="singlePostEdit">
     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
     <i className="singlePostIcon fa-solid fa-trash-can"></i>
     </div>
     </h1>
     <div className="singlePostInfo">
        <span className='singlePostAuthor'>Author: <b>Safak</b></span>
        <span className='singlePostDate'>1 hour ago</span>

     </div>
     <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi sequi natus nisi eos. Veniam iste, ab illum consectetur quibusdam molestiae, perspiciatis architecto excepturi nulla repellat error a, perferendis modi!
     ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi sequi natus nisi eos. Veniam iste, ab illum consectetur quibusdam molestiae, perspiciatis architecto excepturi nulla repellat error a, perferendis modi!
     ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi sequi natus nisi eos. Veniam iste, ab illum consectetur quibusdam molestiae, perspiciatis architecto excepturi nulla repellat error a, perferendis modi!
     ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi sequi natus nisi eos. Veniam iste, ab illum consectetur quibusdam molestiae, perspiciatis architecto excepturi nulla repellat error a, perferendis modi!
     ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quasi sequi natus nisi eos. Veniam iste, ab illum consectetur quibusdam molestiae, perspiciatis architecto excepturi nulla repellat error a, perferendis modi!
     </p>
     </div>
    </div>
  )
}
