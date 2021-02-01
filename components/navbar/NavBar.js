import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';

export default function NavBar({ active }) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(active || '');
  const handleItemClick = (event, element) => {
    setActiveItem(element.name);
    router.push(element.href);
  };
  return (
    <Menu>
      <Menu.Item href="/home" name="home" active={activeItem === 'home'} onClick={handleItemClick}>
        Home
      </Menu.Item>
      <Menu.Item
        href="/exercise/html"
        name="html"
        active={activeItem === 'html'}
        onClick={handleItemClick}
      >
        HTML
      </Menu.Item>
      <Menu.Item
        href="/exercise/css"
        name="css"
        active={activeItem === 'css'}
        onClick={handleItemClick}
      >
        CSS
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          href="/api/logout"
          name="logout"
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        >
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

NavBar.propTypes = {
  active: PropTypes.string.isRequired,
};
