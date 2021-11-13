export function User({ Name, age, city, pic, deleteButton, editButton,showButton }) {
  //user Information in each card is displayed with this component
  return <div className='user'>
    <img className='user-profile-pic' src={pic} alt={Name} />
    <div className='user-information'>
      <h3>{Name}</h3>
      <h5>Age: {age}</h5>
      <h5>City: {city}</h5>
      
      <div className='buttons'>
        {editButton}
        {deleteButton}
        {showButton}
      </div>
    </div>
  </div>;

}
