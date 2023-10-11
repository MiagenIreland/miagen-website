import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import Logo from '../assets/MiageLogo.svg';
// import Arrow from '../assets/Arrow.svg'
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const searchWrapperRef = useRef(null);
  const headerRef = useRef(null);

  const DropdownSection = ({ title, description, path }) => (
    <div 
      className={styles.dropdownSection} 
      onClick={() => path && navigateToPage(path)}  // Add click handler
    >
      <h4>{title}</h4>
      <p>{description}</p>
      {/* <img src={Arrow_forward} alt="Arrow forward" className="arrowIcon" /> */}
    </div>
  );
  

  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  
  const Dropdown = ({ sections }) => (
    <div className={styles.dropdown}>
      {sections.map((section, index) => (
        <DropdownSection key={index} {...section} />
      ))}
    </div>
  );

  const dropdownContents = {
    Solutions: (
      <Dropdown
        sections={[
          { title: "PlanaGen", description: "For Financial Planning", path: '/planagen' },
          { title: "LeaseGen", description: "For Aviation Leasing", path: '/leasegen' },
          { title: "SeaGen", description: "For Shipping", path: '/seagen' },
          { title: "GreenGen", description: "For ESG", path: '/greengen' },
          { title: "RouteGen", description: "For Airline", path: '/routegen' },
          { title: "Integrations Solutions" }
        ]}
      />
    ),
    Partners: (
      <Dropdown
        sections={[
          { title: "Planful", description: "For Continous Planning (Saas)", path: '/planful' },
          { title: "Workday Adaptive Planning", description: "For Enterprise Planning and Analysis", path: '/workday' },
          { title: "Boomi", description: "For Data Integration (iPaas)", path: '/boomi' },
          { title: "Domo", description: "For Business Intelligence (SaaS)", path: '/domo' },
          { title: "Trinitech", description: "For Financial Close and Reconciliation (SaaS)", path: '/trinitech'}
        ]}
      />
    ),

    Company: (
      <Dropdown
        sections={[
          { title: "About Us", path: '/aboutus' },
          { title: "Core Values", path: '/corevalues'},
          { title: "Resources", path: '/resources'},
          { title: "News & Events", path: '/newsandevents'},
          { title: "Our Teams", path: '/ourteams'},
          { title: "Careers", path: '/careers'},
          { title: "Contact", path: '/contact'},

        ]}
      />
    ),

    Resources: (
      <Dropdown
        sections={[
          {title: "Resources"},
          { title: "Whitepapers" },
          { title: "Case Studies"},
          { title: "Webinars"},
          { title: "Demos"},
        

        ]}
      />
    ),
    "Our Work": (
      <Dropdown
        sections={[
          { title: "What We do", path: '/whatwedo' },
          { title: "What You Get" , path: '/whatyouget'},
          { title: "How We Do It" , path: '/howwedoit'},
          { title: "Applications" , path: '/applications'},
          { title: "Our Work", path: '/ourwork' },

        ]}
      />
    )
    // Add similar dropdown content for other nav items if needed
    // ...
  };
  


  useEffect(() => {
    function handleClickOutside(event) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    function handleClickOutside(event) {
      if (!headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const header = headerRef.current;

        if (currentScrollY > 95) {
            header.classList.add(styles.transparentHeader);   // Add transparent class after 50px
        } else {
            header.classList.remove(styles.transparentHeader); // Remove transparent class before 50px
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <header className={`${styles.header} ${styles.transparentHeader}`} ref={headerRef}>
    <Link to="/">
  <img src={Logo} alt="Your Logo" className={styles.logo} />
</Link>

      <div className={styles.actions}>
   <nav className={styles.nav}>
      {["Solutions", "Partners", "Our Work", "Company", "Resources"].map(item => (
        <div
  className={styles.navItem}
  key={item}
  onClick={() => setActiveDropdown(prev => (prev === item ? null : item))}
>
  {item}
  {activeDropdown === item && (
    <div className={`${styles.dropdown} ${activeDropdown === item ? styles.active : ''}`}>
      {dropdownContents[item]}
    </div>
  )}
  <span className={styles.expandArrow}>
    {/* SVG for arrow */}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M4 6.5L9 11.5L14 6.5" stroke="#C2C6CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </span>
  
</div>
      ))}
    </nav>

        <div className={styles.searchWrapper} ref={searchWrapperRef}>
          <input
            type="text"
            className={styles.searchInput}
            style={{ width: showSearch ? '200px' : '0', opacity: showSearch ? 1 : 0 }}
            placeholder="Search ..."
            onBlur={() => setShowSearch(false)}
          />
          <span
            className={styles.searchIcon}
            style={{ opacity: showSearch ? 0 : 1 }}
            onClick={() => setShowSearch(true)}
          >
            {/* ... SVG for search icon ... */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 31" fill="none">
<path d="M13.75 24.25C19.2728 24.25 23.75 19.7728 23.75 14.25C23.75 8.72715 19.2728 4.25 13.75 4.25C8.22715 4.25 3.75 8.72715 3.75 14.25C3.75 19.7728 8.22715 24.25 13.75 24.25Z" stroke="#C2C6CA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 26.75L20.8125 21.3125" stroke="#C2C6CA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </span>
        </div>

        {/* Uncomment if you need the demo button */}
        {/* <button className={styles.demoButton}>Request Demo</button> */}
      </div>
    </header>
  );
}

export default Header;






{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M4 6.5L9 11.5L14 6.5" stroke="#C2C6CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}


{/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 31" fill="none">
<path d="M13.75 24.25C19.2728 24.25 23.75 19.7728 23.75 14.25C23.75 8.72715 19.2728 4.25 13.75 4.25C8.22715 4.25 3.75 8.72715 3.75 14.25C3.75 19.7728 8.22715 24.25 13.75 24.25Z" stroke="#C2C6CA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 26.75L20.8125 21.3125" stroke="#C2C6CA" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}