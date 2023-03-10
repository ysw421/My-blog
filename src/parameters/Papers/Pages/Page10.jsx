import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';
import { MathComponent } from 'mathjax-react';
import { useNavigate } from 'react-router-dom';

export default function Page10(props) {
  const navigate = useNavigate();
  function goBack(url) {
    navigate('/' + url);
  }

  return (
    <>
      <MainText text="연립일차방정식은 행렬의 곱셈으로 나타낼 수 있습니다. 일반적으로 변수 " isSpan={true} />
      <MathComponent tex={String.raw`a`} display={false} />
      <MainText text="개의 값을 구하기 위해서는 식 또한 " isSpan={true} />
      <MathComponent tex={String.raw`a`} display={false} />
      <MainText text="개가 필요합니다. 예를들어 아래 변수 3개, " isSpan={true} />
      <MathComponent tex={String.raw`x_1, x_2, x_3`} display={false} />
      <MainText text="을 가진 식 3개를 행렬로 나타내어 봅시다." isSpan={true} />
      <Height50 num="20px" />
      <MathComponent tex={String.raw`x_1 + 5x_2 - 2x_3 = 12`} display={true} />
      <MathComponent tex={String.raw`-2x_1 + 3x_2 + 4x_3 = 2`} display={true} />
      <MathComponent tex={String.raw`4x_1 + x_2 + 3x_3 = 21`} display={true} />
      <Height50 num="20px" />
      <span onClick={() => goBack('paper/행렬')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <MainText text="이전 노드" isSpan={true} />
      </span>
      <MainText
        text="에서 알아보았듯이, 행렬의 곱은 각 행의 원소와 열의 원소의 곱을 더하여 계산합니다. 이 사실을 이용하여 위 식을 행렬로 나타내었습니다."
        isSpan={true}
      />
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{clr} 1 & 5 & -2 \\ -2 & 3 & 4 \\ 4 & 1 & 3 \end{array} \right] \left[ \begin{array}{clr} x_1 \\ x_2 \\ x_3 \end{array} \right] = \left[ \begin{array}{clr} 12 \\ 2 \\ 21 \end{array} \right]`}
        display={true}
      />
      <Height50 num="20px" />
      {/* <MainText
        text=""
        isSpan={true}
      />
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{ccc|c} 1 & 5 & -2 & x_1\\ -2 & 3 & 4 & x_2\\ 4 & 1 & 3 & x_3\end{array} \right] = \left[ \begin{array}{clr} 12 \\ 2 \\ 21 \end{array} \right]`}
        display={true}
      /> */}
      <MainText text="그렇다면, " />
    </>
  );
}
