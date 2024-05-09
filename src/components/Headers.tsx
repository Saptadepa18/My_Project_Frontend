
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { MenuItem, Menu, Segment } from 'semantic-ui-react';
 
const MenuExampleInvertedSecondary: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const navigate=useNavigate();
  
  const handleItemClick = (name: string) => {
    setActiveItem(name);
    console.log(name);
    navigate(`/${name}`);
  };
 
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <MenuItem
          name='home'
          active={activeItem === 'home'}
          onClick={() => handleItemClick('home')}
        />
        <MenuItem
          name='About us'
          active={activeItem === 'AboutUs'}
          onClick={() => handleItemClick('AboutUs')}
        />
        <MenuItem
          name='Contact us'
          active={activeItem === 'ContactUs'}
          onClick={() => handleItemClick('ContactUs')}
        />
        <div className='right menu'>
        <MenuItem
          name='Log out'
          active={activeItem === 'Log out'}
          onClick={()=>{
            navigate("/login");
            localStorage.removeItem("token");
            localStorage.removeItem("currId");
            localStorage.removeItem("role");
          }}
        />
        </div>
      </Menu>
    </Segment>
  );
};
 
export default MenuExampleInvertedSecondary;
