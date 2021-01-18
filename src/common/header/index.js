import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  HeaderWrapper, 
  HeaderWrap, 
  NavLogo, 
  Nav, 
  NavItem, 
  NavSearch, 
  Addition, 
  Button, 
  NavSearchWrapper,
  SearchAreaWrapper,
  SearchTitleWrapper,
  SearchAreaTitle,
  SwitchAreaWord,
  WordListWrapper,
  WordItem
 } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class Header extends Component {

  getAreaList() {
    const { isSearchFocused, list } = this.props;
    if (isSearchFocused) {
      return (
        <SearchAreaWrapper>
          <SearchTitleWrapper>
            <SearchAreaTitle>关键词</SearchAreaTitle>
            <SwitchAreaWord>换一换</SwitchAreaWord>
          </SearchTitleWrapper>
          <WordListWrapper>
            { list.map((item) => {
              return (
                <WordItem key={item}>{ item }</WordItem>
              )
            }) }
          </WordListWrapper>
        </SearchAreaWrapper>
      )
    } else {
      return null
    }
  }

  render() {
    const { isSearchFocused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
      <HeaderWrap>
        <NavLogo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <Addition>
            <Button className="write"><i className="iconfont">&#xe61e;</i> 写文章</Button>
            <Button className="register">注册</Button>
          </Addition>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={isSearchFocused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                className={isSearchFocused ? 'focused' : ''} 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={isSearchFocused ? 'iconfont focused' : 'iconfont'}>&#xe653;</i>
            { this.getAreaList() }
          </NavSearchWrapper>
        </Nav>
      </HeaderWrap>
    </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSearchFocused: state.getIn(['header', 'isSearchFocused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.onFoucs())
    },
    handleInputBlur() {
      dispatch(actionCreators.onBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// 改写为无状态组件（仅有render函数），提高性能

// const Header = (props) => {
//   return (
//     <HeaderWrapper>
//       <HeaderWrap>
//         <NavLogo />
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <Addition>
//             <Button className="write"><i className="iconfont">&#xe61e;</i> 写文章</Button>
//             <Button className="register">注册</Button>
//           </Addition>
//           <NavItem className="right">登录</NavItem>
//           <NavItem className="right">Aa</NavItem>
//           <NavSearchWrapper>
//             <CSSTransition
//               in={props.isSearchFocused}
//               timeout={200}
//               classNames="slide"
//             >
//               <NavSearch 
//                 className={props.isSearchFocused ? 'focused' : ''} 
//                 onFocus={props.handleInputFocus}
//                 onBlur={props.handleInputBlur}
//               />
//             </CSSTransition>
//             <i className={props.isSearchFocused ? 'iconfont focused' : 'iconfont'}>&#xe653;</i>
//           </NavSearchWrapper>
//         </Nav>
//       </HeaderWrap>
//     </HeaderWrapper>
//   )
// }