import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
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

  
  
const Product = ({ item }) => {
    return (
        <div className="flex p-4 rounded-xl ">
            <Container className="bg-gradColor/60">
                <Circle />
                <Image src={item.ImgUrl} />
                <div className="z-10 flex flex-col items-center">
                    <h1 className="text-xl font-bold">{item.Name}</h1>
                    <p className="text-gray-500">${item.Price}</p>
                </div>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
        </div>
    );
};
  
  export default Product;
  