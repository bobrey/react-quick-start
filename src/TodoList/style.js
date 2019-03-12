import styled from 'styled-components';

export const CssSearchWrapper = styled.div`
  float: left;
  position: relative;

  .icon-search {
    width: 30px;
    right: 5px;
    bottom: 5px;
    position: absolute;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    
    &.focused {
      color: #fff;
      background: #777;
    }
  }
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
  
  &.focused {
    width: 240px;
  }
`;