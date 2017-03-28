import React from 'react'
import {Link} from 'react-router-dom'
import contacts from './contacts.json'


const styles = {
  heading:{
    color:'white',
    background:'#81bc39',
    padding:20
  },
  list:{
    listStyle: 'none',
    padding:10,
    textTransform:'capitalize',
    textDecoration:'none',
    display:'inline-block',
  },
  link:{
    textDecoration:'none',
    color:'black',
  }
 
}

export default React.createClass({
	render (){
		return(
			 <div>
          <h2 style={styles.heading}>My Peeps</h2>

          <ul style={styles.list}>
          {contacts.map(contact=>(

          	<li key={'clist' + contact.id}>
             <Link style={styles.link} to={'/person/' + contact.id}>
             <img src={contact.picture.thumbnail} alt={contact.name.first + contact.name.last} />
              {contact.name.first} {contact.name.last}  </Link> </li>
            ))}

           
          </ul>
      

      </div>
			)
	}
})