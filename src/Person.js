import React from 'react'
import contacts from './contacts.json'


const styles = {
	backButton:{
		position:'absolute',
		top:10,
		left:10
	},
	imageContainer: {
		background: '#81bc39',
		textAlign: 'center',
		position:'relative'
	},
	list:{
		listStyle: 'none',
	},
	caps:{
		textTransform:'capitalize',
	}
}





export default React.createClass({
	getInitialState(){
		return{
			contact:contacts.filter(person=>{
				return Number(person.id) === Number(this.props.match.params.personId)
			})[0]
		}

	},
	handleBack(e){
		e.preventDefault()
		this.props.history.push('/')
	},


	render(){
		var contact = this.state.contact
		return(
			<div>
				<div style={styles.imageContainer}> 
					<button style={styles.backButton} onClick={this.handleBack} >BACK</button>
					<img src={contact.picture.medium} alt="contact selfie" />
				</div>
				<ul style={styles.list}>
					<li style={styles.caps}>{contact.name.first} {contact.name.last}</li>
					<hr/>
					<li>{contact.email}</li>
					<hr/>
					<li>{contact.phone}</li>
					<hr/>
					<li style={styles.caps}>{contact.location.city}, {contact.location.state}</li>

				</ul>



			</div>
		)
	}
})