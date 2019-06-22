import React, { Component } from 'react';

class Menu extends Component {
   handleClick = (event, props) => {
       let text = event.target.innerText;
       this.props.updateSearch(text);
   }
    render() {
        return (
            <ul className='menu-parent'>
				<li className='column'>
					<button className='button is-primary' onClick={this.handleClick}>All</button>		
				</li>
				<li className='column'>
					<button className='button is-primary' onClick={this.handleClick}>Javascript</button>					
				</li>
				<li className='column'>
					<button className='button is-primary' onClick={this.handleClick}>Ruby</button>		
				</li>
				<li className='column'>
					<button className='button is-primary' onClick={this.handleClick}>Java</button>		
				</li>
				<li className='column'>
					<button className='button is-primary' onClick={this.handleClick}>CSS</button>	
				</li>
				<li className='column'>
					<button className='button is-primary' onClick={this.handleClick}>Python</button>			
				</li>
			</ul>
        );
    }
}

export default Menu;