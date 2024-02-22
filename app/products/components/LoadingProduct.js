
import styled from "styled-components";
  
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 5px;
  width: 50%;
  border-radius: 10px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const LoadingProduct = ({ item }) => {
  return (
      <div className="flex p-4 w-[20vw] rounded-xl animate-pulse ">
          <Container className="bg-gradColor/20">
              <div className="h-4/5 w-4/5 bg-textColor/10"></div>
              <div className="z-10 flex flex-col items-center">
                  <div className="h-2 my-2 w-24 bg-textColor/10"> </div>
                  <div className="h-2 w-16 bg-textColor/10"></div>
              </div>
              
          </Container>
      </div>
  );
};

export default LoadingProduct;
