import ContentWrapper from './ContentWrapper';

function Cube({ children, className = '', border = 'pop' }) {
  return (
    <ContentWrapper
      theme='minimal'
      border={border}
      className={`group aspect-square flex-center  rounded-xs overflow-hidden ${className}`}
    >
      {children}
    </ContentWrapper>
  );
}

export default Cube;
