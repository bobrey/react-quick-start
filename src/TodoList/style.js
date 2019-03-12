import styled from 'styled-components';

export const CssSearchWrapper = styled.div`
  position: relative;
`;

export const CssSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  color: #666;
  width: 160px;
  border: none;
  height: 38px;
  margin: 9px 0 0 20px;
  padding: 0 30px 0 20px;
  outline: none;
  font-size: 14px;
  background: #eee; 
  box-sizing: border-box;
  border-radius: 19px;
  
  &::placeholder {
    color: #999;
  }
`;