import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import Page8 from './Pages/Page8';
import Page9 from './Pages/Page9';
import Page10 from './Pages/Page10';

function Papers(props) {
  return (
    <div style={{ fontFamily: 'font2' }}>
      {props.numberId === 1 && <Page1 isDarkMode={props.isDarkMode} />}
      {props.numberId === 2 && <Page2 isDarkMode={props.isDarkMode} />}
      {props.numberId === 3 && <Page3 isDarkMode={props.isDarkMode} />}
      {props.numberId === 4 && <Page4 isDarkMode={props.isDarkMode} />}
      {props.numberId === 5 && <Page5 isDarkMode={props.isDarkMode} />}
      {props.numberId === 6 && <Page6 isDarkMode={props.isDarkMode} />}
      {props.numberId === 7 && <Page7 isDarkMode={props.isDarkMode} />}
      {props.numberId === 8 && <Page8 isDarkMode={props.isDarkMode} />}
      {props.numberId === 9 && <Page9 isDarkMode={props.isDarkMode} />}
      {props.numberId === 10 && <Page10 isDarkMode={props.isDarkMode} />}
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

export default Papers;
