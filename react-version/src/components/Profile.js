  import React from 'react'; //optional


// Old  
  // function Profile(){
  //   return (
  //     <aside>
  //     <div className="profile">
  //       <img className="profile__image" src="/profile-hex.png"/>
  //     </div>
  //     <br/>
  //     <div className="profile__name">
  //       <h2><span className="profile--bold">Amy</span> Mansell</h2>
  //     </div>
  //   </aside>
  //   );
  // }

// New
  function Profile() {
    const firstName = "Sorren"
    const lastName = "Jao"
    const avatar = "/profile-hex.png"

    return (
      <aside>
        <div className="profile">
          <img className="profile__image" src={avatar} />
        </div>
        <br />
        <div className="profile__name">
          <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
        </div>
      </aside>
    )
  }



  export default Profile;