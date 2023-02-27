import styles from './MindMapPage.module.css';
import { motion } from 'framer-motion';
import Profile from '../../useful/Profile/Profile';
import MindMap from '../../useful/MindMap/MindMap';
import { useParams } from 'react-router-dom';
import { mindMapNodes } from '../../parameters/nodes';
import Error404 from '../../pages/404Error/404Error';
import { useEffect, useState } from 'react';

function MindMapPage(props) {
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const { id } = useParams();

  //   const findMindMap = mindMapNodes.find(function (product) {
  //     return product.id === id;
  //   });

  const [findMindMap, setFindMindMap] = useState(null);
  useEffect(() => {
    setFindMindMap(mindMapNodes[id]);

    console.log(findMindMap);
  });
  if (findMindMap === undefined) {
    return <Error404 isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <MindMap nodes={findMindMap} isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
        {/* <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} /> */}
      </motion.div>
      <Profile />
      <span className={styles.bottomBar} style={{ filter: props.isDarkMode ? 'brightness(0.7)' : 'brightness(1.1)' }}>
        Made with 🔥 by{' '}
        <span onClick={() => handleOpenNewTab('https://github.com/ysw421')} className={styles.linkToMyGit}>
          siwon
        </span>
      </span>
      <span className={styles.topText} style={{ color: props.isDarkMode ? '' : '#f8f8f8' }}>
        SiWon's Mind Map
      </span>
    </>
  );
}

export default MindMapPage;
