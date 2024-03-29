"use client";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import ProductName from "./productName";

const Container = styled.div`
  padding-top: 4rem;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  @media (max-width: 768px) {
    font-size: 14px;
  }

  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
@media (max-width: 768px) {
  font-size: 12px;
}
  padding: 10px;
  margin-right: 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title className="md:text-5xl text-xl md:w-full font-bold text-textColor">Baby Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductName />
    </Container>
  );
};

export default ProductList;
