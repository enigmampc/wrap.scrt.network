import styled from 'styled-components';

export const StyledDropDownMenu = styled.div<{
  isShowMenu: boolean,
  onClick: any,
  isUpperCaseTitle: boolean,
}>` && {
  z-index: 1;
  white-space: nowrap;
  cursor: pointer;
  display: inline;

  & .items-block {
    position: relative;

    & .active-item {
      display: inline-flex;
      align-items: center;
      border-radius: 10px;
      padding: 11px;

      & img {
        width: 22px;
        height: 22px;
      }

      & .circle {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #353B4A;
        position: relative;

        &-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.grow};
        }
      }

      & .active-item-name {
        font-family: ${({ theme }) => theme.fonts.monsterRat_regular};
        margin: 0 8px;
        transition: .2s color;
        font-size: 14px;
        line-height: 150%;
        text-transform: ${({ isUpperCaseTitle }) => (isUpperCaseTitle ? 'uppercase' : 'capitalize')};
      }

      & .arrow-icon {
        cursor: pointer;
        transition: 0.35s ease-out;
        transform: ${({ isShowMenu }) => (isShowMenu ? 'rotate(0deg)' : 'rotate(-180deg)')};
      }
    }
  }
}`;

export const StyledList = styled.div<{
  isUpperCaseTitle: boolean
}>` && {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.bg};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: ${({ theme }) => theme.colors.active_bg};

  & .item {
    display: flex;
    align-items: center;
    padding: 8px 12px 4px 12px;
    transition: color .2s;
    font-family: ${({ theme }) => theme.fonts.monsterRat_regular};
    text-transform: ${({ isUpperCaseTitle }) => (isUpperCaseTitle ? 'uppercase' : 'capitalize')};
    font-size: 14px;
    line-height: 150%;

    & .title {
      margin-bottom: -2px;
    }

    & img {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }

    &:first-child {
      padding-top: 12px;
    }

    &:last-child {
      padding-bottom: 12px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
}`;