import styled from 'styled-components'
import logo from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  background-color: #fff;
  border-color: #f0f0f0;
`

export const HeaderWrap = styled.nav`
  background-color: #fff;
  border-color: #f0f0f0;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 56px;
  margin-bottom: 20px;
  border: 1px solid transparent;
`

export const NavLogo = styled.a.attrs(() => ({
  href: '/'
}))`
  float: left;
  width: 100px;
  height: 56px;
  padding: 0;
  vertical-align: middle;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Nav = styled.div`
  width: 100%;
  height: 56px;
  margin: 0 auto;
  background: #fff;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 15px;
  color: #969696;

  &.left {
    float: left;
  }

  &.right {
    float: right;
  }

  &.active {
    color: #ea6f5a;
    background: none;
  }
`

export const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  height: 100%;
  .iconfont {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    font-weight: bold;
    color: #969696;
    cursor: pointer;
    &.focused {
      background: #999;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs(() => ({
  type: "text",
  placeholder: '搜索'
}))`
  width: 180px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  margin-left: 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  @media (min-width: 1439px) {
    width: 240px;
  }
  &.slide-enter {
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 280px;
    transition: all .2s ease-out;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 180px;
  }
  &.focused {
    width: 280px;
  }
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  float: right;
  height: 56px;
  margin-left: 20px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  margin-bottom: 9px;
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  font-size: 15px;
  cursor: pointer;

  &.register {
    color: #ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
    &:hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236,97,73,.05);
    }
  }

  &.write {
    color: #fff;
    background-color: #ea6f5a;
    &:hover {
      color: #fff;
      background-color: #ec6149;
    }
  }
`

export const SearchAreaWrapper = styled.div`
  width: 280px;
  position: absolute;
  left: 15px;
  top: 61px;
  background-color: #ffffff;
  overflow: hidden;
  padding: 10px;
`

export const SearchTitleWrapper = styled.div`
  overflow: hidden;
`

export const SearchAreaTitle = styled.div`
  margin: 15px 0;
  font-size: 14px;
  color: #969696;
  float: left;
`

export const SwitchAreaWord = styled.div`
  margin: 15px 0;
  font-size: 14px;
  color: #969696;
  float: right;
  cursor: pointer;
`

export const WordListWrapper = styled.div`
  margin: 10px 0;
  overflow: hidden;
`

export const WordItem = styled.div`
  padding: 2px 6px;
  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
  border: 1px solid #969696;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`